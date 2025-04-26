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
            date: 'January - May 2025',
            companyName: 'Microsoft',
            companyImage: '/microsoft.png',
            location: 'Vancouver, BC',
            role: 'Software Engineer'
        },
        {
            date: 'May - August 2024',
            companyName: 'Games Institute',
            companyImage: '/gamesInstitute.png',
            location: 'Waterloo, ON',
            role: 'Lead Designer + Frontend Developer'
        },
        {
            date: 'May - August 2023',
            companyName: 'Royal Bank of Canada',
            companyImage: '/rbc.svg',
            location: 'Toronto, ON',
            role: 'DevOps Engineer'
        },
        {
            date: 'July - August 2022',
            companyName: 'Royal Bank of Canada',
            companyImage: '/rbc.svg',
            location: 'Toronto, ON',
            role: 'Innovation Developer - Summer Tech Labs'
        }
    ];
}
