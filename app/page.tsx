"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { defaultProfile } from "@/lib/defaultProfile";
import { ResumeProfile } from "@/lib/types";

const themes = ["Cyberpunk Neon","Minimal White","Dark Professional","Space Galaxy","AI Matrix","Glassmorphism","Developer Hacker Mode"];

export default function Home() {
  const [profile, setProfile] = useState<ResumeProfile>(defaultProfile);
  const [theme, setTheme] = useState(themes[0]);
  const bg = useMemo(() => theme.includes("White") ? "from-slate-100 to-cyan-200 text-slate-900" : "from-slate-950 via-indigo-950 to-cyan-950", [theme]);

  async function onUpload(file: File) {
    const form = new FormData(); form.append("resume", file);
    const res = await fetch("/api/analyze-resume", { method: "POST", body: form });
    const data = await res.json();
    if (data.profile) setProfile(data.profile);
  }

  return <main className={`min-h-screen bg-gradient-to-br ${bg}`}>
    <section className="relative px-6 py-20">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#22d3ee_0,transparent_30%),radial-gradient(circle_at_80%_40%,#a855f7_0,transparent_30%)]" />
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="relative max-w-6xl mx-auto glass neon rounded-3xl p-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">{profile.name}</h1>
        <p className="mt-4 text-xl md:text-2xl">{profile.title}</p>
        <p className="mt-6 max-w-3xl text-slate-300">{profile.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">{["Download Resume","Hire Me","Contact Me","View Projects"].map(b => <button key={b} className="px-5 py-3 rounded-xl glass hover:scale-105 transition">{b}</button>)}</div>
      </motion.div>
    </section>

    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
      <div className="glass rounded-2xl p-5 md:col-span-2">
        <h2 className="text-2xl font-bold">AI Resume Analyzer</h2>
        <input type="file" accept=".pdf,.doc,.docx,.txt,image/*" className="mt-4" onChange={(e)=> e.target.files?.[0] && onUpload(e.target.files[0])} />
        <p className="mt-2 text-sm text-slate-400">Auto-extracts skills, projects, experience, certifications and generates AI insights.</p>
      </div>
      <div className="glass rounded-2xl p-5">
        <h3 className="font-semibold">Themes</h3>
        <div className="mt-3 flex flex-col gap-2">{themes.map(t=><button key={t} onClick={()=>setTheme(t)} className="text-left glass rounded-lg px-3 py-2">{t}</button>)}</div>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-6">
      <Card title="Skills">{profile.skills.map(s=><span key={s} className="px-3 py-1 glass rounded-full text-sm">{s}</span>)}</Card>
      <Card title="AI Insights">{profile.recommendations.map(s=><li key={s}>{s}</li>)}</Card>
      <Card title="Experience">{profile.experience.map(e=><div key={e.role}><p className="font-semibold">{e.role}</p><p>{e.org} · {e.period}</p></div>)}</Card>
      <Card title="Projects">{profile.projects.map(p=><div key={p.name}><p className="font-semibold">{p.name}</p><p>{p.description}</p></div>)}</Card>
      <Card title="Certifications">{profile.certifications.map(c=><li key={c}>{c}</li>)}</Card>
      <Card title="Achievements">{profile.achievements.map(a=><li key={a}>{a}</li>)}</Card>
    </section>
  </main>;
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <motion.div whileHover={{ rotateX: 2, rotateY: -2 }} className="glass rounded-2xl p-5"><h3 className="text-xl font-bold mb-3">{title}</h3><div className="flex flex-wrap gap-2">{children}</div></motion.div>;
}
