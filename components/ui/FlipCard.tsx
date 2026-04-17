"use client";

import { useState } from "react";
import { SkillBar } from "@/components/ui/SkillBar";

type Skill = { name: string; level: number };
type FlipCardProps = {
  title: string;
  years: number;
  icon: string;
  color: string;
  skills: Skill[];
};

export function FlipCard({ title, years, icon, color, skills }: FlipCardProps) {
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
      >
        <div className="card-surface absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-white [backface-visibility:hidden]">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-xs tracking-[0.2em] text-white/70">{years} YEARS EXPERIENCE</p>
        </div>
        <div className="card-surface absolute inset-0 space-y-2 p-4 text-left text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} />
          ))}
          <p className="pt-2 text-center text-xs text-white/60">← Tap to flip</p>
        </div>
      </div>
    </button>
  );
}
