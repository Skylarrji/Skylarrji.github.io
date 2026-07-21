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
      date: "May 2026 – Present",
      companyName: "Microsoft",
      companyImage: "/microsoft.png",
      location: "Vancouver, BC",
      role: "Software Engineer",
    },
    {
      date: "September – December 2025",
      companyName: "Shopify",
      companyImage: "/shopify.png",
      location: "Toronto, ON",
      role: "Software Engineer",
    },
    {
      date: 'May 2025 – Present',
      companyName: 'University of Waterloo',
      companyImage: '/universityOfWaterloo.png',
      location: 'Waterloo, ON',
      role: 'Undergraduate Research Assistant',
    },
  ];
}
