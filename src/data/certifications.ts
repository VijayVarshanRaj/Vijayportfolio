export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
  credentialUrl?: string;
  skills: string[];
}

export const certifications: CertificationItem[] = [
  {
    id: "coursera-ml-genai",
    name: "Machine Learning, Data Science & Generative AI with Python",
    issuer: "Coursera",
    category: "AI & Data Science",
    credentialUrl: "",
    skills: ["Machine Learning", "Data Science", "Generative AI", "Python", "Model Evaluation"]
  },
  {
    id: "aws-genai-ml",
    name: "Generative AI & Machine Learning",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud & AI",
    credentialUrl: "",
    skills: ["AWS Cloud", "Generative AI", "Foundation Models", "Cloud Deployment"]
  },
  {
    id: "eduskills-aicte-aiml",
    name: "Virtual Internship: AI/ML",
    issuer: "EduSkills (AICTE)",
    category: "AI/ML Internship",
    credentialUrl: "",
    skills: ["Deep Learning", "Supervised Learning", "Model Deployment", "Industry Best Practices"]
  },
  {
    id: "coursera-mern-fullstack",
    name: "MERN Full Stack Development",
    issuer: "Coursera",
    category: "Full Stack Development",
    credentialUrl: "",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Modern Web"]
  }
];
