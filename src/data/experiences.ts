export interface Experience {
    company: string;
    role: string;
    location?: string;
    startDate: string;
    endDate: string;
    description: string | string[];
    link?: string;
}

export const experiences: Experience[] = [
    {
        role: 'Software Engineer Intern',
        company: 'Tech Solutions Inc.',
        startDate: 'January 2022',
        endDate: 'April 2022',
        description: 'Developed internal tools using React and Node.js, improving team productivity by 15%. Collaborated with cross-functional teams to design and implement new features.',
        link: 'https://www.techsolutions.com',
    },
]
