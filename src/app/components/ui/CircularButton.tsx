import { LucideIcon } from 'lucide-react';
import SmartLink from './SmartLink';
import { scaleRem } from '../../lib/scaleRem';

interface CircularButtonProps {
  href: string;
  icon: LucideIcon;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  size?: string;
  isExternal?: boolean;
  isDownload?: boolean;
}

export default function CircularButton({
  href,
  icon: Icon,
  bgColor = 'bg-[var(--primary)]',
  textColor = 'text-white',
  hoverColor = 'hover:bg-[var(--accent)]',
  size = '4rem',
  isExternal = false,
  isDownload = false,
}: CircularButtonProps) {
  const buttonClasses = `flex ${bgColor} ${hoverColor} ${textColor} rounded-full items-center justify-center transition-colors duration-200`;
  const iconSize = scaleRem(size, 0.6);

  return (
    <SmartLink
      href={href}
      isExternal={isExternal}
      isDownload={isDownload}
      className={buttonClasses}
      style={{ width: size, height: size }}
    >
      <Icon size={iconSize} />
    </SmartLink>
  );
}
