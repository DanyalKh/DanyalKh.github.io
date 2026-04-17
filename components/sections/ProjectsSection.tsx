"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? null;
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const renderProjectCard = (projectIdList: typeof projects, listOffset = 0) =>
    projectIdList.map((project, index) => (
      <motion.button
        type="button"
        key={project.id}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white text-left dark:bg-[#121621]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: (index + listOffset) * 0.05 }}
        onClick={() => setActiveProjectId(project.id)}
      >
        <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${project.borderColor}, transparent)` }} />
        <div className="flex h-full flex-col space-y-4 p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-2xl">{project.icon}</p>
            <span className="rounded-full border border-primary px-2 py-1 text-[10px] font-semibold text-primary">{project.badge}</span>
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-muted"><span className="font-semibold text-foreground">Problem: </span>{project.problem}</p>
          <p className="text-sm text-muted"><span className="font-semibold text-foreground">Solution: </span>{project.solution}</p>
          <p className="text-sm text-muted"><span className="font-semibold text-foreground">Outcome: </span>{project.outcome}</p>
          <div className="mt-auto flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full border border-border px-2 py-1 text-xs">{tech}</span>
            ))}
          </div>
        </div>
      </motion.button>
    ));

  return (
    <section id="featured-projects" className="section-shell">
      <div className="text-center">
        <p className="section-badge">✦ BUILT SYSTEMS</p>
        <h2 className="mt-4 text-4xl font-bold md:text-5xl"><span>Featured</span> <span className="text-secondary">Projects</span></h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted">Selected AI and ML systems focused on LLM pipelines, agent workflows, and production reliability.</p>
      </div>
      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-2">
        {renderProjectCard(featuredProjects)}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold"><span>Other</span> <span className="text-secondary">Projects</span></h3>
        <p className="mx-auto mt-3 max-w-2xl text-muted">Additional systems delivered across healthcare, ERP, and compliance-heavy backend domains.</p>
      </div>
      <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {renderProjectCard(otherProjects, featuredProjects.length)}
      </div>
      <ProjectModal project={activeProject} onClose={() => setActiveProjectId(null)} />
    </section>
  );
}
