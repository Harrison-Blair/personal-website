'use client';

import { Home, FileUser, FolderCode, FolderKanban, Briefcase, Mail, Sun, MoonStar } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const pathname = usePathname();
    const router = useRouter();
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
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
        { href: '/blog', icon: FolderKanban, label: 'Blog' },
        { href: '/work', icon: Briefcase, label: 'Work' },
    ];

    const bottomNavItems = [
        { icon: isDark ? MoonStar : Sun, label: isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode', onClick: toggleTheme },
        { icon: Mail, label: 'Contact', onClick: () => router.push('/contact') },
    ];

    return (
        <nav className="fixed left-0 top-0 h-full w-20 bg-[var(--muted)] flex flex-col items-center justify-between py-8">
            <ul className="flex flex-col space-y-3">
                {topNavItems.map(({ href, icon: Icon, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            title={label}
                            className={`block p-1 rounded transition-colors relative ${
                                pathname === href
                                    ? 'text-[var(--foreground)] border-l-4 border-[var(--primary)]'
                                    : 'text-[var(--secondary)] hover:text-[var(--accent)]'
                            }`}
                        >
                            <Icon size={60} />
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
                            className="block p-1 rounded transition-colors text-[var(--secondary)] hover:text-[var(--accent)]"
                        >
                            <Icon size={60} />
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}