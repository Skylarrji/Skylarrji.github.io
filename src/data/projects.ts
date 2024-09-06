export interface Project {
    name: string;
    description: string;
    github: string;
    demoSite: string;
    skills: string[];
    image: string;
}


export async function fetchProjects(): Promise<Project[]> {
    return [
        {
            name: "SnapBird",
            description: "A mobile application allowing users to identify bird photos and explore a gallery of past identifications.",
            github: "https://github.com/Skylarrji/snapbird",
            demoSite: "",
            skills: ["fast.ai", "React Native", "Django"],
            image: "/snapBird.png",
        },
        {
            name: "The Collection",
            description: "A full-stack web application where users can share, upvote and comment on articles that interest them.",
            github: "https://github.com/Skylarrji/the-collection",
            demoSite: "https://the-collection-m5s0.onrender.com/",
            skills: ["React", "Node.js", "Express.js", "MongoDB"],
            image: "/theCollection.gif",
        },
        {
            name: "Chess",
            description: "An interactive graphical interface that utilizes modern OOP design patterns, assisting beginners to learn gameplay.",
            github: "",
            demoSite: "https://youtu.be/PEo0N5ZFkxc",
            skills: ["C++", "X11"],
            image: "/chess.png",
        },
        {
            name: "Mr. Tortoise",
            description: "A battlesnake that utilizes modern algorithms to calculate each move, winning with an 80% success rate.",
            github: "https://github.com/Skylarrji/mr.-tortoise",
            demoSite: "",
            skills: ["Python"],
            image: "/tortoise.gif",
        },
        {
            name: "Cute Christmas Countdown",
            description: "A music player Chrome extension that generates activity suggestions to get into the holiday spirit.",
            github: "https://github.com/Skylarrji/cute-christmas-extension",
            demoSite: "",
            skills: ["React", "Figma"],
            image: "/christmas.png",
        },
        {
            name: "Animal Genie",
            description: "An interactive game that allows users to prompt the program to guess their animal in as few tries as possible.",
            github: "https://github.com/Skylarrji/animal_genie_",
            demoSite: "",
            skills: ["Processing (Java)"],
            image: "/animalGenie.png",
        },
    ];
} 
