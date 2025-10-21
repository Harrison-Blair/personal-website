import Link from 'next/link';
import TypewriterText from './components/ui/TypewriterText';
import CircularButton from './components/ui/CircularButton';
import { Github, Linkedin, Mail } from 'lucide-react';

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
    <div className='flex flex-col p-4'>
      <h1 className='text-center h-[25rem] 
                    lg:text-left lg:h-auto'>
        Hi 👋, <br />
        I&apos;m Harrison, <br />
        <TypewriterText
          text={roles}
          styling='text-[var(--primary)]'
        />
      </h1>
      <p className='bg-[var(--muted)] rounded-3xl text-center p-4 mb-4
                    lg:bg-inherit lg:text-[var(--secondary)] lg:text-left lg:text-[1.5rem] lg:w-[66%] lg:p-0'>
        I love to build things that matter. I&apos;ve worked on teams from small VC-backed Startups to Fortune 500 companies, always learning and focused on creating value through thoughtful engineering. {' '}
        <Link href="/work" className="underline text-[var(--primary)] hover:text-[var(--accent)]">
          read more
        </Link>
      </p>
      <p className='bg-[var(--muted)] rounded-3xl text-center p-4 mb-4
                    lg:bg-inherit lg:text-[var(--secondary)] lg:text-left lg:text-[1.5rem] lg:w-[66%] lg:p-0'>
        Outside of work, you&apos;ll still find me coding. I&apos;m always working on a passion project or trying to learn something new. However, when I am not building software, I enjoy reading, cooking, and tinkering with technology. {' '}
        <Link href="/about" className="underline text-[var(--primary)] hover:text-[var(--accent)]">
          read more
        </Link>
      </p>
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
      </div>
    </div>
  );
}
