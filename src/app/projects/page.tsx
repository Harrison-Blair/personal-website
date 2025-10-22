import Link from "next/link";
import CircularButton from "../components/ui/CircularButton";
import { Github } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectTile from "../components/ui/ProjectTile";

export default function Projects() {
  return (
    <div className='p-4'>
      <h1>
        Projects
      </h1>
      <div className='flex flex-col justify-center items-center
                      lg:items-start'>
        <p className='bg-[var(--muted)] rounded-3xl text-center p-4 mb-4
                    lg:bg-inherit lg:text-left lg:text-[20px] lg:w-[66%] lg:p-0'>
          Here is a selection of some of my open source work. If you&apos;re looking for my professional experience, {' '}
          <Link href="/work" className="underline text-[var(--primary)] hover:text-[var(--accent)]">
            you can find that here
          </Link>
          . If you&apos;re interested in seeing more of my open source work, check out my GitHub page.
        </p>
        <div className='flex justify-center mb-8
                      lg:justify-start'>
          <CircularButton
            href="https://github.com/Harrison-Blair"
            icon={Github}
            bgColor="bg-[var(--primary)]"
            hoverColor="hover:bg-[var(--accent)]"
            isExternal={true}
          />
        </div>
        <h2>
          Pinned Projects
        </h2>
        <div className='grid grid-cols-1 gap-4 mb-4
                      lg:grid-cols-3'>
          {projects.filter(project => project.pinned).map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
        <h2>
          All Projects
        </h2>
        <div className='grid grid-cols-1 gap-4 mb-4
                      lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}