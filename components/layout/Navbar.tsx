"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { scrollToSection } from "@/lib/utils";

const navItems = ["home", "journey", "ecosystem", "projects", "about", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button type="button" className="text-lg font-bold text-primary" onClick={() => scrollToSection("home")}></button>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button key={item} type="button" className="text-xs font-semibold tracking-[0.2em] text-muted uppercase hover:text-foreground" onClick={() => scrollToSection(item)}>
              {item}
            </button>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button type="button" className="rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary">Hire Me</button>
          <button
            type="button"
            className="rounded-full border border-border p-2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle dark mode"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
        <button type="button" className="md:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          ☰
        </button>
      </div>
      {open ? (
        <div className="space-y-3 border-t border-border px-6 py-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className="block w-full text-left text-sm uppercase text-muted"
              onClick={() => {
                scrollToSection(item);
                setOpen(false);
              }}
            >
              {item}
            </button>
          ))}
          <button type="button" className="rounded-full border border-primary px-4 py-2 text-xs font-semibold text-primary">Hire Me</button>
        </div>
      ) : null}
    </header>
  );
}
