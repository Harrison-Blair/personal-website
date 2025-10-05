export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: '202510-1',
    title: 'My Personal Website',
    description: 'A portfolio site built with Next.js and Tailwind.',
    imageUrl: '/images/website.png',
    link: 'https://github.com/Harrison-Blair/personal-website',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  // Add more projects here
];