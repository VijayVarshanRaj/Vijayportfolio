export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string[];
  points: string[];
  metrics?: { label: string; value: string }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  status: string;
  coursework: string[];
  highlights: string[];
}

export const industryExperience: ExperienceItem = {
  role: "ML / Software Engineering Intern",
  company: "Inforios Software Technologies",
  location: "Tanjore, India",
  period: "Dec 2025 – Jan 2026",
  stack: ["Python", "Flask", "MySQL", "MongoDB", "Git", "REST APIs", "Unit Testing"],
  points: [
    "Implemented the Python/Flask backend for a livestock production tracking and inventory management system end-to-end, tracing logs to root-cause a MongoDB connectivity failure and restoring reliable data flow before delivery.",
    "Designed, built, and documented 8+ RESTful API endpoints integrating frontend modules with MySQL/MongoDB data services, cutting integration bugs by 20% through clearer contract definitions.",
    "Improved reliability by cutting recurring production errors by 25% through input validation middleware and unit tests, working in a 5-member Agile team with Git-based code review."
  ],
  metrics: [
    { label: "REST Endpoints", value: "8+" },
    { label: "Bug Reduction", value: "20%" },
    { label: "Error Reduction", value: "25%" }
  ]
};

export const academicEducation: EducationItem = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "SRM Institute of Science and Technology",
  location: "Tiruchirappalli, Tamil Nadu",
  period: "Sep 2023 – May 2027",
  cgpa: "8.45 / 10",
  status: "Undergraduate Engineering (Graduating May 2027)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems (DBMS)",
    "Computer Networks",
    "Software Engineering Fundamentals"
  ],
  highlights: [
    "Consistent academic record with a cumulative grade point average of 8.45/10.",
    "Rigorous curriculum grounding across core computing, data modeling, and algorithmic problem solving.",
    "Author of IEEE-published research in supply chain systems and active contributor to AI/ML research."
  ]
};
