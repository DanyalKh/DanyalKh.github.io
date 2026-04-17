"use client";

import { motion } from "framer-motion";
import { techStackGroups } from "@/data/techStack";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ CORE STACK</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>Tech</span> <span className="text-secondary">Stack</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Built for production LLM pipelines, agent-based systems, and scalable ML services.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {techStackGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-2xl border border-border bg-white/70 p-6 dark:bg-[#121621]"
          >
            <h3 className="text-lg font-semibold">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
