import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import CircularButton from "../components/ui/CircularButton";
import ExperienceTile from "../components/ui/ExperienceTile";

import { experiences } from "@/data/experiences";
import Tag from "../components/ui/Tag";

export default function Work() {
  // Collect unique tags from all experiences
  const uniqueTags = Array.from(
    new Set(
      experiences.flatMap(exp => exp.tags || [])
    )
  );

  return (
    <div>
      <h1 className="text-[6.5vh]">
        Harrison Blair
      </h1>
      <div className="grid grid-cols-[1fr_2fr] gap-4">
        <div> {/* Sidebar - 1/3 of Screen */}
          <div className="flex flex-row gap-4 justify-center">
            <CircularButton
              href="https://github.com/Harrison-Blair"
              icon={Github}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={true}
            />
            <CircularButton
              href="https://www.linkedin.com/in/harrison-blair/"
              icon={Linkedin}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={true}
            />
            <CircularButton
              href="/contact"
              icon={Mail}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isExternal={false}
            />
            <CircularButton
              href="/images/Website-Homepage.png"
              icon={FileDown}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isDownload={true}
            />
          </div>
          <div className="bg-[var(--muted)] rounded-[2.5rem] m-4 p-4 ">
            <div className="flex flex-col p-4 gap-2">
              <h2 className="text-[2.5vh] text-[var(--primary)]">
                Education
              </h2>
              <a
                href="https://www.champlain.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] text-[1.5vh] italic"
              >
                Champlain College - Burlington, VT - Class of 2025
              </a>
              <p className="text-[1.5vh]">
                B.S. in Computer Science, Minor in Cybersecurity
              </p>
            </div>
          </div>
          <div className="bg-[var(--muted)] rounded-[2.5rem] m-4 p-4 ">
            <div className="flex flex-col m-4 gap-2">
              <h2 className="text-[2.5vh] text-[var(--primary)]">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {uniqueTags.map((tag, index) => (
                  <Tag key={index} text={tag} styling='px-5 py-2 text-[1.6vh]' />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div> {/* Main Content - 2/3 of Screen */}
          <div className="bg-[var(--muted)] rounded-[2.5rem] m-4 p-4 ">
            <div className="flex flex-col m-4">
              <p>
                Description....
              </p>
            </div>
          </div>
          <div className="m-4 p-4 ">
            <h2 className="text-[4vh] text-[var(--primary)]">
              Experience
            </h2>
            <hr className="border-[var(--primary)] border-[1.5px]" />
            <div className="flex flex-col">
              {experiences.map((experience) => (
                <ExperienceTile 
                  key={experience.id}
                  experience={experience}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
