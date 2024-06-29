export interface Job {
    companyName: string;
    role: string;
    skills: string[];
    description: string;
    imageLink: string;
}

export async function fetchJobs(): Promise<Job[]> {
    return [
        {
           companyName: "Royal Bank of Canada",
           role: "DevOps Engineer (May - August 2023)",
           skills: ["OpenShift", "Splunk", "Jenkins", "Bash", "Agile", "Public Speaking"],
           description: `
                        As a Devops Engineer for RBC, I worked with five coworkers to improve the DORA metrics and CI/CD workflow of the DevOps ecosystem for RBC's mobile apps through Agile sprints.

                        I also worked with five students to implement, design and pitch an automation solution to a panel of five RBC executives. The solution streamlined meeting synchronization between Sharepoint and Outlook using Microsoft Power Automate for RBC's operating team, resulting in 100+ hours saved per week and winning first place in RBC's T&O Case Competition.
           ` ,
           imageLink: '/rbcDevops.jpg'
        },
        {
            companyName: "RBC Summer Tech Labs",
            role: "Innovation Developer (July 2022 - August 2022)",
            skills: ["React", "FastAPI", "MariaDB", "Agile", "Public Speaking"],
            description: `
                As an Innovation Developer as part of RBC Summer Tech Labs, I worked with three coworkers to develop Lightning Links, an internal secure URL shortener Chrome extension and Slackbot. In the position, I focused on designing and modernizing the user interface after conducting seven user interviews with RBC employees, as well as strengthening backend features for the history page. 

                Our team's efforts earned us the REDD award in week four and the Best Creative Solutions award for our final project pitch that presented to six accomplished RBC executives.
            ` ,
            imageLink: '/rbcSTL.jpg'
         },

    ];
}