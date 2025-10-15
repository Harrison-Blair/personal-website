import { projects } from "@/data/projects";
import ProjectTile from "../components/ui/ProjectTile";
import CircularButton from "../components/ui/CircularButton";
import { Github } from "lucide-react";

export default function Projects() {
  return (
    <div>
      <div className="hidden xl:block">
        <h1 className='text-[3.5vw]'>Projects</h1>
        <p className='text-[2vh] mb-4 bg-[var(--muted)] rounded-3xl p-4 inline-block'>
          Here is a selection of my open source work.
        </p>
        <CircularButton
          href="https://github.com/Harrison-Blair"
          icon={Github}
          bgColor="bg-[var(--primary)]"
          hoverColor="hover:bg-[var(--accent)]"
          isExternal={true}
          size='7vh'
        />
        <h2 className='text-[4vh] mt-4 mb-2 underline underline-offset-4 text-[var(--primary)]'>Pinned Projects</h2>
        <div className='grid grid-cols-3 gap-4 mb-4'>
          {projects.filter(project => project.pinned).map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
        <h2 className='text-[4vh] mt-4 mb-2 underline underline-offset-4 text-[var(--primary)]'>All Projects</h2>
        <div className='grid grid-cols-3 gap-4 mb-8'>
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </div>
      <div className="xl:hidden flex flex-col items-center">
          <h1 className='text-[15vw]'>Projects</h1>
          <p className='text-[2vh] mb-4 bg-[var(--muted)] rounded-3xl p-4 inline-block'>Here is a selection of my open source work.</p>
          <CircularButton
          href="https://github.com/Harrison-Blair"
          icon={Github}
          bgColor="bg-[var(--primary)]"
          hoverColor="hover:bg-[var(--accent)]"
          isExternal={true}
          size='10vh'
          />
          <h2 className='text-[8vw] mt-4 mb-2 underline underline-offset-4 text-[var(--primary)]'>Pinned Projects</h2>
        <div className='flex flex-col gap-4 mb-4'>
          {projects.filter(project => project.pinned).map((project) => (
            <ProjectTile key={project.id} project={project} styling="w-[66vw]"/>
          ))}
        </div>
        <h2 className='text-[8vw] mt-4 mb-2 underline underline-offset-4 text-[var(--primary)]'>All Projects</h2>
        <div className='flex flex-col gap-4 mb-8'>
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} styling="w-[66vw]"/>
          ))}
        </div>
      </div>
    </div>
  );
}