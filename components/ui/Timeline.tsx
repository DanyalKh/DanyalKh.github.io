import { certifications, education, timelineEntries } from "@/data/timeline";

export function Timeline() {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        {timelineEntries.map((entry) => (
          <div key={`${entry.year}-${entry.role}`} className="relative pl-8">
            <span className="absolute left-0 top-1 h-full w-px bg-[#d4a017]/50" />
            <span className={`absolute left-[-6px] top-1 h-3 w-3 rounded-full ${entry.current ? "bg-[#d4a017] shadow-[0_0_18px_#d4a017]" : "bg-[#d4a017]/70"}`} />
            <p className="text-sm font-semibold text-[#d4a017]">{entry.year}</p>
            <h4 className="font-semibold">{entry.role}</h4>
            <p className="text-sm text-muted">{entry.company} · {entry.location}</p>
            <p className="mt-2 text-sm text-muted">{entry.description}</p>
          </div>
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

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-max gap-2">
          {certifications.map((certification) => (
            <span key={certification} className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs dark:bg-[#141824]">
              {certification}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
