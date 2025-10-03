import Link from 'next/link';
import CircularButton from './components/ui/CircularButton';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypewriterText from './components/ui/TypewriterText';

export default function Home() {
  return (
    <div className="grid grid-cols-[2fr_1fr] h-[90vh] w-[90vw] overflow-hidden">
      <div> {/* Column 2/3 of Screen */}
        <div className="grid grid-rows-3 h-full">
          <div className="text-[6vh]"> {/* Welcome Message */}
            <h1>
              Hi 👋, <br />
              I&apos;m Harrison, <br />
              <TypewriterText 
              text={["a software engineer", "a tech enthusiast", "a lifelong learner"]}
              styling="text-[var(--primary)]"
              />
            </h1>
          </div>
          <div className="grid grid-rows-3 gap-[25px]">
            <div>  
              <p className="text-[2vh] text-[var(--secondary)]">
                I love to build things that matter. I've worked on teams from small VC-backed Startups to Fortune 500 companies, always learning and focused on creating value through thoughtful engineering
                <Link href="/about" className="text-[2vh] underline text-[var(--primary)] hover:text-[var(--accent)]">
                  ...more
                </Link>
              </p>
            </div>
            <div>
              <p className="text-[2vh] text-[var(--secondary)]">
                Outside of work, you'll still find me coding. I'm always working on a passion project or trying to learn something new. However, when I am not building software, I enjoy reading, cooking, and tinkering with technology
                <Link href="/about" className="text-[2vh] underline text-[var(--primary)] hover:text-[var(--accent)]">
                  ...more
                </Link>
              </p>
            </div>
            <div className="flex space-x-4">
              <CircularButton
                href="/contact"
                icon={Github}
                bgColor="bg-[var(--primary)]"
                hoverColor="hover:bg-[var(--accent)]"
              />
              <CircularButton
                href="/contact"
                icon={Linkedin}
                bgColor="bg-[var(--primary)]"
                hoverColor="hover:bg-[var(--accent)]"
              />
              <CircularButton
                href="/contact"
                icon={Mail}
                bgColor="bg-[var(--primary)]"
                hoverColor="hover:bg-[var(--accent)]"
              />
            </div>
          </div>
          <div></div>  {/* To add Rookery? */}
        </div>
      </div>
    </div>
  );
}
