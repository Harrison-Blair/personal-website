import { FileDown, Github, Linkedin, Mail } from "lucide-react";
import Image from 'next/image';
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
    <div className='p-4'>
      <h1>
        Experience
      </h1>
      <div className='grid grid-cols-1 gap-4
                      lg:grid-cols-[1fr_2fr]'>
        <div className='flex flex-col items-center'>
          <div className='relative w-2/3 aspect-square mb-2'>
            <Image
              src="/images/Harrison-Blair.png"
              alt="Profile Picture"
              fill
              className="object-cover rounded-full border-[var(--primary)] border-4"
            />
          </div>
          <h2 className='text-[var(--foreground)]'>
            Harrison Blair
          </h2>
          <div className="flex justify-center space-x-4
                              lg:justify-start">
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
            />
            <CircularButton
              href="/documents/Harrison-Blair-Web-Resume.pdf"
              icon={FileDown}
              bgColor="bg-[var(--primary)]"
              hoverColor="hover:bg-[var(--accent)]"
              isDownload={true}
            />
          </div>
          <div className='w-[85%] bg-[var(--muted)] rounded-3xl text-center p-4 m-4
                          lg:text-left'>
            <h2>
              Education
            </h2>
            <a
              href="https://www.champlain.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] text-[0.9rem] italic"
            >
              Champlain College - Burlington, VT
            </a>
            <p className="text-[1.1rem] mt-2">
              Bachelor&apos;s of Science in Computer Science, <br />
              Minor in Cybersecurity
            </p>
          </div>
          <div className='w-[85%] bg-[var(--muted)] rounded-3xl text-center p-4 m-4
                          lg:text-left'>
            <h2>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map((tag, index) => (
                <Tag key={index} text={tag} styling='px-3 py-2 text-[1.5vh]' />
              ))}
            </div>
          </div>
        </div>
        <div className='text-center
                        lg:text-start'>
          <p className='bg-[var(--muted)] rounded-3xl p-4 mb-4
                        lg:text-[1.2rem]'>
            I recently graduated from Champlain College with a B.S. in Computer Science and minor in Cybersecurity. Over the past few years I&apos;ve built strong full stack software development skills, using languages like Python, Typescript, C++, and Rust. I am experienced working in agile software development teams, implementing continuous integration/continuous delivery pipelines, modern cloud-based architecture and remote development teams. I love solving complex problems with code, no matter the domain.
          </p>
          <h2 className="m-4">
            Work Experience
          </h2>
          <div className="flex flex-col">
            {experiences.map((experience, index) => (
              <div key={experience.id}>
                <ExperienceTile
                  experience={experience}
                />
                {index < experiences.length - 1 && (
                  <div className="h-[2rem] w-[0.25rem] bg-[var(--primary)] mx-auto -mt-4 -mb-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
