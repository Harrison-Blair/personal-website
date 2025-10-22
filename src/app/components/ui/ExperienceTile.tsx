import { Experience } from "@/data/experiences";
import { Link } from "lucide-react";
import Tag from "./Tag";

export interface ExperienceTileProps {
  experience: Experience;
  styling?: string;
}

export default function ExperienceTile({
  experience,
  styling = ''
}: ExperienceTileProps) {
  return (
    <div className={`bg-[var(--muted)] rounded-3xl p-4 m-4 ${styling}`}>
      <h3>
        {experience.role} {'@ '}
        {experience.link ? (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--primary)] hover:text-[var(--accent)] inline-block"
          >
            {experience.company}
            <Link className="inline mb-1 ml-1" size={'1.5rem'} />
          </a>
        ) : (
          <span>{experience.company}</span>
        )}
      </h3>
      <p className='text-[var(--secondary)] italic mb-2'>
        {experience.startDate} {' - '} {experience.endDate}
      </p>
      <div className='mb-3 ml-2'>
        {Array.isArray(experience.description) ? (
          <ul className='list-disc list-inside'>
            {experience.description.map((item, index) => (
              <li key={index} className="mb-1.5">{item}</li>
            ))}
          </ul>
        ) : (
          <p>
            {experience.description}
          </p>
        )}
      </div>
      <div className='flex flex-wrap justify-center gap-2
                      lg:justify-start'>
        {experience.tags?.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
}