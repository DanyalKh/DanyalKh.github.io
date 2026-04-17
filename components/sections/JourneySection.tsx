"use client";

import { motion } from "framer-motion";
import { skillCards } from "@/data/skills";
import { FlipCard } from "@/components/ui/FlipCard";

export function JourneySection() {
  return (
    <section id="journey" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ TECH TERRITORIES</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>The</span> <span className="text-secondary">Journey</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">Each technology is a destination explored in depth. Flip a card to reveal the full skill map.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillCards.map((card, index) => (
          <motion.div key={card.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <FlipCard {...card} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
