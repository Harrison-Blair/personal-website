import Link from 'next/link';
import CircularButton from './components/ui/CircularButton';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypewriterText from './components/ui/TypewriterText';

export default function Home() {
  return (
    <div className="overflow-hidden w-[66%]">
      <div className="grid h-full">
        <div className="text-[6vh] mb-8"> {/* Welcome Message */}
          <h1>
            Hi 👋, <br />
            I&apos;m Harrison, <br />
            <TypewriterText
              text={[
                "a Software Engineer",
                "a Tech Enthusiast", "a TypeScript Developer",
                "a Lifelong Learner", "a React Developer",
                "a Home Cook", "a Python Developer",
                "an Avid Reader", "aspiring Architect",
              ]}
              styling="text-[var(--primary)]"
            />
          </h1>
        </div>
        <div className="grid grid-rows-3 gap-[25px]">
          <div>
            <p className="text-[2vh] text-[var(--secondary)]">
              I love to build things that matter. I&apos;ve worked on teams from small VC-backed Startups to Fortune 500 companies, always learning and focused on creating value through thoughtful engineering. {' '}
              <Link href="/work" className="text-[2vh] underline text-[var(--primary)] hover:text-[var(--accent)]">
                (more about the work I&apos;ve done)
              </Link>
            </p>
          </div>
          <div>
            <p className="text-[2vh] text-[var(--secondary)]">
              Outside of work, you&apos;ll still find me coding. I&apos;m always working on a passion project or trying to learn something new. However, when I am not building software, I enjoy reading, cooking, and tinkering with technology. {' '}
              <Link href="/about" className="text-[2vh] underline text-[var(--primary)] hover:text-[var(--accent)]">
                (more about me!)
              </Link>
            </p>
          </div>
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
