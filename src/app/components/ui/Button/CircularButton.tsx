// src/app/components/ui/CircularButton.tsx
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CircularButtonProps {
  href: string;
  icon: LucideIcon;
  bgColor: string;
  hoverColor: string;
  isExternal?: boolean;
  size?: string;
}

export default function CircularButton({
  href,
  icon: Icon,
  bgColor,
  hoverColor,
  isExternal = false,
  size = 'w-16 h-16',
}: CircularButtonProps) {
  const buttonClasses = `${size} ${bgColor} ${hoverColor} rounded-full flex items-center justify-center text-white transition-colors duration-200`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        <Icon size={40} />
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses}>
      <Icon size={40} />
    </Link>
  );
}