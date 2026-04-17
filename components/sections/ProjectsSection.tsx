"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null;

  return (
    <section id="projects" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ BUILT EXPEDITIONS</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>Featured</span> <span className="text-secondary">Projects</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">Artifacts from past expeditions — systems built for scale, reliability, and speed.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.button
            type="button"
            key={project.id}
            className="overflow-hidden rounded-2xl border border-border bg-white text-left dark:bg-[#121621]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setActiveProjectId(project.id)}
          >
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.borderColor}, transparent)` }} />
            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between">
                <p className="text-2xl">{project.icon}</p>
                <span className="rounded-full border border-[#d4a017] px-2 py-1 text-[10px] font-semibold text-[#d4a017]">{project.badge}</span>
                <span aria-hidden>↗</span>
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-border px-2 py-1 text-xs">{tech}</span>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </section>
  );
}
