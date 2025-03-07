export interface ExperienceItem {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  dates: string;
}

const experienceInfo: ExperienceItem[] = [
  {
    id: 0,
    title: "CDK Global",
    subtitle: "Software Engineering Intern",
    dates: "June 2024 – October 2024",
    content: `
        Enhanced C++ infrastructure to migrate data from a Pick database to the
        cloud as part of CDK’s modernization of CDK Drive software for car 
        dealerships. Increased pipeline speed and validity to AWS Aurora, 
        giving an average of 542% performance uplift.


        Developed and enhanced software solutions within the automotive industry, 
        focusing on creating scalable, efficient, and user-friendly applications 
        to meet client needs and industry standards.


        Collaborated with cross-functional teams to identify and resolve 
        performance bottlenecks, ensuring smooth deployment and optimal 
        functionality of enterprise-level systems.


        Gained experience in debugging, code optimization, and implementing 
        new features while adhering to strict project deadlines and maintaining 
        high-quality standards.


        Participated in team meetings and code reviews to exchange knowledge, 
        refine best practices, and contribute to the overall improvement of 
        development workflows.
      

        Leveraged technical expertise and problem-solving skills to deliver 
        impactful contributions in a fast-paced, results-driven environment.
      `,
  },
  {
    id: 1,
    title: "Portland State University",
    subtitle: "Teacher's Assistant",
    dates: "April 2021 - December 2024",
    content: `
        Facilitated introductory programming labs into the field of Computer 
        Science for first year students as a peer educator helping students learn
        how to execute their first program to building abstract data types by
        practicing in the lab environment and providing meaningful constructive 
        feedback.


        Performed training for new hires over a 10-week period each term to enable
        smooth and successful integration in the team as well as working with
        students through open conversations and role-playing as students with 
        broken
        code.


        Created new course materials for all students to use and practice with in
        the Computer Science program for their first year of lower division 
        courses.
      `,
  },
  {
    id: 2,
    title: "United States Navy",
    subtitle: "Electronics Technician, 2nd Class",
    dates: "February 2012 - February 2020",
    content: `
      ##USS Theodore Roosevelt


      ###February 2013 - February 2017


      Manager of three maintenance work centers involving tracking and performing 
      maintenance on dozens of large systems with hundreds of maintenance action 
      items for each system to maintain external radio communications on-board the
      ship.


      Created and executed meticulous inventory systems for 40,000 ships technical
      documentation to enable accurate and time saving maintenance for countless 
      person-hours.
      

      ##Commander Fleet Activities Sasebo, Japan

      
      ###May 2017 - February 2020


      Tracked, authorized, and issued approved logistical requests and 
      requirements for naval forces for the US, Japan, Australian, Canadian, and


      Indian naval forces during port visits to the base.
      Conducted helicopter operations in and out of Sasebo, Japan for both VIPs,
      and same day high priority service items to be delivered to ships at sea.

      
      Performed weekly Operations Intelligence briefings with command triad and
      high-ranking officers stationed shipside and shore-side maintaining critical
      strategic information within the South Pacific.  
      `,
  },
];

export default experienceInfo;
