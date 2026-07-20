export interface Job {
    companyName: string;
    role: string;
    skills: string[];
    description: string;
    imageLink: string;
    logoLink: string;
}

export async function fetchJobs(): Promise<Job[]> {
    return [
        {
            companyName: "Microsoft",
            role: "Software Engineer (May 2026 – Present)",
            skills: ["React", "Next.js", "TypeScript", "Azure"],
            description: `
                Architected and implemented a Microsoft Graph-powered <b>web application</b> user search using React, Next.js, and Azure, enabling real-time autocomplete across a directory of <b>1M+ users</b> and eliminating manual employee directory lookups.

                Refactored shared date/time formatting utilities used across <b>25+ views</b>, adding configurable 12/24-hour and locale-aware formatting to improve productivity and usability for <b>200+ internal users</b>.
            `,
            imageLink: "/coalitionPhoto.jpeg",
            logoLink: "/microsoft.png"
        },
        {
            companyName: "Shopify",
            role: "Software Engineer (September – December 2025)",
            skills: ["React", "TypeScript", "GraphQL", "Ruby"],
            description: `
                As a Software Engineer at <a href="https://www.shopify.com/">Shopify</a>, I worked on the checkout and subscriptions ecosystem, where I <b>migrated the <a href="https://apps.shopify.com/shopify-subscriptions">Subscriptions Reference App</a> to Polaris Web Components</b> by designing reusable migration patterns adopted across four checkout extensions. This work involved close coordination with <b>five+ cross-functional partners</b> to maintain backward compatibility while unblocking future UI development.
            `,
            imageLink: "/shopifyPhoto.png",
            logoLink: "/shopify.png"
        },
        {
            companyName: "University of Waterloo",
            role: "Undergraduate Research Assistant (May 2025 – Present)",
            skills: ["Python", "JavaScript", "Figma", "Google Cloud"],
            description: `
                Working under <a href="https://mattbrehmer.ca/">Professor Matthew Brehmer</a>, I extended the <b>Emoji Encoder</b> application by building an <b>LLM</b>-powered Slackbot using Python, JavaScript, and Google Cloud that converts datasets into emoji-based infographics. I designed responsive UI mockups in <b>Figma</b>, integrated semantic emoji mappings for various data types, and optimized backend inference throughput with caching and <b>parallel processing</b>, reducing response latency by <b>40%</b>.
            `,
            imageLink: "/shopifyPhoto.png",
            logoLink: "/universityOfWaterloo.png"
        },
        {
            companyName: "Microsoft",
            role: "Software Engineer (January – May 2025)",
            skills: ["React", "TypeScript", "Next.js", "Azure"],
            description: `
                As a Software Engineer at Microsoft, I worked with a cross-functional team of six to <b>redesign and implement the homepage</b> of <a href="https://www.thecoalitionstudio.com/">The Coalition's</a> internal developer admin portal that displays the user's most recently viewed items. I also built a collapsible tree view for console logs to streamline debugging and optimized telemetry initialization using a singleton pattern, <b>reducing redundant API calls by 75% per session.</b>
            `,
            imageLink: '/coalitionPhoto.jpeg',
            logoLink: "/microsoft.png"
        },
        {
            companyName: "Games Institute",
            role: "UI/UX Designer + Frontend Developer (May – August 2024)",
            skills: ["React", "Figma", "TypeScript", "Tailwind", "Python", "Go"],
            description: `
                As a UI/UX Designer and Frontend Developer for the <a href="https://uwaterloo.ca/games-institute/">Games Institute</a>, I worked with five coworkers to improve the interface of <a href="https://rhetoricon.uwaterloo.ca/"><b>Rhetoricon</b></a> and <a href="https://gofigure.uwaterloo.ca/"><b>GoFigure</b></a>, two research projects led by <a href="https://uwaterloo.ca/english/profiles/randy-harris">Professor Randy Harris</a> regarding tracking instances and their rhetorical figures to be used for <b>natural language processing</b>, including an intuitive annotation highlighting system and global undo/redo functionality.
            `,
            imageLink: '/rhetoricon.jpeg',
            logoLink: "/gamesInstitute.png"
        },
        {
            companyName: "Royal Bank of Canada",
            role: "DevOps Engineer (May – August 2023)",
            skills: ["OpenShift", "Splunk", "Jenkins", "Bash", "Agile", "Public Speaking"],
            description: `
                As a Devops Engineer for <a href="https://www.rbc.com/about-rbc.html">RBC</a>, I worked with five coworkers to improve the <b>DORA metrics and CI/CD workflow</b> of the DevOps ecosystem for RBC's mobile apps through Agile sprints.

                I also worked with five students to implement, design and <b>pitch an automation solution</b> to a panel of five RBC executives. The solution streamlined meeting synchronization between Sharepoint and Outlook using Microsoft Power Automate for RBC's operating team, resulting in <b>100+ hours saved per week</b> and <b>winning first place</b> in RBC's T&O Case Competition.
            `,
            imageLink: '/rbcDevops.jpg',
            logoLink: '/rbc.svg'
        },
        {
            companyName: "Royal Bank of Canada - Summer Tech Labs",
            role: "Innovation Developer (July – August 2022)",
            skills: ["React", "FastAPI", "MariaDB", "Agile", "Public Speaking"],
            description: `
                As an Innovation Developer as part of <a href="https://www.rbc.com/dms/enterprise/futurelaunch/rbc-summer-tech-labs.html">RBC Summer Tech Labs</a>, I worked with three coworkers to develop Lightning Links, an internal secure <b>URL shortener Chrome extension and Slackbot.</b> In the position, I focused on designing and modernizing the user interface after <b>conducting seven user interviews</b> with RBC employees, as well as strengthening backend features for the history page.

                Our team's efforts earned us the <b>REDD award</b> in week four and the <b>Best Creative Solutions award</b> for our final project pitch that presented to six accomplished RBC executives.
            `,
            imageLink: '/rbcSTL.jpg',
            logoLink: '/rbc.svg'
        },
    ];
}
