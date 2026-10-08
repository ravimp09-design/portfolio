"use client";
import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { CopyButton } from "./UXEnhancements";
import {
  profile,
  skillsCategories,
  projects,
  experience,
  processSteps,
  aiSupport,
  education,
} from "@/data/content";

export function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-8">
          {/* Status Line */}
          <div className="fade-in flex items-center gap-2.5 text-xs font-mono font-bold text-[#0A1128] bg-white border-2 border-emerald-500/30 px-4 py-1.5 rounded-full w-fit shadow-xs" style={{ animationDelay: "0ms" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-xs shadow-emerald-500/50"></span>
            </span>
            <span className="tracking-wide uppercase text-slate-800">{profile.availability}</span>
          </div>

          {/* Main Title & Positioning */}
          <h1 className="fade-in mt-7 font-display text-4xl font-black tracking-tight text-[#0A1128] md:text-6xl lg:text-7xl leading-[1.05]" style={{ animationDelay: "100ms" }}>
            {profile.name}
          </h1>
          <div className="fade-in mt-3 space-y-1" style={{ animationDelay: "150ms" }}>
            <p className="font-display text-xl md:text-3xl font-extrabold bg-gradient-to-r from-[#004CE6] via-[#0059FF] to-[#0084FF] bg-clip-text text-transparent">
              {profile.title}
            </p>
            <p className="font-display text-lg md:text-2xl font-bold text-[#0A1128]/90 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-[#004CE6]"></span>
              <span>{profile.experienceYears}</span>
            </p>
          </div>

          {/* Positioning Statement */}
          <div className="fade-in mt-6 max-w-2xl" style={{ animationDelay: "250ms" }}>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
              {profile.tagline}
            </p>

            {/* Action Buttons & Contact Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-semibold">
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#004CE6] to-[#0062FF] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:from-[#003BB3] hover:to-[#004CE6] hover:shadow-2xl hover:shadow-blue-600/45 hover:-translate-y-0.5 active:scale-95"
              >
                View Selected Work ({projects.length})
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-[#0A1128] shadow-sm transition-all hover:border-[#004CE6] hover:bg-[#EEF4FF] hover:text-[#004CE6] hover:-translate-y-0.5 active:scale-95"
              >
                Get in Touch
              </a>
              <CopyButton text={profile.email} label={`Copy Email: ${profile.email}`} />
            </div>
          </div>
        </div>

        {/* Right Column: Profile Photo Card */}
        <div className="fade-in flex justify-center lg:col-span-4 lg:justify-end" style={{ animationDelay: "200ms" }}>
          <div className="relative group">
            {/* Strong Deep Blue Glow */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#004CE6] to-[#00A3FF] opacity-25 blur-2xl transition duration-500 group-hover:opacity-40" />
            
            {/* Photo Card Container with Double Border Accent */}
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-white p-2.5 shadow-2xl shadow-blue-600/25 ring-2 ring-[#004CE6]/20">
              <div className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 overflow-hidden rounded-xl bg-blue-50">
                <Image
                  src="/profile.jpg"
                  alt="Ravi Yadav - Senior UI/UX Designer & Product Designer"
                  fill
                  priority
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About" intro="12+ years of product design leadership.">
      <div className="strong-card rounded-2xl p-6 md:p-8 relative overflow-hidden border-t-4 border-t-[#004CE6]">
        <div className="absolute top-0 right-0 h-40 w-40 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal relative z-10">
          {profile.about}
        </p>
      </div>
    </Section>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "fintech", label: "FinTech" },
    { id: "enterprise", label: "Enterprise & SaaS" },
    { id: "visual", label: "Visual Showcase" },
  ];

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "fintech") return p.category.includes("FinTech");
    if (filter === "enterprise") return p.category.includes("Enterprise") || p.category.includes("SaaS");
    if (filter === "visual") return p.category.includes("Brand");
    return true;
  });

  return (
    <Section id="work" title="Selected Projects" intro="Real-world products designed and shipped with clear problems, contributions, and outcomes." fullWidth>
      {/* Category Tabs */}
      <div className="mb-8 flex flex-wrap gap-2.5 border-b border-[#D6E4F7] pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${filter === cat.id
              ? "bg-[#004CE6] text-white shadow-lg shadow-blue-600/30 ring-2 ring-[#004CE6]"
              : "bg-white border-2 border-slate-200 text-slate-700 hover:text-[#004CE6] hover:border-[#004CE6] hover:bg-[#EEF4FF]"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects List with Role | Problem | Contribution | Outcome Structure */}
      <div className="space-y-8">
        {filteredProjects.map((p, idx) => (
          <article
            key={p.id}
            className="strong-card rounded-2xl p-6 md:p-8 border-l-[6px] border-l-[#004CE6] transition-all hover:border-l-[#0062FF]"
          >
            {/* Title Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#D6E4F7] pb-5">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#004CE6] text-[10px] font-mono font-bold text-white">
                    0{idx + 1}
                  </span>
                  <span className="inline-block text-xs font-mono font-bold text-[#004CE6] bg-[#EEF4FF] border border-[#004CE6]/30 px-3 py-0.5 rounded-full">
                    {p.category}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-black text-[#0A1128] tracking-tight">{p.title}</h3>
                <p className="text-xs font-mono text-slate-600 mt-1 font-medium">Role: <span className="font-bold text-[#004CE6]">{p.role}</span></p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs font-mono text-[#004CE6] font-bold hover:text-[#002B82] transition-colors"
              >
                <span>{p.displayUrl}</span>
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5 font-bold">↗</span>
              </a>
            </div>

            {/* 3 Column Structure: Problem | Contribution | Outcome */}
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="bg-slate-50/90 p-5 rounded-xl border border-slate-200/90 hover:border-slate-300 transition-colors">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-500"></span>
                  Problem
                </h4>
                <p className="mt-2.5 text-sm text-slate-700 leading-relaxed font-normal">{p.problem}</p>
              </div>

              <div className="bg-[#EEF4FF] p-5 rounded-xl border border-[#99BEFF]/70 hover:border-[#004CE6]/50 transition-colors">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#004CE6] flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#004CE6]"></span>
                  Contribution
                </h4>
                <p className="mt-2.5 text-sm text-slate-800 leading-relaxed font-normal">{p.contribution}</p>
              </div>

              <div className="bg-emerald-50/90 p-5 rounded-xl border border-emerald-200/90 hover:border-emerald-400 transition-colors">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
                  Outcome
                </h4>
                <p className="mt-2.5 text-sm font-semibold text-emerald-900 leading-relaxed">{p.outcome}</p>
              </div>
            </div>

            {/* Tools & External Link */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#D6E4F7] pt-5">
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded-lg border border-blue-200 bg-[#EEF4FF] px-3 py-1 text-xs text-[#004CE6] font-mono font-bold">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#004CE6] px-5 py-2 text-xs font-bold text-white hover:bg-[#003BB3] transition-all shadow-md shadow-blue-600/20 active:scale-95"
              >
                Visit Live Site ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills & Core Disciplines" intro="Core competencies grouped across 4 primary areas.">
      <div className="grid gap-px border-2 border-[#D6E4F7] bg-[#D6E4F7] sm:grid-cols-2 rounded-2xl overflow-hidden shadow-md">
        {skillsCategories.map((group) => (
          <div key={group.category} className="bg-white p-6 md:p-8 transition-colors hover:bg-blue-50/40">
            <h3 className="font-display text-lg font-bold text-[#0A1128] border-b-2 border-[#D6E4F7] pb-3 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#004CE6]" />
              {group.category}
            </h3>
            <ul className="mt-4 space-y-3">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700 font-medium">
                  <span className="text-[#004CE6] font-extrabold text-sm">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" intro="Continuous design leadership at Infowind Technologies.">
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.company} className="strong-card rounded-2xl p-6 md:p-8 border-l-4 border-l-[#004CE6]">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#D6E4F7] pb-5">
              <div>
                <h3 className="font-display text-xl font-extrabold text-[#0A1128] tracking-tight">{job.company}</h3>
                <p className="text-sm font-bold text-[#004CE6] mt-0.5">{job.role} &bull; {job.location}</p>
              </div>
              <span className="font-mono text-xs text-[#004CE6] font-bold bg-[#EEF4FF] px-3.5 py-1 rounded-full border border-blue-200">{job.period} ({job.yearsCount})</span>
            </div>

            <ul className="mt-6 space-y-3.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-normal">
                  <span className="text-[#004CE6] font-extrabold text-base leading-none mt-0.5">•</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" title="Design Process" intro="Research → Define → Wireframe → Design → Prototype → Development.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((s) => (
          <div key={s.step} className="strong-card rounded-2xl p-6 group hover:border-[#004CE6]">
            <span className="font-mono text-xs font-bold text-[#004CE6] bg-[#EEF4FF] px-2.5 py-1 rounded-md border border-blue-200 group-hover:bg-[#004CE6] group-hover:text-white transition-colors">{s.step}</span>
            <h3 className="mt-4 font-display text-lg font-bold text-[#0A1128] group-hover:text-[#004CE6] transition-colors">{s.name}</h3>
            <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function AIWorkflow() {
  return (
    <Section id="ai" title="AI Workflow (Supporting Utility)">
      <div className="strong-card rounded-2xl p-6 md:p-8 max-w-3xl border-t-4 border-t-[#004CE6]">
        <h3 className="font-display text-lg font-bold text-[#0A1128] mb-2 flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#004CE6]" />
          {aiSupport.title}
        </h3>
        <p className="text-sm text-slate-700 leading-relaxed font-normal">{aiSupport.text}</p>
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="strong-card rounded-2xl p-6 md:p-8 max-w-xl border-l-4 border-l-[#004CE6]">
        <h3 className="font-display text-lg font-bold text-[#0A1128]">{education.degree}</h3>
        <p className="text-sm font-bold text-[#004CE6] mt-1">{education.institution}</p>
        <p className="text-xs text-slate-500 font-mono mt-1 font-medium">{education.location}</p>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="strong-card rounded-3xl p-8 md:p-14 relative overflow-hidden border-2 border-[#004CE6]/30 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EDF4FF]">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <h3 className="font-display text-2xl md:text-4xl font-extrabold tracking-tight text-[#0A1128] relative z-10">
          Available for Senior UI/UX &amp; Product Design Roles
        </h3>
        <p className="mt-3 text-base text-slate-700 max-w-xl leading-relaxed relative z-10 font-normal">
          Open to Senior UI/UX Designer, Lead Product Designer, and Design Systems Architect opportunities. Feel free to reach out directly.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4 relative z-10 font-semibold">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded-xl bg-[#004CE6] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-600/30 transition-all hover:bg-[#003BB3] hover:shadow-2xl hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95"
          >
            Email Me: {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-bold text-[#0A1128] shadow-xs transition-all hover:border-[#004CE6] hover:bg-[#EEF4FF] hover:text-[#004CE6] hover:-translate-y-0.5 active:scale-95"
          >
            Call: {profile.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-t-2 border-[#D6E4F7] pt-6 relative z-10">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#004CE6] underline-offset-4 hover:text-[#002B82] hover:underline transition-colors"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-[#D6E4F7] bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-slate-600 md:px-8 font-medium">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Senior UI/UX Designer &amp; Front-End Developer.</p>
        <a href="#top" className="font-bold text-[#004CE6] hover:text-[#002B82] transition-all">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
