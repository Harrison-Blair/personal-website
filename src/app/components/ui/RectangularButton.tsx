import { LucideIcon } from "lucide-react";
import SmartLink from './SmartLink';
import { scaleRem } from '../../lib/scaleRem';


export interface RectangularButtonProps {
    href: string;
    icon?: LucideIcon;
    text: string;
    bgColor?: string;
    hoverColor?: string;
    styling?: string;
    isExternal?: boolean;
    width?: string;
    height?: string;
}

export default function RectangularButton({
    href,
    icon: Icon,
    text,
    bgColor = 'bg-[var(--primary)]',
    hoverColor = 'hover:bg-[var(--accent)]',
    styling = '',
    isExternal = false,
    width = '75%',
    height = '3rem',
}: RectangularButtonProps) {
    const iconSize = scaleRem(height, 0.75);
    const justify = isExternal ? 'justify-center gap-4' : 'justify-between';

    return (
        <SmartLink
            href={href}
            isExternal={isExternal}
            className={`flex items-center rounded-lg ${justify} ${styling} ${bgColor} ${hoverColor}`}
            style={{ width, height }}
        >
            {Icon && <Icon size={iconSize} />}
            {isExternal ? <span>{' ⋅ '}</span> : ' ⋅ '}
            {text}
        </SmartLink>
    );
}
