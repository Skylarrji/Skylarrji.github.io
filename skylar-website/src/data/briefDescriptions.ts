export interface BriefDescription {
    profilePic: string;
    introDesc: string;
    aboutDesc: string;
    articleDesc: string;
}

export async function fetchBriefDescription(): Promise<BriefDescription> {
    return {
        profilePic: '/profile.jpg',

        introDesc: 
            `A second year Computer Science student at the University of Waterloo, focusing on Full-stack Development and UI/UX Design.`,

        aboutDesc: 
            `At the core of everything I do, I utilize technology, volunteering and my own experiences to change how people think about and interact with themselves and those around them.
            
            In my spare time, I enjoy writing posts on LinkedIn and Medium about my previous life experiences and what I've learned from them, especially topics such as insecurities, rejection, and mental health.
            
            I'm open to giving advice and chatting with new people, so don't hesitate to reach out!`,
    
        articleDesc: 
            `I share key takeaways from my personal experiences in school, work, and other areas of life on LinkedIn and Medium, accompanied with my hand-drawn digital designs. 
            
            These insights are designed to inspire and help you integrate valuable lessons into your life, from navigating university to dealing with hardships and embracing failure.`
    };
}