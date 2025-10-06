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
    width = '',
    height = '6vh',
}: RectangularButtonProps) {
    const iconSize = parseInt(height) - 2;

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex justify-center items-center rounded-lg ${styling} ${bgColor} ${hoverColor}`}
                style={{ width, height }}
            >
                {Icon && <Icon className="mr-3" size={iconSize + 'vh'} />}
                {' ⋅ '}
                {text}
            </a>
        );
    }

    return (
        <Link href={href} className={`flex justify-between items-center rounded-lg ${styling} ${bgColor} ${hoverColor}`} style={{ width, height }}>
            {Icon && <Icon className="mr-3" size={iconSize + 'vh'}/>}
            {text}
        </Link>
    );
}