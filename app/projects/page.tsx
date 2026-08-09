import { projects } from "@/data/projects";
import ProjectCard from "@/components/sections/ProjectCard";

export default function ProjectsPage() {
  return (
    <section id="projects" className="container-custom py-24">
      <h1 className="font-display text-3xl font-bold text-paper mb-10">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}