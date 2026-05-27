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
        id: '202601-1',
        company: 'Arcum',
        link: 'https://arcum.ai',
        role: 'Software Engineer',
        startDate: 'January 2026',
        endDate: 'Present',
        description: [
            "Built event-driven Python ML pipeline scoring 126,990 merchants/month across 12 client portfolios over 400 engineered features (300 dynamically computed), delivering 2.38x lift and 22.5% top-decile precision on churn predictions",
            "Developed internal MLOps console enabling self-serve pipeline orchestration (kickoff, step-level reruns, version management), data operations (upload, validation, cross-environment migration), and LLM prompt configuration driving AI-generated churn reasoning and retention email generation",
            "Architected and implemented client-facing tool-calling AI agent on Anthropic SDK with OpenAI/Gemini fallbacks, enabling clients to query metrics, plot time-series data, generate retention/winback strategies, and trigger automated campaigns through the in-platform campaign manager",
            "Designed and implemented JWT scope-based access control and permission middleware across the frontend and AI chatbot tools, enforcing tenant isolation of sensitive client data",
            "Shipped industry-benchmarking dashboards and the AI agent client interface in the Next.js application (Pages Router, MongoDB, Vercel), serving 120+ users"
        ],
        tags: [
            "Python", "TypeScript", "Next.js",
            "React", "MongoDB", "Vercel",
            "Anthropic SDK", "OpenAI", "Gemini",
            "AWS", "Machine Learning", "MLOps", "JWT"
        ]
    },
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
