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
            "Programmed updates to the Customer Portal application as part of an Agile multi-location development team.",
            "Participated in full development lifecycle activities using mature, structured Agile processes."
        ],
        tags: [
            "TypeScript", "Angular", "C#",
            ".NET", "SQL", "Jest",
            "Azure DevOps", "Git", "Python",
            "Agile"
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
            "Designed, implemented, and maintained the company website using Webflow.",
            "Directed and animated product videos, social media advertisements, and website graphics.",
        ],
        tags: [
            "Webflow", "CSS", "JavaScript", 
            "Adobe After Effects", "Adobe Premiere Pro", "Adobe Photoshop", 
            "Adobe Illustrator", "LinkedIn Ads"
        ],

    },
    
]
