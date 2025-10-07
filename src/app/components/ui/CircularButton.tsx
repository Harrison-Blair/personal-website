import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CircularButtonProps {
  href: string;
  icon: LucideIcon;
  bgColor: string;
  hoverColor: string;
  isExternal?: boolean;
  isDownload?: boolean;
  size?: string;
}

export default function CircularButton({
  href,
  icon: Icon,
  bgColor,
  hoverColor,
  isExternal = false,
  isDownload = false,
  size = '6vh',
}: CircularButtonProps) {
  const buttonClasses = `${bgColor} ${hoverColor} rounded-full flex items-center justify-center text-white transition-colors duration-200`;
  const iconSize = parseInt(size) - 2;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses} style={{ width: size, height: size }}>
        <Icon size={iconSize + 'vh'} />
      </a>
    );
  }

  if (isDownload) {
    return (
      <a href={href} download className={buttonClasses} style={{ width: size, height: size }}>
        <Icon size={iconSize + 'vh'} />
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses} style={{ width: size, height: size }}>
      <Icon size={iconSize + 'vh'} />
    </Link>
  );
}