import Link from 'next/link';
import CircularButton from './components/ui/Button/CircularButton';
import { Github, Linkedin, Mail, ChevronsDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4"> {/* Flex layout with padding */}
      <div className="flex flex-col justify-center items-start max-w-4xl"> {/* Center content vertically */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-12"> {/* Responsive font */}
          Hi 👋,<br /> 
          I'm Harrison,
        </h1>
        <p className="text-base md:text-lg mb-4 md:mb-6 text-[var(--secondary)]">
          Recent Computer Science graduate with a strong foundation in the principles of iterative development, coding
          best practices, modern cloud-based infrastructure, and complex problem solving. Proficient in languages such as
          Python, Typescript, C++, and Rust. Experienced working in Agile, CI/CD and remote development teams...{" "}
            <Link href="/work" className="text-blue-600 hover:text-blue-800 underline">
              more
            </Link>
        </p>
        <p className="text-base md:text-lg mb-4 md:mb-6 text-[var(--secondary)]">
          In my free time, I enjoy hiking, photography, and exploring new technologies. Blah blah blah Blah blah blah 
          Blah blah blah Blah blah Blah blah blah Blah blah blah blah Blah blah blah...{" "}
            <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">
              more
            </Link>
        </p>
        <div className="flex space-x-2 md:space-x-4 mt-4">
          <CircularButton
            href="https://github.com/Harrison-Blair"
            icon={Github}
            bgColor="bg-[var(--primary)]"
            hoverColor="hover:bg-[var(--primary)]/90"
            isExternal={true}
          />
          <CircularButton
            href="https://linkedin.com/in/Harrison-Blair"
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
      <div className="flex justify-center pb-16">
        <ChevronsDown size={48} className="text-[var(--secondary)]" />
      </div>
    </div>
  );
}
