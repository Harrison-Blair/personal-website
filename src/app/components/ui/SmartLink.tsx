import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';

export interface SmartLinkProps {
  href: string;
  isExternal?: boolean;
  isDownload?: boolean;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export default function SmartLink({ href, isExternal, isDownload, ...rest }: SmartLinkProps) {
  if (isExternal) return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />;
  if (isDownload) return <a href={href} download {...rest} />;
  return <Link href={href} {...rest} />;
}
