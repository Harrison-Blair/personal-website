'use client';

import { Home, FileUser, FolderCode, FolderKanban, Briefcase, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { href: '/', icon: Home, label: 'Home' },
        { href: '/about', icon: FileUser, label: 'About' },
        { href: '/projects', icon: FolderCode, label: 'Projects' },
        { href: '/blog', icon: FolderKanban, label: 'Blog' },
        { href: '/work', icon: Briefcase, label: 'Work' },
        { href: '/contact', icon: Mail, label: 'Contact' },
    ];

    return (
        <nav className="fixed left-0 top-0 h-full w-20 bg-[var(--muted)] flex flex-col items-center py-8">
            <ul className="flex flex-col space-y-6">
                {navItems.map(({ href, icon: Icon, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            title={label}
                            className={`block p-2 rounded transition-colors ${
                                pathname === href
                                    ? 'text-[var(--primary)]'
                                    : 'text-[var(--foreground)] hover:text-[var(--accent)]'
                            }`}
                        >
                            <Icon size={24} />
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}