"use client";

import { motion } from "framer-motion";
import { TerminalWidget } from "@/components/ui/TerminalWidget";
import { scrollToSection } from "@/lib/utils";

export function HeroSection() {
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
              <span>Building</span>
              <br />
              <span className="text-primary">Intelligent Systems</span>
            </h1>
            <p className="max-w-2xl text-lg text-muted">
              9+ years delivering production-grade ML systems, GenAI/RAG applications, and ERP-integrated data pipelines. Built LLM-powered workflows that boosted recurring revenue by 20%. Python · LangChain · FastAPI · Airflow · Spark · Azure.
            </p>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="rounded-full bg-primary px-6 py-3 font-semibold text-white" onClick={() => scrollToSection("journey")}>
                Explore My Journey ↓
              </button>
              <button type="button" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary" onClick={() => scrollToSection("projects")}>
                VIEW PROJECTS
              </button>
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
