"use client";

import { motion } from "framer-motion";
import { ecosystemCategories } from "@/data/ecosystem";
import { EcosystemPill } from "@/components/ui/EcosystemPill";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ COMMAND CENTER</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>The</span> <span className="text-secondary">Ecosystem</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">The full stack of tools, platforms, and frameworks powering every system I build.</p>
      </div>
      <div className="mt-12 space-y-6">
        {ecosystemCategories.map((category, index) => (
          <motion.div key={category.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-2xl border border-border border-l-4 border-l-purple-200 bg-white/70 p-5 dark:border-l-white/10 dark:bg-[#121621]">
            <p className="mb-4 font-semibold"><span className="mr-2">{category.icon}</span>{category.label}</p>
            <div className="flex flex-wrap gap-2">
              {category.tools.map((tool) => (
                <EcosystemPill key={tool} tool={tool} color={category.color} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
