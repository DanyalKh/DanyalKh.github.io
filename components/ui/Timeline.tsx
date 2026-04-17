import { timelineEntries } from "@/data/timeline";

export function Timeline() {
  return (
    <div className="space-y-6">
      {timelineEntries.map((entry) => (
        <div key={`${entry.year}-${entry.role}`} className="relative pl-8">
          <span className="absolute left-0 top-1 h-full w-px bg-primary/50" />
          <span className={`absolute left-[-6px] top-1 h-3 w-3 rounded-full ${entry.current ? "bg-primary shadow-[0_0_18px_var(--primary)]" : "bg-primary/70"}`} />
          <p className="text-sm font-semibold text-primary">{entry.year}</p>
          <h4 className="font-semibold">{entry.role}</h4>
          <p className="text-sm text-muted">{entry.company} · {entry.location}</p>
          <p className="mt-2 text-sm text-muted">{entry.description}</p>
        </div>
      ))}
    </div>
  );
}
