"use client";

import { useState } from "react";
import { SkillBar } from "@/components/ui/SkillBar";

type Skill = { name: string; level: number };
type CenterIcon = "ml" | "data" | "python" | "api" | "db" | "cloud";
type Level = "EXPERT" | "ADVANCED";
type FlipCardProps = {
  id: number;
  title: string;
  years: number;
  icon: string;
  centerIcon: CenterIcon;
  description: string;
  tech: string[];
  level?: Level;
  color: string;
  skills: Skill[];
};

function CenterIconGraphic({ iconKey }: { iconKey: CenterIcon }) {
  const commonStroke = {
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };

  switch (iconKey) {
    case "ml":
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-current" aria-hidden="true">
          <circle cx="16" cy="16" r="5" {...commonStroke} />
          <circle cx="46" cy="18" r="4.5" {...commonStroke} />
          <circle cx="14" cy="42" r="4.5" {...commonStroke} />
          <circle cx="33" cy="30" r="6" {...commonStroke} />
          <circle cx="48" cy="44" r="5" {...commonStroke} />
          <path d="M20 18l9 8m7 3l8 11M18 39l10-6m12-3l7-8" {...commonStroke} />
        </svg>
      );
    case "data":
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-current" aria-hidden="true">
          <path d="M10 48h44" {...commonStroke} />
          <rect x="13" y="30" width="7" height="18" rx="2" {...commonStroke} />
          <rect x="27" y="24" width="7" height="24" rx="2" {...commonStroke} />
          <rect x="41" y="18" width="7" height="30" rx="2" {...commonStroke} />
          <path d="M12 22l9-6 10 5 11-7 10 4" {...commonStroke} />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-current" aria-hidden="true">
          <path d="M18 18a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v10H26a8 8 0 0 1-8-8Z" {...commonStroke} />
          <path d="M46 46a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8V36h20a8 8 0 0 1 8 8Z" {...commonStroke} />
          <circle cx="29" cy="20" r="1.8" fill="currentColor" />
          <circle cx="35" cy="44" r="1.8" fill="currentColor" />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-current" aria-hidden="true">
          <rect x="8" y="24" width="14" height="14" rx="2" {...commonStroke} />
          <rect x="42" y="12" width="14" height="14" rx="2" {...commonStroke} />
          <rect x="42" y="38" width="14" height="14" rx="2" {...commonStroke} />
          <path d="M22 31h12M34 31V19h8M34 31v14h8" {...commonStroke} />
        </svg>
      );
    case "db":
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-current" aria-hidden="true">
          <ellipse cx="32" cy="14" rx="16" ry="6" {...commonStroke} />
          <path d="M16 14v12c0 3 7 6 16 6s16-3 16-6V14" {...commonStroke} />
          <path d="M16 26v12c0 3 7 6 16 6s16-3 16-6V26" {...commonStroke} />
          <path d="M16 38v12c0 3 7 6 16 6s16-3 16-6V38" {...commonStroke} />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 64 64" className="h-12 w-12 text-current" aria-hidden="true">
          <path d="M18 44h28a8 8 0 1 0-1-16 12 12 0 0 0-23-2 8 8 0 1 0-4 18Z" {...commonStroke} />
          <circle cx="33" cy="42" r="6" {...commonStroke} />
          <path d="M33 34v4m0 8v4m-8-8h4m8 0h4m-12-6l2.8 2.8m8.4 8.4 2.8 2.8m0-11.2-2.8 2.8m-8.4 8.4-2.8 2.8" {...commonStroke} />
        </svg>
      );
    default:
      return null;
  }
}

export function FlipCard({ id, title, years, icon, centerIcon, description, tech, level, color, skills }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardLevel = level ?? (years >= 7 ? "EXPERT" : "ADVANCED");

  return (
    <button
      type="button"
      className="group h-[390px] w-full [perspective:1000px]"
      onClick={() => setFlipped((prev) => !prev)}
    >
      <div
        className={`relative h-full w-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        } group-hover:[transform:rotateY(180deg)]`}
        style={{
          border: `1px solid ${color}60`,
          boxShadow: `0 0 28px ${color}55, 0 0 56px ${color}24, inset 0 0 40px ${color}22, inset 0 0 2px ${color}80`,
        }}
      >
        <div className="nft-card-surface absolute inset-0 flex flex-col p-5 text-left text-foreground dark:text-white [backface-visibility:hidden]">
          <div className="flex items-start justify-between gap-2">
            <p className="text-[11px] font-medium tracking-[0.16em] text-white/55">TECH.NFT #{String(id).padStart(4, "0")}</p>
            <span
              className="rounded-full px-3 py-1 text-[10px] font-semibold tracking-[0.12em]"
              style={{
                backgroundColor: `${color}20`,
                color,
                border: `1px solid ${color}70`,
                boxShadow: `0 0 16px ${color}25`,
              }}
            >
              {cardLevel}
            </span>
          </div>

          <div
            className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle at 50% 40%, ${color}2f 0%, ${color}10 45%, transparent 85%)`,
              border: `1px solid ${color}80`,
              boxShadow: `0 0 40px ${color}4a, inset 0 0 26px ${color}30`,
              color,
            }}
          >
            <div
              className="absolute inset-3 rounded-full"
              style={{
                border: `1px solid ${color}45`,
                boxShadow: `inset 0 0 12px ${color}30`,
              }}
            />
            <CenterIconGraphic iconKey={centerIcon} />
          </div>

          <div className="mt-4 flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-2xl font-bold leading-none">{title}</h3>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-white/72">{description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {tech.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full px-2.5 py-1 text-[10px] font-medium tracking-wide"
                style={{
                  color,
                  border: `1px solid ${color}65`,
                  backgroundColor: `${color}1f`,
                  boxShadow: `0 0 12px ${color}20`,
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-auto self-end text-xs text-white/58">Tap to flip →</p>
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
