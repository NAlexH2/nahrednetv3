export interface ExperienceItem {
  id: number;
  title: string;
  url: string;
  dates: string;
  content: string;
}

const projectInfo: ExperienceItem[] = [
  {
    id: 0,
    title: "nah-red.net V3",
    url: "https://github.com/NAlexH2/nahrednetv3",
    dates: "April 2025 - March 2025",
    content: ``
  },
  {
    id: 1,
    title: "Data Engineering Pipeline",
    url: "https://github.com/NAlexH2/de-proj-cs510",
    dates: "April 2024 - June 2024",
    content: ``

  },
  {
    id: 2,
    title: "Video Game Search",
    url: "https://github.com/NAlexH2/gcp-video-game-search",
    dates: "November 2023 - December 2023",
    content: ``
  },
  {
    id: 3,
    title: "SAFE",
    url: "https://github.com/PSU-MCECS-SAFE/SAFE",
    dates: "January 2023 - June 2023",
    content: ``
  },
  {
    id: 4,
    title: "HaskellGo",
    url: "https://github.com/NAlexH2/HaskellGo",
    dates: "February 2023 - March 2023",
    content: ``
  },
  {
    id: 5,
    title: "Phone Bill",
    url: "https://github.com/NAlexH2/phonebill-android-project",
    dates: "August 2022",
    content: ``
  }
];

export default projectInfo;