import { NextRequest, NextResponse } from "next/server";
import { getBloggerPosts } from "@/lib/blogger";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseLimit(searchParams.get("limit"));
  const pageToken = searchParams.get("pageToken")?.trim() || undefined;

  try {
    const postsPage = await getBloggerPosts({ limit, pageToken });

    return NextResponse.json(postsPage);
  } catch (error) {
    console.error("Blogger posts API failed", error);

    return NextResponse.json(
      { message: "Blog posts could not be loaded right now." },
      { status: 500 },
    );
  }
}

function parseLimit(value: string | null) {
  const parsed = Number(value);

  if (!Number.isInteger(parsed)) {
    return 9;
  }

  return Math.min(Math.max(parsed, 1), 12);
}
