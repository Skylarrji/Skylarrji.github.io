export interface Image {
    name: string;
    url: string
}

export interface Skill {
    name: string;
    description: string;
    images: Image[];
}

export async function fetchSkills(): Promise<Skill[]> {
    return [
        {
            name: "UI/UX Design",
            description: "From school projects to work experience and hackathons, I ensure that my designs are not only visually appealing, but also accessible and easy-to-use.",
            images: [
                {
                    name: "Figma",
                    url: "/figma.png"
                },
                {
                    name: "Canva",
                    url: "/canva.png"
                },
                {
                    name: "Material Design",
                    url: "/material.png"
                }
            ]
        },
        {
            name: "Full-Stack Development",
            description: "My understanding of both front and backend tools allow me to develop scalable web applications by writing clean and maintainable code.",
            images: [
                {
                    name: "React",
                    url: "/react.png"
                },
                {
                    name: "Node.js",
                    url: "/node.png"
                },
                {
                    name: "MongoDB",
                    url: "/mongo.png"
                },
                {
                    name: "Go",
                    url: "/go.png"
                }
            ]
        },
        {
            name: "DevOps",
            description: "Utilizing tools such as Splunk and Jenkins, I’m able to streamline mean times to recovery and ensure a smooth and efficient CI/CD process.",
            images: [
                {
                    name: "Splunk",
                    url: "/splunk.png"
                },
                {
                    name: "Bash",
                    url: "/bash.png"
                },
                {
                    name: "Jenkins",
                    url: "/jenkins.png"
                }
            ]
        },
    ];
}