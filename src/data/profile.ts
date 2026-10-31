export interface ProfileData {
  name: string;
  monogram: string;
  role: string;
  tagline: string;
  intro: string;
  aboutText: string;
  contact: {
    phone: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    portfolioUrl: string;
    ieeePaperUrl: string;
  };
  education: {
    degree: string;
    institution: string;
    location: string;
    duration: string;
    graduationDate: string;
    cgpa: string;
    coursework: string[];
  };
  focusAreas: {
    label: string;
    title: string;
    description: string;
  }[];
  assets: {
    portrait: string;
    cutout: string;
    secondaryPortrait: string;
    resume: string;
  };
}

export const profileData: ProfileData = {
  name: "VIJAY VARSHAN RAJ G J",
  monogram: "VR",
  role: "AI/ML ENGINEER & FULL-STACK DEVELOPER",
  tagline: "BUILDING INTELLIGENCE. ENGINEERING IMPACT.",
  intro: "I build intelligent applications by combining machine learning, explainable AI, and full-stack software engineering to solve practical problems.",
  aboutText: "I'm a Computer Science and Engineering student at SRM Institute of Science and Technology, focused on AI/ML engineering and full-stack development. I build practical applications, integrate machine learning models into software systems, and explore explainable AI.",
  contact: {
    phone: "+91 99521 07934",
    email: "iamvarshanraj@gmail.com",
    location: "Thanjavur, Tamil Nadu, India",
    github: "https://github.com/VijayVarshanRaj",
    linkedin: "https://www.linkedin.com/in/vijay-varshan-raj",
    portfolioUrl: "https://vijayvarshanrajportfolio.netlify.app/",
    ieeePaperUrl: "https://ieeexplore.ieee.org/document/11140598",
  },
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "SRM Institute of Science and Technology",
    location: "Tiruchirappalli, Tamil Nadu",
    duration: "September 2023 – May 2027",
    graduationDate: "May 2027",
    cgpa: "8.45 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Computer Networks",
      "Software Engineering Fundamentals"
    ]
  },
  focusAreas: [
    {
      label: "CORE FOCUS",
      title: "AI/ML Engineering",
      description: "Deep learning models, CNN & LSTM architectures, and explainable AI pipelines."
    },
    {
      label: "DEVELOPMENT",
      title: "Full-Stack Applications",
      description: "Robust Python/Flask backends, RESTful APIs, and responsive interactive frontends."
    },
    {
      label: "APPROACH",
      title: "Build, Test, Improve",
      description: "Disciplined engineering lifecycle with rigorous validation, metrics, and iteration."
    }
  ],
  assets: {
    portrait: "/images/vijay-portrait.jpg",
    cutout: "/images/vijay-cutout.png",
    secondaryPortrait: "/images/vijay-bike.jpg",
    resume: "/Resume.pdf"
  }
};
