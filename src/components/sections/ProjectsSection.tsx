import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/ui/Section";
import { getAllProjects } from "@/lib/projects";

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="Placeholder projects with GitHub and Live Demo links. Add new AI or web projects in src/data/projects.ts."
      className="bg-background"
    >
      <ProjectGrid projects={projects} />
    </Section>
  );
}
