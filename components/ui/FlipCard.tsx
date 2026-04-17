"use client";

import { useState } from "react";
import { SkillBar } from "@/components/ui/SkillBar";

type Skill = { name: string; level: number };
type FlipCardProps = {
  id: number;
  title: string;
  years: number;
  icon: string;
  color: string;
  skills: Skill[];
};

export function FlipCard({ id, title, years, icon, color, skills }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className="group h-[320px] w-full [perspective:1000px]"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } group-hover:[transform:rotateY(180deg)]`}
        style={{
          border: `1px solid ${color}60`,
          boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20, inset 0 0 60px ${color}10`,
        }}
      >
        <div className="card-surface absolute inset-0 flex flex-col items-center justify-center gap-6 p-6 text-foreground dark:text-white [backface-visibility:hidden]">
          <div className="absolute left-4 top-4 text-xs text-white/50">TECH.NFT #{String(id).padStart(4, "0")}</div>
          <div
            className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase"
            style={{
              backgroundColor: `${color}20`,
              color,
              border: `1px solid ${color}60`,
            }}
          >
            {years >= 4 ? "EXPERT" : "ADVANCED"}
          </div>
          <div
            className="relative flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle, ${color}15 0%, transparent 70%)`,
              border: `2px solid ${color}40`,
              boxShadow: `0 0 30px ${color}30, inset 0 0 30px ${color}10`,
            }}
          >
            <span className="text-5xl">{icon}</span>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-xs tracking-[0.2em] text-muted dark:text-white/70">{years} YEARS EXPERIENCE</p>
          </div>
          <p className="absolute bottom-4 text-center text-xs text-white/60">Tap to flip →</p>
        </div>
        <div className="card-surface absolute inset-0 space-y-2 p-4 text-left text-foreground dark:text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} />
          ))}
          <p className="pt-2 text-center text-xs text-muted dark:text-white/60">← Tap to flip</p>
        </div>
      </div>
    </button>
  );
}
