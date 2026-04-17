"use client";

import { motion } from "framer-motion";

type SkillBarProps = {
  name: string;
  level: number;
  color: string;
};

export function SkillBar({ name, level, color }: SkillBarProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-white/80">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
