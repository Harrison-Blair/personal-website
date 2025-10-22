import Image from 'next/image';
import { Github } from "lucide-react";

import { Project } from "../../../data/projects";
import SmallTag from './Tag';

export interface ProjectTileProps {
  project: Project;
  styling?: string;
  imageStyling?: string;
  imageSize?: [number, number];
  titleStyling?: string;
  descriptionStyling?: string;
  height?: string;
  width?: string;
}

export default function ProjectTile({
  project,
  styling = '',
  imageStyling = '',
  imageSize = [285, 285],
  titleStyling = '',
  descriptionStyling = '',
  height = 'h-[30rem]',
  width = 'w-[20rem]',
}: ProjectTileProps) {
  const imageStyle = `border border-[0.25rem] border-[var(--primary)] rounded-2xl mb-4 object-cover ${imageStyling}`;

  return (
    <a
      href={project.link}
      target='_blank'
      rel="noopener noreferrer"
      className={`flex flex-col ${height} ${width} bg-[var(--muted)] hover:bg-[var(--accent)] rounded-3xl transition-colors p-4 ${styling}`}
    >
      <div>
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title || 'Project image'}
            width={imageSize[0]}
            height={imageSize[1]}
            className={imageStyle}
          />
        ) : (
          <div className={`${imageStyle}`}>
            <Github />
          </div>
        )}
      </div>
      <p className={`text-[1.25rem] text-center font-bold mb-2 ${titleStyling}`}>
        {project.title}
      </p>
      <hr className='border-[var(--secondary)]' />
      <p className={`mt-2 text-center flex-grow ${descriptionStyling}`}>
        {project.description}
      </p>
      <div className='flex flex-wrap gap-1.5 justify-center'>
        {project.tags?.map((tag, index) => (
          <SmallTag key={index} text={tag} />
        ))}
      </div>
    </a>
  );
}
