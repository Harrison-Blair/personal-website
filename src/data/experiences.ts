export interface Experience {
    id: string;
    company: string;
    link?: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string | string[];
    tags: string[];
}

export const experiences: Experience[] = [
    {
        id: '202405-1',
        company: 'PulteGroup',
        link: 'https://www.pulte.com/',
        role: 'Software Engineer Intern',
        startDate: 'May 2024',
        endDate: 'August 2024',
        description: [
            "Developed Angular web application serving 31,000+ households to track build progress, manage bill presentment, and enable two-way messaging between homeowners and construction teams",
            "Integrated frontend components with .NET backend API and SQL databases, optimizing data retrieval for build progress tracking features",
            "Implemented automated unit testing using Jest to ensure code quality and feature reliability across deployments",
            "Collaborated with distributed product design teams across multiple locations in full Agile development lifecycle, participating in daily standups, sprint planning, and peer code reviews to deliver features on schedule"
        ],
        tags: [
            "TypeScript", "Angular", "C#",
            ".NET", "SQL", "Jest",
            "Azure DevOps", "Git", "Agile"
        ]
    },
    {
        id: '202206-1',
        company: 'Payverse',
        link: 'https://payverse.com',
        role: 'Technical Support',
        startDate: 'June 2022',
        endDate: 'August 2023',
        description: [
            "Owned end-to-end website design and development using Webflow and CSS for VC-backed fintech startup, collaborating with executives to create accessible user experience that supported marketing initiatives and customer acquisition",
            "Maintained and iterated on company website based on user feedback, implementing design improvements to enhance conversion rates",
            "Created and managed social media presence and marketing demos using Adobe Creative Suite for LinkedIn Ad campaigns, supporting B2B customer outreach"
        ],
        tags: [
            "Webflow", "CSS", "JavaScript", 
            "Adobe After Effects", "Adobe Premiere Pro",
        ]
    }
]
