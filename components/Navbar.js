"use client";
import { useState } from "react";
import { nav } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-borderLine bg-paper/95 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        {/* Brand Logo & Status */}
        <div className="flex items-center gap-4">
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink hover:text-accent transition-colors">
            Ravi Yadav<span className="text-accent">.</span>
          </a>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-medium text-sky-900">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
            Available for Senior Roles
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="text-sm font-medium text-inkMuted transition-colors hover:text-ink"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:ravimp09@gmail.com"
              className="inline-flex items-center justify-center rounded border border-sky-600 bg-sky-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-sky-700 hover:border-sky-700 transition-colors shadow-sm"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="text-sm font-medium text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div id="mobile-menu" className="border-b border-borderLine bg-paper px-5 pb-6 pt-2 md:hidden">
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-ink hover:text-accent transition-colors"
                >
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="mailto:ravimp09@gmail.com"
                onClick={() => setOpen(false)}
                className="block text-center rounded bg-sky-600 py-2.5 text-sm font-semibold text-white shadow-sm"
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
