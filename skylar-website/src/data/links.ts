export interface Links {
    linkedin: string;
    github: string;
    gmail: string;
    resume: string;
    medium: string;
}

export async function fetchLinks(): Promise<Links> {
    return {
        linkedin: "https://www.linkedin.com/in/skylar-ji/",
        github: "https://github.com/Skylarrji",
        gmail: "skylarji20045@gmail.com",
        resume: "https://github.com/Skylarrji/resume/blob/main/resume-updated.pdf",
        medium: "https://medium.com/@skylarrji",
    };
} 