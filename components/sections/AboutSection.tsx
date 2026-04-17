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
          <p className="text-muted">
            I build <strong className="text-foreground">LLM applications</strong> with LangChain, retrieval pipelines, and agent orchestration to solve production business workflows that require grounded answers and reliable automation.
          </p>
          <p className="text-muted">
            My ML systems work spans demand forecasting, optimization, and API-first delivery through FastAPI microservices and orchestrated pipelines. I prioritize evaluation, monitoring, and guardrails so GenAI features remain stable and auditable in production.
          </p>
          <div className="flex flex-wrap gap-2">
            {["LLM Pipelines", "Agent-based Systems", "Prompt Engineering", "RAG Retrieval", "Evaluation & Monitoring", "FastAPI + ML Services"].map((item) => (
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
