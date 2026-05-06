import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();
  return NextResponse.json({ reply: `AI Assistant: Based on your profile, focus on ${message || "cloud + AI productization"}.` });
}
