export interface Experience {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string | string[];
    tags: string[];
    link?: string;
}

export const experiences: Experience[] = [
    {
        id: '202410-1',
        role: 'Software Engineer Intern',
        company: 'Tech Solutions Inc.',
        startDate: 'January 2022',
        endDate: 'April 2022',
        description: 'Developed internal tools using React and Node.js, improving team productivity by 15%. Collaborated with cross-functional teams to design and implement new features.',
        tags: ['React', 'Node.js', 'TypeScript', 'Agile'],
        link: 'https://www.techsolutions.com',
    },
    {
        id: '202410-2',
        role: 'Software Engineer Intern',
        company: 'Tech Solutions Inc.',
        startDate: 'January 2022',
        endDate: 'April 2022',
        description: [
            'Developed internal tools using React and Node.js, improving team productivity by 15%.',
            'Collaborated with cross-functional teams to design and implement new features.',
            'Wrote unit and integration tests to ensure code quality and reliability.',
            'Participated in code reviews and contributed to team knowledge sharing sessions.'
        ],
        tags: ['React', 'Node.js', 'TypeScript', 'Agile'],
        link: 'https://www.techsolutions.com',
    },
    
]
