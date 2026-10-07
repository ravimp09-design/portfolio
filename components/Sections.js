"use client";
import { useState } from "react";
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
    <section id="top" className="mx-auto max-w-6xl px-5 pb-16 pt-12 md:px-8 md:pb-20 md:pt-16">
      {/* Status Line */}
      <div className="fade-in flex items-center gap-2 text-xs font-mono text-sky-800 bg-sky-100/80 border border-sky-200 px-3 py-1 rounded-full w-fit" style={{ animationDelay: "0ms" }}>
        <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
        <span>{profile.availability}</span>
      </div>

      {/* Main Title & Positioning */}
      <h1 className="fade-in mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl leading-[1.05]" style={{ animationDelay: "100ms" }}>
        {profile.name}
      </h1>
      <p className="fade-in mt-2 font-display text-xl md:text-3xl font-semibold text-sky-700" style={{ animationDelay: "150ms" }}>
        {profile.title} — {profile.experienceYears}
      </p>

      {/* Positioning Statement */}
      <div className="fade-in mt-6 max-w-3xl" style={{ animationDelay: "250ms" }}>
        <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-normal">
          {profile.tagline}
        </p>

        {/* Action Buttons & Contact Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm font-medium">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded border border-sky-600 bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 hover:border-sky-700 transition-colors shadow-sm"
          >
            View Selected Work ({projects.length})
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded border border-sky-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-sky-400 hover:bg-sky-50/50 transition-colors shadow-sm"
          >
            Get in Touch
          </a>
          <CopyButton text={profile.email} label={`Copy Email: ${profile.email}`} />
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <Section id="about" title="About" intro="13+ years of product design leadership.">
      <div className="editorial-card rounded-xl p-6 md:p-8">
        <p className="text-base md:text-lg text-slate-700 leading-relaxed font-normal">
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
      <div className="mb-8 flex flex-wrap gap-2 border-b border-sky-200 pb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded transition-colors ${filter === cat.id
                ? "bg-sky-600 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-sky-300"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects List with Role | Problem | Contribution | Outcome Structure */}
      <div className="space-y-8">
        {filteredProjects.map((p) => (
          <article
            key={p.id}
            className="editorial-card rounded-xl p-6 md:p-8"
          >
            {/* Title Header */}
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">{p.category}</span>
                <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">{p.title}</h3>
                <p className="text-xs font-mono text-slate-600 mt-0.5">Role: <span className="font-semibold text-slate-900">{p.role}</span></p>
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-700 font-semibold hover:underline"
              >
                <span>{p.displayUrl}</span>
                <span>↗</span>
              </a>
            </div>

            {/* 3 Column Structure: Problem | Contribution | Outcome */}
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/60">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Problem</h4>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{p.problem}</p>
              </div>

              <div className="bg-sky-50/60 p-4 rounded-lg border border-sky-100">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-900">Contribution</h4>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{p.contribution}</p>
              </div>

              <div className="bg-emerald-50/60 p-4 rounded-lg border border-emerald-100">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-900">Outcome</h4>
                <p className="mt-2 text-sm font-semibold text-emerald-900 leading-relaxed">{p.outcome}</p>
              </div>
            </div>

            {/* Tools & External Link */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4">
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="rounded border border-sky-200 bg-sky-50/60 px-2.5 py-1 text-xs text-sky-800 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded border border-sky-600 bg-white px-4 py-2 text-xs font-semibold text-sky-700 hover:bg-sky-600 hover:text-white transition-colors shadow-sm"
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
      <div className="grid gap-px border border-sky-200/80 bg-sky-200/80 sm:grid-cols-2 rounded-xl overflow-hidden shadow-sm">
        {skillsCategories.map((group) => (
          <div key={group.category} className="bg-white p-6 md:p-8">
            <h3 className="font-display text-base font-bold text-slate-900 border-b border-slate-200 pb-3">{group.category}</h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="text-sky-600 text-xs">▸</span>
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
          <div key={job.company} className="editorial-card rounded-xl p-6 md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">{job.company}</h3>
                <p className="text-sm font-semibold text-sky-700">{job.role} &bull; {job.location}</p>
              </div>
              <span className="font-mono text-xs text-slate-600 font-bold bg-sky-50 px-2.5 py-1 rounded border border-sky-200">{job.period} ({job.yearsCount})</span>
            </div>

            <ul className="mt-6 space-y-3">
              {job.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                  <span className="text-sky-600 font-bold text-xs mt-0.5">•</span>
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
          <div key={s.step} className="editorial-card rounded-xl p-5">
            <span className="font-mono text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">{s.step}</span>
            <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{s.name}</h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function AIWorkflow() {
  return (
    <Section id="ai" title="AI Workflow (Supporting Utility)">
      <div className="editorial-card rounded-xl p-6 max-w-3xl">
        <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{aiSupport.title}</h3>
        <p className="text-sm text-slate-700 leading-relaxed">{aiSupport.text}</p>
      </div>
    </Section>
  );
}

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="editorial-card rounded-xl p-6 max-w-xl">
        <h3 className="font-display text-lg font-bold text-slate-900">{education.degree}</h3>
        <p className="text-sm font-semibold text-sky-700 mt-1">{education.institution}</p>
        <p className="text-xs text-slate-500 font-mono mt-1">{education.location}</p>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="editorial-card rounded-xl p-8 md:p-12">
        <h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-slate-900">
          Available for Senior UI/UX &amp; Product Design Roles
        </h3>
        <p className="mt-3 text-base text-slate-600 max-w-xl leading-relaxed">
          Open to Senior UI/UX Designer, Lead Product Designer, and Design Systems Architect opportunities. Feel free to reach out directly.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center rounded border border-sky-600 bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 hover:border-sky-700 transition-colors shadow-sm"
          >
            Email Me: {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center justify-center rounded border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-sky-400 hover:bg-sky-50/50 transition-colors shadow-sm"
          >
            Call: {profile.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-slate-200 pt-6">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-sky-700 underline-offset-4 hover:text-sky-900 hover:underline"
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
    <footer className="border-t border-sky-200 bg-paper">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-slate-600 md:px-8">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Senior UI/UX Designer &amp; Front-End Developer.</p>
        <a href="#top" className="font-semibold text-sky-700 hover:text-sky-900 transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
