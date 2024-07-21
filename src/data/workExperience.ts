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
                        As a Devops Engineer for <a href="https://www.rbc.com/about-rbc.html">RBC</a>, I worked with five coworkers to improve the <b>DORA metrics and CI/CD workflow</b> of the DevOps ecosystem for RBC's mobile apps through Agile sprints.

                        I also worked with five students to implement, design and <b>pitch an automation solution</b> to a panel of five RBC executives. The solution streamlined meeting synchronization between Sharepoint and Outlook using Microsoft Power Automate for RBC's operating team, resulting in <b>100+ hours saved per week</b> and <b>winning first place</b> in RBC's T&O Case Competition.
           ` ,
           imageLink: '/rbcDevops.jpg'
        },
        {
            companyName: "RBC Summer Tech Labs",
            role: "Innovation Developer (July 2022 - August 2022)",
            skills: ["React", "FastAPI", "MariaDB", "Agile", "Public Speaking"],
            description: `
                As an Innovation Developer as part of <a href="https://www.rbc.com/dms/enterprise/futurelaunch/rbc-summer-tech-labs.html">RBC Summer Tech Labs</a>, I worked with three coworkers to develop Lightning Links, an internal secure <b>URL shortener Chrome extension and Slackbot.</b> In the position, I focused on designing and modernizing the user interface after <b>conducting seven user interviews</b> with RBC employees, as well as strengthening backend features for the history page. 

                Our team's efforts earned us the <b>REDD award</b> in week four and the <b>Best Creative Solutions award</b> for our final project pitch that presented to six accomplished RBC executives.
            ` ,
            imageLink: '/rbcSTL.jpg'
         },

    ];
}