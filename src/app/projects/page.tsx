import { projects } from "@/data/projects";
import ProjectTile from "../components/ui/ProjectTile";
import CircularButton from "../components/ui/CircularButton";
import { Github } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <h1 className='text-[6.5vh]'>Projects</h1>
      <p className='text-[2vh] mb-4'>Here is a selection of my open source work.</p>
      <CircularButton
                href="https://github.com/Harrison-Blair"
                icon={Github}
                bgColor="bg-[var(--primary)]"
                hoverColor="hover:bg-[var(--accent)]"
                isExternal={true}
      />
      <h2 className='text-[4vh] mt-4 underline'>Pinned Projects 📌</h2>
      <div className='grid grid-cols-3 gap-4 mb-8'>
        {projects.filter(project => project.pinned).map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
      <h2 className='text-[4vh] mt-4 underline'>All Projects</h2>
      <div className='grid grid-cols-3 gap-4 mb-8'>
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}