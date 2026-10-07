"use client";
import { useState, useEffect } from "react";

export function ScrollToTopFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded border border-sky-200 bg-white text-sky-700 shadow-sm transition-all hover:border-sky-500 hover:bg-sky-50"
    >
      ↑
    </button>
  );
}

export function CopyButton({ text, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      className="inline-flex items-center gap-2 rounded border border-sky-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:border-sky-400 hover:bg-sky-50/50 transition-colors shadow-sm"
    >
      <span>{copied ? "✓ Copied to clipboard" : label || text}</span>
    </button>
  );
}
