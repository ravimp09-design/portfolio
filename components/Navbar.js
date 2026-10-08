"use client";
import { useState } from "react";
import { nav } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D6E4F7] bg-white/95 backdrop-blur-md shadow-xs transition-all">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-4">
          <a href="#top" className="group flex items-center font-display text-xl font-extrabold tracking-tight text-[#0A1128] transition-colors hover:text-[#004CE6]">
            <span>Ravi Yadav</span>
            <span className="text-[#004CE6] transition-transform group-hover:scale-125 ml-0.5">.</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/70 px-3.5 py-1 text-xs font-bold text-slate-800 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Available for Senior Roles
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-sm font-semibold text-slate-700 transition-colors hover:text-[#004CE6]"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ravimp09@gmail.com"
              className="inline-flex items-center justify-center rounded-xl bg-[#004CE6] px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition-all hover:bg-[#003BB3] hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="rounded-lg p-2 text-sm font-bold text-[#0A1128] transition-colors hover:bg-blue-50 hover:text-[#004CE6] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div id="mobile-menu" className="border-b border-[#D6E4F7] bg-white px-5 pb-6 pt-2 shadow-xl md:hidden">
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-semibold text-[#0A1128] hover:text-[#004CE6] transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="mailto:ravimp09@gmail.com"
                onClick={() => setOpen(false)}
                className="block text-center rounded-xl bg-[#004CE6] py-2.5 text-sm font-bold text-white shadow-md"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
