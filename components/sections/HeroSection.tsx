"use client";

import { motion } from "framer-motion";
import { TerminalWidget } from "@/components/ui/TerminalWidget";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
  // TODO: Replace with actual hosted resume URL/PDF once available in /public.
  const resumeUrl: string | null = null;

  return (
    <section id="home" className="dot-grid">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <p className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-muted">
              <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Senior AI Engineer · ML & GenAI · Open to Opportunities
            </p>
            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              <span>AI Engineer specializing in</span>
              <br />
              <span className="text-primary">LLMs, Generative AI, and scalable ML systems</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              I design and ship production LLM pipelines, agent-based systems, and reliable ML services that automate high-value workflows end-to-end.
            </p>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="rounded-full bg-primary px-6 py-3 font-semibold text-white" onClick={() => scrollToSection("featured-projects")}>
                View Projects
              </button>
              <a
                href="https://github.com/DanyalKh"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-primary px-6 py-3 font-semibold text-primary"
              >
                GitHub
              </a>
              {resumeUrl ? (
                <a href={resumeUrl} target="_blank" rel="noreferrer" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary">
                  Resume
                </a>
              ) : (
                <button type="button" disabled className="cursor-not-allowed rounded-full border border-border px-6 py-3 font-semibold text-muted">
                  Resume (TODO)
                </button>
              )}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <TerminalWidget />
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 grid gap-4 rounded-2xl border border-border bg-white/60 p-6 text-center text-sm dark:bg-[#121621] sm:grid-cols-3">
          <p><span className="text-2xl font-bold text-primary">9+</span> YEARS EXP.</p>
          <p className="sm:border-x sm:border-border"><span className="text-2xl font-bold text-secondary">6+</span> COUNTRIES</p>
          <p><span className="text-2xl font-bold text-primary">E2E</span> ML & AI</p>
        </motion.div>
      </div>
    </section>
  );
}
