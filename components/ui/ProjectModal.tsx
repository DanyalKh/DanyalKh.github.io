"use client";

import { AnimatePresence, motion } from "framer-motion";

type Project = {
  title: string;
  icon: string;
  badge: string;
  highlights: string[];
  stack: string[];
};

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#11141f] p-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-3xl">{project.icon}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="rounded-full border border-[#d4a017] px-3 py-1 text-xs text-[#d4a017]">{project.badge}</span>
              </div>
              <button type="button" className="text-xl" onClick={onClose} aria-label="Close project modal">
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#d4a017]">ARCHITECTURE</h4>
                <pre className="overflow-x-auto rounded-xl bg-black/40 p-4 font-mono text-sm text-white/80">{`// Architecture diagram coming soon`}</pre>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#d4a017]">KEY HIGHLIGHTS</h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-white/85">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-[#d4a017]">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/85">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
