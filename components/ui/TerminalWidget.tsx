"use client";

import { useEffect, useMemo, useState } from "react";

const terminalLines = [
  "DevJourney OS v2.0 · backend.kernel",
  "Loading modules... OK",
  "Type help for available commands.",
  "> type a command...",
];

export function TerminalWidget() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= terminalLines.length) {
      return;
    }

    const currentLine = terminalLines[lineIndex];
    const timer = setTimeout(
      () => {
        if (charIndex < currentLine.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }
      },
      charIndex < currentLine.length ? 28 : 360,
    );

    return () => clearTimeout(timer);
  }, [charIndex, lineIndex]);

  const visibleLines = useMemo(
    () =>
      terminalLines.map((line, idx) => {
        if (idx < lineIndex) {
          return line;
        }
        if (idx === lineIndex) {
          return line.slice(0, charIndex);
        }
        return "";
      }),
    [lineIndex, charIndex],
  );

  return (
    <div className="card-surface w-full max-w-xl overflow-hidden bg-[#0b0f19] text-[#d8d8ff]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-mono text-white/80">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <span>devjourney ~ terminal</span>
      </div>
      <div className="min-h-44 space-y-2 px-4 py-4 font-mono text-sm">
        {visibleLines.map((line, index) => (
          <p key={`${index}-${line}`}>{line}</p>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-[#8f54f5] align-middle" />
      </div>
    </div>
  );
}
