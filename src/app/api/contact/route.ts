import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const serviceInterests = new Set([
  "Transformation delivery",
  "AI-informed advisory",
  "Digital enablement",
  "Governance and delivery support",
]);

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = Record<string, unknown>;

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return validationError();
  }

  if (!isRecord(payload)) {
    return validationError();
  }

  if (getString(payload, "website")) {
    console.info("Contact form honeypot submission ignored");
    return NextResponse.json({ ok: true });
  }

  const submission = validateSubmission(payload);

  if (!submission.ok) {
    return validationError();
  }

  let mailConfig: ReturnType<typeof getMailConfig>;

  try {
    mailConfig = getMailConfig();
  } catch (error) {
    console.error("Contact form mail configuration error", error);
    return sendError();
  }

  try {
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass,
      },
    });

    const info = await transporter.sendMail({
      to: mailConfig.to,
      from: {
        name: "Prosopon Website",
        address: mailConfig.from,
      },
      sender: mailConfig.user,
      replyTo: {
        name: submission.value.name,
        address: submission.value.email,
      },
      subject: `New Prosopon contact form submission from ${submission.value.name}`,
      text: buildTextEmail(submission.value),
      html: buildHtmlEmail(submission.value),
    });

    console.info("Contact form mail delivery accepted", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form mail delivery error", sanitizeMailError(error));
    return sendError();
  }
}

function validateSubmission(payload: ContactPayload) {
  const name = getString(payload, "name");
  const email = getString(payload, "email");
  const company = getString(payload, "company");
  const service = getString(payload, "service");
  const message = getString(payload, "message");

  if (!name || !email || !message) {
    return { ok: false as const };
  }

  if (
    name.length > 120 ||
    email.length > 254 ||
    company.length > 160 ||
    service.length > 80 ||
    message.length > 4000 ||
    !emailPattern.test(email) ||
    !serviceInterests.has(service)
  ) {
    return { ok: false as const };
  }

  return {
    ok: true as const,
    value: {
      name,
      email,
      company,
      service,
      message,
    },
  };
}

function getMailConfig() {
  const port = Number(getRequiredEnv("SMTP_PORT"));
  const user = getRequiredEnv("SMTP_USER");
  const from = getOptionalEmailEnv("CONTACT_FROM_EMAIL") || user;

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error("SMTP_PORT must be a valid port number");
  }

  return {
    host: getRequiredEnv("SMTP_HOST"),
    port,
    secure: parseSecure(getRequiredEnv("SMTP_SECURE")),
    user,
    pass: getRequiredEnv("SMTP_PASS"),
    to: getRequiredEnv("CONTACT_TO_EMAIL"),
    from,
  };
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing ${name}`);
  }

  return value;
}

function parseSecure(value: string) {
  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  throw new Error("SMTP_SECURE must be true or false");
}

function getOptionalEmailEnv(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    return "";
  }

  if (!emailPattern.test(value)) {
    console.warn(`${name} is not a valid email address. Falling back to SMTP_USER.`);
    return "";
  }

  return value;
}

function getString(payload: ContactPayload, key: string) {
  const value = payload[key];

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function buildTextEmail(submission: ContactSubmission) {
  return [
    "New Prosopon contact form submission",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company || "Not provided"}`,
    `Service interest: ${submission.service}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");
}

function buildHtmlEmail(submission: ContactSubmission) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1C1A16;">
      <h1 style="font-size: 20px;">New Prosopon contact form submission</h1>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
        ${htmlRow("Name", submission.name)}
        ${htmlRow("Email", submission.email)}
        ${htmlRow("Company", submission.company || "Not provided")}
        ${htmlRow("Service interest", submission.service)}
      </table>
      <h2 style="font-size: 16px; margin-top: 24px;">Message</h2>
      <p style="white-space: pre-line;">${escapeHtml(submission.message)}</p>
    </div>
  `;
}

function htmlRow(label: string, value: string) {
  return `
    <tr>
      <th align="left" style="padding: 4px 16px 4px 0;">${escapeHtml(label)}</th>
      <td style="padding: 4px 0;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isRecord(value: unknown): value is ContactPayload {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function sanitizeMailError(error: unknown) {
  if (!(error instanceof Error)) {
    return error;
  }

  return {
    name: error.name,
    message: error.message,
    code: getErrorProperty(error, "code"),
    command: getErrorProperty(error, "command"),
    response: getErrorProperty(error, "response"),
    responseCode: getErrorProperty(error, "responseCode"),
  };
}

function getErrorProperty(error: Error, key: string) {
  const value = (error as unknown as Record<string, unknown>)[key];

  if (typeof value === "string" || typeof value === "number") {
    return value;
  }

  return undefined;
}

function validationError() {
  return NextResponse.json(
    { ok: false, message: "Please check the form details and try again." },
    { status: 400 },
  );
}

function sendError() {
  return NextResponse.json(
    { ok: false, message: "The message could not be sent right now. Please try again later." },
    { status: 500 },
  );
}
