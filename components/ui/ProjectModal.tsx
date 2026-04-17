"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";

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
            className="max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-white p-6 text-foreground dark:border-white/15 dark:bg-[#11141f] dark:text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-3xl">{project.icon}</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <span className="rounded-full border border-primary px-3 py-1 text-xs text-primary">{project.badge}</span>
              </div>
              <button type="button" className="text-xl" onClick={onClose} aria-label="Close project modal">
                ✕
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">PROBLEM</h4>
                <p className="text-sm text-foreground/85 dark:text-white/85">{project.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">SOLUTION</h4>
                <p className="text-sm text-foreground/85 dark:text-white/85">{project.solution}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">OUTCOME</h4>
                <p className="text-sm text-foreground/85 dark:text-white/85">{project.outcome}</p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">KEY HIGHLIGHTS</h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/85 dark:text-white/85">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">TECH STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/85 dark:border-white/20 dark:text-white/85">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {project.githubUrl || project.demoUrl ? (
                <div>
                  <h4 className="mb-2 text-sm font-semibold tracking-[0.2em] text-primary">LINKS</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.githubUrl ? (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 text-xs hover:border-primary">
                        GitHub
                      </a>
                    ) : null}
                    {project.demoUrl ? (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="rounded-full border border-border px-3 py-1 text-xs hover:border-primary">
                        Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
