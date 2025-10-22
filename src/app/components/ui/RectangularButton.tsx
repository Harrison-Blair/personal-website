import Link from 'next/link';
import { LucideIcon } from "lucide-react";


export interface RectangularButtonProps {
    href: string;
    icon?: LucideIcon;
    text: string;
    bgColor: string;
    hoverColor: string;
    styling?: string;
    isExternal?: boolean;
    width?: string;
    height?: string;
}

export default function RectangularButton({
    href,
    icon: Icon,
    text,
    bgColor,
    hoverColor,
    styling = '',
    isExternal = false,
    width = '75%',
    height = '3rem',
}: RectangularButtonProps) {
    const iconSize = String(parseInt(height) * 0.75) + 'rem';

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex justify-center items-center rounded-lg gap-4 ${styling} ${bgColor} ${hoverColor}`}
                style={{ width, height }}
            >
                {Icon && <Icon size={iconSize} />}
                <span>{' ⋅ '}</span>
                {text}
            </a>
        );
    }

    return (
        <Link href={href} className={`flex justify-between items-center rounded-lg ${styling} ${bgColor} ${hoverColor}`} style={{ width, height }}>
            {Icon && <Icon size={iconSize}/>}
            {' ⋅ '}
            {text}
        </Link>
    );
}