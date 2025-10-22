'use client';

import { Home, FileUser, FolderCode, Briefcase, Mail, Sun, MoonStar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const ICON_SIZE = '3rem';
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const hasDarkClass = document.documentElement.classList.contains('dark');
        const shouldBeDark = hasDarkClass || prefersDark;
        setIsDark(shouldBeDark);
        document.body.style.transition = 'color 0.3s ease, background-color 0.3s ease';
        document.documentElement.classList.toggle('dark', shouldBeDark);
        document.documentElement.classList.add('dark');
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.style.transition = 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
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
        <nav className="fixed left-0 bottom-0 w-full h-[var(--nav-size)] bg-[var(--muted)] py-4 transition-all duration-300 ease-in-out
                        lg:top-0 lg:h-full lg:w-[var(--nav-size)]">
                <ul className='flex flex-row justify-around items-center
                                lg:flex-col lg:gap-6'>
                    {topNavItems.map(({ href, icon: Icon, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                title={label}
                                className={`flex items-center transition-colors relative ${pathname === href
                                ? 'text-[var(--foreground)] pb-2 lg:pb-1 lg:pl-2 border-b-[4px] lg:border-b-0 lg:border-l-[4px] border-[var(--primary)]'
                                : 'text-[var(--secondary)] pb-1 hover:text-[var(--accent)]'
                                }`}
                            >
                                <Icon size={ICON_SIZE} />
                            </Link>
                        </li>
                    ))}
                    {bottomNavItems.map(({ icon: Icon, label, onClick }) => (
                        <li key={label}>
                            <button
                                onClick={onClick}
                                title={label}
                                className='text-[var(--foreground)]'
                            >
                                <Icon size={ICON_SIZE} />
                            </button>
                        </li>
                    ))}
                </ul>
        </nav>
    );
}