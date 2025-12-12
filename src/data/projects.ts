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
  {
    id: '202505-1',
    title: 'MusiSync',
    description: 'A peer-to-peer music library syncing application. My senior-year Capstone project.',
    link: 'https://github.com/abbi-gehl/MusiSyncCapstone',
    tags: ['React Native', 'P2P Networking', 'TypeScript'],
  }
  // Add more projects here
];