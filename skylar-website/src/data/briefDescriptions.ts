export interface BriefDescription {
    profilePic: string;
    profileDrawingPic: string;
    introDesc: string;
    aboutDesc: string;
    articleDesc: string;
}

export async function fetchBriefDescriptions(): Promise<BriefDescription> {
    return {
        profilePic: '/profile.jpg',

        profileDrawingPic: '/profileDrawing.png',

        introDesc: 
            `A second year Computer Science student at the University of Waterloo, focusing on Full-stack Development and UI/UX Design.`,

        aboutDesc: 
            `At the core of everything I do, I utilize technology, volunteering, and my own experiences to change how people think about and interact with themselves and those around them.\n\nIn my spare time, I enjoy writing posts on LinkedIn and Medium about my previous life experiences and what I've learned from them, especially topics such as insecurities, rejection, and mental health.\n\nI'm open to giving advice and chatting with new people, so don't hesitate to reach out!`,
    
        articleDesc: 
            `I share key takeaways from my personal experiences in school, work, and other areas of life on LinkedIn and Medium, accompanied with my hand-drawn digital designs.\n\nThese insights are designed to inspire and help you integrate valuable lessons into your life, from navigating university to dealing with hardships and embracing failure.`
    };
}

