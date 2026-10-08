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
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#004CE6] bg-white text-[#004CE6] shadow-xl shadow-blue-600/20 transition-all hover:scale-110 hover:bg-[#004CE6] hover:text-white hover:shadow-blue-600/40 active:scale-95"
    >
      <span className="text-lg font-extrabold">↑</span>
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
      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-sm transition-all hover:border-[#004CE6] hover:bg-[#EEF4FF] hover:text-[#004CE6] active:scale-95"
    >
      <span className="flex h-2 w-2 rounded-full bg-[#004CE6]"></span>
      <span>{copied ? "✓ Copied to clipboard" : label || text}</span>
    </button>
  );
}
