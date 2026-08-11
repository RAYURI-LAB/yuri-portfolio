import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Section } from "@/components/ui/Section";
import { getAllProjects } from "@/lib/projects";

export function ProjectsSection() {
  const projects = getAllProjects();

  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="프로젝트"
      description="참여한 MES·Digital Factory 프로젝트입니다. 카드를 선택하면 상세 내용을 확인할 수 있습니다."
      className="bg-background"
    >
      <ProjectGrid projects={projects} />
    </Section>
  );
}
