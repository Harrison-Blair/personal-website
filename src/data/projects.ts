export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
  imageUrl?: string;
  pinned?: boolean;
}

export const projects: Project[] = [
  {
    id: '202510-1',
    title: 'My Personal Website',
    description: 'A portfolio site built with Next.js and Tailwind.',
    link: 'https://github.com/Harrison-Blair/personal-website',
    tags: ['Next.js', 'React', 'TypeScript'],
    imageUrl: '/images/Website-Homepage.png',
    pinned: true,
  },
  // Add more projects here
];