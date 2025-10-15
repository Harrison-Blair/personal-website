import Link from 'next/link';
import CircularButton from './components/ui/CircularButton';
import { ChevronsDown, Github, Linkedin, Mail } from 'lucide-react';
import TypewriterText from './components/ui/TypewriterText';

export default function Home() {
  const roles = [
    "a Software Engineer",
    "a Tech Enthusiast",
    "a TypeScript Developer",
    "a Lifelong Learner",
    "a React Developer",
    "a Home Cook",
    "a Python Developer",
    "an Avid Reader",
    "aspiring Architect",
  ];
  return (
    <div>
      <div className="hidden xl:block overflow-hidden">
        <div className="text-[6vh] mb-8"> {/* Welcome Message */}
          <h1>
            Hi 👋, <br />
            I&apos;m Harrison, <br />
            <TypewriterText
              text={roles}
              styling="text-[var(--primary)]"
            />
          </h1>
        </div>
        <div className="grid grid-rows-3 gap-[25px] w-[66%]">
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
      <div className="xl:hidden">
        <div className="h-[85vh]">
          <div className="flex flex-col items-center h-full">
            <h1 className="text-[10vw] text-center">
              Hi 👋, <br />
              I&apos;m Harrison. <br />
              <TypewriterText
                text={roles}
                styling="text-[var(--primary)]"
              />
            </h1>
            <div className="flex flex-col items-center justify-end gap-4 mt-auto">
              <div className='flex gap-5 mb-6'>
                <CircularButton
                  href="https://github.com/Harrison-Blair"
                  icon={Github}
                  bgColor="bg-[var(--primary)]"
                  hoverColor="hover:bg-[var(--accent)]"
                  isExternal={true}
                  size='8vh'
                />
                <CircularButton
                  href="https://www.linkedin.com/in/harrison-blair/"
                  icon={Linkedin}
                  bgColor="bg-[var(--primary)]"
                  hoverColor="hover:bg-[var(--accent)]"
                  isExternal={true}
                  size='8vh'
                />
                <CircularButton
                  href="/contact"
                  icon={Mail}
                  bgColor="bg-[var(--primary)]"
                  hoverColor="hover:bg-[var(--accent)]"
                  size='8vh'
                />
              </div>
              <ChevronsDown
                size={48}
                className="justify-end animate-bounce"
              />
            </div>
          </div>
        </div>
        <div className="flex-col gap-5 mt-10">
          <div className="bg-[var(--muted)] rounded-3xl p-6 text-center">
            <p className="text-[2vh]">
              I love to build things that matter. I&apos;ve worked on teams from small VC-backed Startups to Fortune 500 companies, always learning and focused on creating value through thoughtful engineering. {' '}
              <Link href="/work" className="text-[2vh] underline text-[var(--primary)] hover:text-[var(--accent)]">
                (more about the work I&apos;ve done)
              </Link>
            </p>
          </div>
          <div className="bg-[var(--muted)] rounded-3xl p-6 text-center mt-5"> 
            <p className="text-[2vh]">
              Outside of work, you&apos;ll still find me coding. I&apos;m always working on a passion project or trying to learn something new. However, when I am not building software, I enjoy reading, cooking, and tinkering with technology. {' '}
              <Link href="/about" className="text-[2vh] underline text-[var(--primary)] hover:text-[var(--accent)]">
                (more about me!)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
