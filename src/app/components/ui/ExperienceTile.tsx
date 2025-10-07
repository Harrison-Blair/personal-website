import { Experience } from "@/data/experiences";
import { Link } from "lucide-react"

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
            <h3 className="text-[1.5vh] font-semibold mb-2">
                {experience.role} @ 
                { experience.link ? (
                    <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary)] hover:text-[var(--accent)]"
                    >
                        {' '}
                        {experience.company}
                        <Link className="inline mb-1 ml-1" size={'1.5vh'} />
                    </a>
                ) : (
                    <span>{' '}{experience.company}</span>
                )}
            </h3>
            <p className="text-[1.25vh] italic mb-2">{experience.startDate} {' - '} {experience.endDate}</p>
            {Array.isArray(experience.description) ? (
                <ul className="list-disc list-inside text-[1.25vh] mb-2 ml-2">
                    {experience.description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-[1.25vh] mb-2 ml-2">{experience.description}</p>
            )}
        </div>
    );
}