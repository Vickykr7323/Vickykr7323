import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { defaultProfile } from "@/lib/defaultProfile";

const profileSchema = z.object({ name: z.string(), title: z.string(), summary: z.string(), skills: z.array(z.string()), experience: z.array(z.object({ role: z.string(), org: z.string(), period: z.string(), highlights: z.array(z.string()) })), projects: z.array(z.object({ name: z.string(), description: z.string(), stack: z.array(z.string()), link: z.string().optional() })), certifications: z.array(z.string()), achievements: z.array(z.string()), recommendations: z.array(z.string()) });

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const file = form.get("resume") as File | null;
  if (!file) return NextResponse.json({ error: "resume file required" }, { status: 400 });
  const text = await file.text().catch(()=>"");

  const extracted = {
    ...defaultProfile,
    summary: text?.slice(0, 320) || defaultProfile.summary,
    recommendations: ["Add quantified teaching outcomes", "Add AI/ML publication links", "Show GitHub pinned projects with demos"]
  };
  const profile = profileSchema.parse(extracted);
  return NextResponse.json({ profile });
}
