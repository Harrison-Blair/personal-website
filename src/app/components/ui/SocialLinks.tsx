import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import CircularButton from './CircularButton';

const LINKS = [
  { href: 'https://github.com/Harrison-Blair', icon: Github, isExternal: true },
  { href: 'https://www.linkedin.com/in/harrison-blair/', icon: Linkedin, isExternal: true },
  { href: '/contact', icon: Mail },
] as const;

const RESUME = {
  href: '/documents/Harrison-Blair-Web-Resume.pdf',
  icon: FileDown,
  isDownload: true,
} as const;

interface SocialLinksProps {
  size?: string;
  includeResume?: boolean;
  className?: string;
}

export default function SocialLinks({ size, includeResume = false, className = '' }: SocialLinksProps) {
  const links = includeResume ? [...LINKS, RESUME] : LINKS;
  return (
    <div className={className}>
      {links.map((link) => (
        <CircularButton key={link.href} size={size} {...link} />
      ))}
    </div>
  );
}
