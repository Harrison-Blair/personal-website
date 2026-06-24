import Link from 'next/link';
import TypewriterText from './components/ui/TypewriterText';
import SocialLinks from './components/ui/SocialLinks';

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
      <p className='prose-card'>
        I love to build things that matter. I&apos;ve worked on teams from small VC-backed Startups to Fortune 500 companies, always learning and focused on creating value through thoughtful engineering. {' '}
        <Link href="/work" className="link-accent">
          read more
        </Link>
      </p>
      <p className='prose-card'>
        Outside of work, you&apos;ll still find me coding. I&apos;m always working on a passion project or trying to learn something new. However, when I am not building software, I enjoy reading, cooking, and tinkering with technology. {' '}
        <Link href="/about" className="link-accent">
          read more
        </Link>
      </p>
      <SocialLinks className="flex justify-center space-x-4
                    lg:justify-start" />
    </div>
  );
}
