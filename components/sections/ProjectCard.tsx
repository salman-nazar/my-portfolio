import { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-slate-border rounded-lg p-6 hover:border-teal transition-colors">
      <h3 className="font-display text-xl font-bold text-paper mb-2">
        {project.title}
      </h3>
      <p className="text-slate-muted text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-xs px-2 py-1 rounded border border-slate-border text-teal">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 font-mono text-sm">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-amber hover:underline">
            live_demo →
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-muted hover:text-teal transition-colors">
            source_code →
          </a>
        )}
      </div>
    </div>
  );
}