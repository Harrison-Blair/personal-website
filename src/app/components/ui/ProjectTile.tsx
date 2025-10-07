import Image from 'next/image';
import { Github } from "lucide-react";

import { Project } from "../../../data/projects";
import SmallTag from './SmallTag';

export interface ProjectTileProps {
  project: Project;
  styling?: string;
}

export default function ProjectTile({ 
  project,
  styling = '',
 }: ProjectTileProps) {
  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`w-[30vh] h-[45vh] bg-[var(--muted)] rounded-3xl block hover:bg-[var(--accent)] transition-colors cursor-pointer ${styling}`}
    >
      <div className='p-4 flex flex-col h-full items-center text-center'>
        {project.imageUrl ? (
          <Image 
            src={project.imageUrl} 
            alt={project.title || 'Project image'} 
            width={260}
            height={200}
            className="w-[26vh] h-[20vh] object-cover rounded-2xl mb-4 border-[var(--primary)] border" 
          />
        ) : (
          <div className="w-[26vh] h-[20vh] bg-[var(--secondary)] rounded-2xl flex items-center justify-center mb-4">
            <Github size={48} className="text-[var(--foreground)]" />
          </div>
        )}
        <div>
          <h3 className='text-[2vh] font-semibold mb-2'>{project.title}</h3>
          <hr className='w-full border-t border-[var(--secondary)] mb-2' />
          <p className='text-[1.5vh] mb-4'>{project.description}</p>
        </div>
        <div className='flex flex-wrap gap-2 justify-center mt-auto'>
          {project.tags?.map((tag, index) => (
            <SmallTag key={index} text={tag} />
          ))}
        </div>
      </div>
    </a>
  );
}
