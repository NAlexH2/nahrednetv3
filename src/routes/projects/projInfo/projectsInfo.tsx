import { ReactElement } from "react";
import PhoneBill from "./phonebill";

export interface ExperienceItem {
  id: number;
  title: string;
  dates: string;
  content: ReactElement;
}

const projectInfo: ExperienceItem[] = [
  {
    id: 0,
    title: "nah-red.net V3",
    dates: "April 2025 - March 2025",
    content: <></>,
  },
  {
    id: 1,
    title: "Data Engineering Pipeline",
    dates: "April 2024 - June 2024",
    content: <></>,
  },
  {
    id: 2,
    title: "Video Game Search",
    dates: "November 2023 - December 2023",
    content: <></>,
  },
  {
    id: 3,
    title: "SAFE",
    dates: "January 2023 - June 2023",
    content: <></>,
  },
  {
    id: 4,
    title: "HaskellGo",
    dates: "February 2023 - March 2023",
    content: <></>,
  },
  {
    id: 5,
    title: "Phone Bill",
    dates: "August 2022",
    content: <PhoneBill />,
  },
];

export default projectInfo;
