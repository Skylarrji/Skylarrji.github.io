export interface WorkSummary {
    date: string;
    companyName: string;
    companyImage: string;
    location: string;
    role: string;
}

export async function fetchWorkSummaries(): Promise<WorkSummary[]> {
    return [
        {
            date: 'January 2025 - Present',
            companyName: 'Microsoft',
            companyImage: '/microsoft.png',
            location: 'Vancouver, BC',
            role: 'Software Developer - The Coalition'
        },
        {
            date: 'May 2024 - August 2024',
            companyName: 'Games Institute',
            companyImage: '/gamesInstitute.png',
            location: 'Waterloo, ON',
            role: 'Lead Designer + Frontend Developer'
        },
        {
            date: 'May 2023 - August 2023',
            companyName: 'Royal Bank of Canada',
            companyImage: '/rbc.svg',
            location: 'Toronto, ON',
            role: 'DevOps Engineer'
        },
        {
            date: 'July 2022 - August 2022',
            companyName: 'Royal Bank of Canada',
            companyImage: '/rbc.svg',
            location: 'Toronto, ON',
            role: 'Innovation Developer - Summer Tech Labs'
        }
    ];
}
