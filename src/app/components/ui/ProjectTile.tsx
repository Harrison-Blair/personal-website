import Image from 'next/image';
import { Github } from "lucide-react";

import { Project } from "../../../data/projects";
import SmallTag from './Tag';

export interface ProjectTileProps {
  project: Project;
  styling?: string;
  height?: string;
}

export default function ProjectTile({ 
  project,
  styling = '',
  height = '45vh',
 }: ProjectTileProps) {
  const titleFontSize = `calc(${height} * 0.04)`;
  const descFontSize = `calc(${height} * 0.03)`;
  const imageHeight = `calc(${height} * 0.4)`;
  const imageWidth = `calc(${height} * 0.5)`;

  return (
    <a 
      href={project.link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`w-[50%] bg-[var(--muted)] rounded-3xl block hover:bg-[var(--accent)] transition-colors cursor-pointer ${styling}`}
      style={{ height }}
    >
      <div className='p-4 flex flex-col h-full items-center text-center'>
        {project.imageUrl ? (
          <Image 
            src={project.imageUrl} 
            alt={project.title || 'Project image'} 
            width={260}
            height={200}
            className="object-cover rounded-2xl mb-4 border-[var(--primary)] border" 
            style={{ height: imageHeight, width: imageWidth }}
          />
        ) : (
          <div className="bg-[var(--secondary)] rounded-2xl flex items-center justify-center mb-4" style={{ height: imageHeight, width: imageWidth }}>
            <Github size={48} className="text-[var(--foreground)]" />
          </div>
        )}
        <div>
          <h3 className='font-semibold mb-2' style={{ fontSize: titleFontSize }}>{project.title}</h3>
          <hr className='w-full border-t border-[var(--secondary)] mb-2' />
          <p className='mb-4' style={{ fontSize: descFontSize }}>{project.description}</p>
        </div>
        <div className='flex flex-wrap gap-1.5 justify-center'>
          {project.tags?.map((tag, index) => (
            <SmallTag key={index} text={tag} />
          ))}
        </div>
      </div>
    </a>
  );
}
