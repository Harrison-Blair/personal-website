import { projects } from "@/data/projects";
import ProjectTile from "../components/ui/ProjectTile";

export default function Projects() {
  return (
    <div>
      <h1 className='text-[6.5vh]'>Projects</h1>
      <p className='text-[2vh]'>Here is a selection of my open source work.</p>
      <h2 className='text-[4vh] mt-4'>Pinned Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
        {projects.filter(project => project.pinned).map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
      <h2 className='text-[4vh] mt-4'>All Projects</h2>
      <div className='grid grid-cols-3 gap-4'>
        {projects.map((project) => (
          <ProjectTile key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}