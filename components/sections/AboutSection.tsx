"use client";

import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/Timeline";
import { certifications, education } from "@/data/timeline";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ THE ENGINEER</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>About</span> <span className="text-secondary">Me</span></h2>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-3xl">🤖</div>
          <p className="text-muted">I&apos;m a <strong className="text-foreground">Senior AI Engineer</strong> with 9+ years delivering production-grade ML systems, GenAI/RAG applications, and ERP-integrated data pipelines across the UAE, Europe, and South Asia.</p>
          <p className="text-muted">Built LLM-powered workflows using LangChain & Gemini API, demand forecasting models, and high-volume FastAPI services that handle thousands of daily ERP transactions. Engineered Airflow/Spark pipelines that cut manual reporting time by 40%+.</p>
          <div className="flex flex-wrap gap-2">
            {["Applied ML Engineering", "MLOps", "Agentic Workflows", "GenAI & RAG", "LLM Applications", "ERP & API Integration"].map((item) => (
              <span key={item} className="rounded-full border border-border px-3 py-1 text-xs">{item}</span>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((item) => (
              <div key={item.degree} className="rounded-xl border border-border bg-white/60 p-4 dark:bg-[#141824]">
                <p className="font-semibold">{item.degree}</p>
                <p className="text-sm text-muted">{item.institution}</p>
                <p className="text-sm text-muted">{item.location}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold tracking-wider text-primary uppercase">Certifications</h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {certifications.map((certification) => (
                <div key={certification} className="flex items-start gap-2 rounded-lg border border-border bg-white/80 p-3 text-sm dark:bg-[#141824]">
                  <span className="text-primary">✓</span>
                  <span className="flex-1">{certification}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Timeline />
        </motion.div>
      </div>
    </section>
  );
}
