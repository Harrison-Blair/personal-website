import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface CircularButtonProps {
  href: string;
  icon: LucideIcon;
  bgColor: string;
  textColor?: string;
  hoverColor: string;
  size?: string;
  isExternal?: boolean;
  isDownload?: boolean;
}

export default function CircularButton({
  href,
  icon: Icon,
  bgColor,
  textColor = 'text-white',
  hoverColor,
  size = '4rem',
  isExternal = false,
  isDownload = false,
}: CircularButtonProps) {
  const buttonClasses = `flex ${bgColor} ${hoverColor} ${textColor} rounded-full items-center justify-center transition-colors duration-200`;
  const iconSize = String(parseInt(size) * 0.6) + 'rem';

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses} style={{ width: size, height: size }}>
        <Icon size={iconSize} />
      </a>
    );
  }

  if (isDownload) {
    return (
      <a href={href} download className={buttonClasses} style={{ width: size, height: size }}>
        <Icon size={iconSize} />
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses} style={{ width: size, height: size }}>
      <Icon size={iconSize} />
    </Link>
  );
}