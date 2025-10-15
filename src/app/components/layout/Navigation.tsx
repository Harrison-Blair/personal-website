'use client';

import { Home, FileUser, FolderCode, Briefcase, Mail, Sun, MoonStar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const ICON_SIZE = '3vw';
    const MOBILE_ICON_SIZE = '5vh';
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Detect user's preferred color scheme or current DOM state
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const hasDarkClass = document.documentElement.classList.contains('dark');
        const shouldBeDark = hasDarkClass || prefersDark;
        setIsDark(shouldBeDark);
        document.documentElement.classList.toggle('dark', shouldBeDark);
        document.documentElement.classList.add('dark');
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle('dark', newIsDark);
    };

    const topNavItems = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/about', icon: FileUser, label: 'About' },
        { href: '/projects', icon: FolderCode, label: 'Projects' },
        { href: '/work', icon: Briefcase, label: 'Work' },
        { href: '/contact', icon: Mail, label: 'Contact' }
    ];

    const bottomNavItems = [
        { icon: isDark ? MoonStar : Sun, label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', onClick: toggleTheme },
    ];

    return (
        <div>
            <nav className="hidden xl:flex fixed left-0 top-0 h-full w-[var(--nav-width)] bg-[var(--muted)] flex-col items-center justify-between py-[3vh]">
                <ul className="flex flex-col">
                    {topNavItems.map(({ href, icon: Icon, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                title={label}
                                className={`flex items-center justify-center w-[5vw] h-[5vh] mb-[2vw] transition-colors relative ${pathname === href
                                    ? 'text-[var(--foreground)] border-l-[0.33vw] border-[var(--primary)]'
                                    : 'text-[var(--secondary)] hover:text-[var(--accent)]'
                                    }`}
                            >
                                <Icon size={ICON_SIZE} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex flex-col space-y-3">
                    {bottomNavItems.map(({ icon: Icon, label, onClick }) => (
                        <li key={label}>
                            <button
                                onClick={onClick}
                                title={label}
                                className="flex items-center justify-center w-16 h-16 rounded transition-colors text-[var(--secondary)] hover:text-[var(--accent)]"
                            >
                                <Icon size={ICON_SIZE} />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="xl:hidden h-full">
                <nav className="flex-row fixed left-0 bottom-0 w-full h-[var(--nav-height)] bg-[var(--muted)] py-5 z-50">
                    <ul className="flex flex-row justify-around">
                        {topNavItems.map(({ href, icon: Icon, label }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    title={label}
                                    className={`flex items-center justify-center mb-[2vw] transition-colors relative ${pathname === href
                                        ? 'text-[var(--foreground)] border-b-[0.5vh] border-[var(--primary)]'
                                        : 'text-[var(--secondary)] hover:text-[var(--accent)]'
                                        }`}
                                >
                                    <Icon size={MOBILE_ICON_SIZE} />
                                </Link>
                            </li>
                        ))}
                        <button className="mb-[4vw]" onClick={toggleTheme}>
                            {isDark ? <MoonStar size={MOBILE_ICON_SIZE} /> : <Sun size={MOBILE_ICON_SIZE} />}
                        </button>
                    </ul>
                </nav>
            </div>
        </div>
    );
}