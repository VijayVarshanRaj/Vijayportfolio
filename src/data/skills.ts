export interface SkillItem {
  name: string;
  category: string;
  description: string;
  verified?: boolean;
}

export const skillCategories = [
  "ALL GROUPS",
  "PROGRAMMING",
  "AI & MACHINE LEARNING",
  "FRONTEND",
  "BACKEND & APIs",
  "DATABASES",
  "CORE COMPUTER SCIENCE",
  "TOOLS & WORKFLOW",
  "MOBILE",
  "AI-ASSISTED DEVELOPMENT"
] as const;

export const skillsData: SkillItem[] = [
  // PROGRAMMING
  {
    name: "Python",
    category: "PROGRAMMING",
    description: "Primary language for deep learning, ML pipelines, Flask backends, and scripting.",
    verified: true
  },
  {
    name: "C",
    category: "PROGRAMMING",
    description: "Foundational systems programming, memory management, and algorithm implementation.",
    verified: true
  },
  {
    name: "JavaScript",
    category: "PROGRAMMING",
    description: "Modern ES6+ syntax, asynchronous DOM interaction, and web client logic.",
    verified: true
  },
  {
    name: "PHP",
    category: "PROGRAMMING",
    description: "Server-side scripting, form processing, and relational database connectivity.",
    verified: true
  },
  {
    name: "SQL",
    category: "PROGRAMMING",
    description: "Relational database schema definition, complex joins, and query optimization.",
    verified: true
  },

  // AI & MACHINE LEARNING
  {
    name: "TensorFlow",
    category: "AI & MACHINE LEARNING",
    description: "Deep learning model development, CNN architecture design, and training pipelines.",
    verified: true
  },
  {
    name: "Scikit-learn",
    category: "AI & MACHINE LEARNING",
    description: "Supervised and unsupervised learning, feature scaling, and model evaluation metrics.",
    verified: true
  },
  {
    name: "OpenCV",
    category: "AI & MACHINE LEARNING",
    description: "Computer vision preprocessing, color space conversion, and image filtering.",
    verified: true
  },
  {
    name: "CNN",
    category: "AI & MACHINE LEARNING",
    description: "Convolutional neural networks for medical imaging and transfer learning pipelines.",
    verified: true
  },
  {
    name: "LSTM",
    category: "AI & MACHINE LEARNING",
    description: "Long Short-Term Memory networks for temporal sequential anomaly classification.",
    verified: true
  },
  {
    name: "Grad-CAM",
    category: "AI & MACHINE LEARNING",
    description: "Gradient-weighted Class Activation Mapping for visual model interpretability.",
    verified: true
  },
  {
    name: "LIME",
    category: "AI & MACHINE LEARNING",
    description: "Local Interpretable Model-agnostic Explanations for prediction validation.",
    verified: true
  },
  {
    name: "Transfer Learning",
    category: "AI & MACHINE LEARNING",
    description: "Fine-tuning pre-trained backbones like MobileNetV2 on domain-specific datasets.",
    verified: true
  },
  {
    name: "Pandas & NumPy",
    category: "AI & MACHINE LEARNING",
    description: "High-performance vectorized operations, multidimensional arrays, and dataset munging.",
    verified: true
  },
  {
    name: "Data Preprocessing",
    category: "AI & MACHINE LEARNING",
    description: "Feature normalization, data augmentation, class imbalance handling, and cleansing.",
    verified: true
  },
  {
    name: "Model Evaluation & Optimization",
    category: "AI & MACHINE LEARNING",
    description: "Precision, recall, F1-scores, confusion matrices, ROC-AUC, and latency profiling.",
    verified: true
  },
  {
    name: "OpenAI API",
    category: "AI & MACHINE LEARNING",
    description: "Integration of foundation model APIs for evaluation assistance and NLP enhancements.",
    verified: true
  },

  // FRONTEND
  {
    name: "React.js",
    category: "FRONTEND",
    description: "Component-driven architectures, hooks, state management, and modern client interfaces.",
    verified: true
  },
  {
    name: "HTML5 & CSS3",
    category: "FRONTEND",
    description: "Semantic web standards, responsive layouts, Flexbox, CSS Grid, and custom animations.",
    verified: true
  },
  {
    name: "Bootstrap",
    category: "FRONTEND",
    description: "Rapid responsive prototyping, grid systems, and modular UI component styling.",
    verified: true
  },

  // BACKEND & APIs
  {
    name: "Flask",
    category: "BACKEND & APIs",
    description: "Lightweight Python microframework for REST APIs, ML model serving, and database ORM.",
    verified: true
  },
  {
    name: "REST APIs",
    category: "BACKEND & APIs",
    description: "Stateless client-server architecture, contract definitions, and endpoint documentation.",
    verified: true
  },
  {
    name: "Node.js",
    category: "BACKEND & APIs",
    description: "Event-driven asynchronous runtime for server-side services and tooling scripts.",
    verified: true
  },
  {
    name: "JWT Session Management",
    category: "BACKEND & APIs",
    description: "Token-based user authentication, role authorization, and secure session handling.",
    verified: true
  },

  // DATABASES
  {
    name: "MySQL",
    category: "DATABASES",
    description: "Structured schema modeling, foreign key relationships, indexing, and SQLAlchemy integration.",
    verified: true
  },
  {
    name: "MongoDB",
    category: "DATABASES",
    description: "Document-oriented NoSQL storage, collection modeling, and dynamic JSON document pipelines.",
    verified: true
  },
  {
    name: "Firebase",
    category: "DATABASES",
    description: "Real-time document storage, cloud firestore, and backend integration services.",
    verified: true
  },

  // CORE COMPUTER SCIENCE
  {
    name: "Data Structures & Algorithms",
    category: "CORE COMPUTER SCIENCE",
    description: "Arrays, linked lists, trees, graphs, sorting, searching, and algorithmic complexity analysis.",
    verified: true
  },
  {
    name: "Object-Oriented Programming",
    category: "CORE COMPUTER SCIENCE",
    description: "Encapsulation, inheritance, polymorphism, abstraction, and clean architectural design.",
    verified: true
  },
  {
    name: "DBMS",
    category: "CORE COMPUTER SCIENCE",
    description: "ACID properties, transaction management, normal forms, and query execution plans.",
    verified: true
  },
  {
    name: "Software Engineering Fundamentals",
    category: "CORE COMPUTER SCIENCE",
    description: "Modular design, unit testing, code refactoring, and separation of concerns.",
    verified: true
  },
  {
    name: "Computer Networks",
    category: "CORE COMPUTER SCIENCE",
    description: "OSI layer stack, TCP/IP protocol suite, HTTP/HTTPS headers, and network packet analysis.",
    verified: true
  },

  // TOOLS & WORKFLOW
  {
    name: "Git & GitHub",
    category: "TOOLS & WORKFLOW",
    description: "Distributed version control, branch workflows, pull requests, and code reviews.",
    verified: true
  },
  {
    name: "AWS",
    category: "TOOLS & WORKFLOW",
    description: "Cloud computing fundamentals, EC2 instances, S3 storage, and deployment environments.",
    verified: true
  },
  {
    name: "Unit Testing",
    category: "TOOLS & WORKFLOW",
    description: "Test case authoring, input validation testing, and reliability verification.",
    verified: true
  },
  {
    name: "Agile Development",
    category: "TOOLS & WORKFLOW",
    description: "Sprint planning, iterative delivery, daily standups, and collaborative team sprints.",
    verified: true
  },
  {
    name: "Production Deployment",
    category: "TOOLS & WORKFLOW",
    description: "Configuring environment variables, production WSGI servers, and continuous uptime.",
    verified: true
  },

  // MOBILE
  {
    name: "Flutter",
    category: "MOBILE",
    description: "Cross-platform mobile application development with Dart and widget hierarchies.",
    verified: true
  },
  {
    name: "React Native",
    category: "MOBILE",
    description: "Native mobile UI development leveraging React patterns and mobile ecosystem bridges.",
    verified: true
  },

  // AI-ASSISTED DEVELOPMENT
  {
    name: "Claude Code & Cursor",
    category: "AI-ASSISTED DEVELOPMENT",
    description: "Agentic coding workflows for rapid prototyping, intelligent refactoring, and debugging.",
    verified: true
  },
  {
    name: "GitHub Copilot",
    category: "AI-ASSISTED DEVELOPMENT",
    description: "Contextual inline code completion, test generation, and documentation drafting.",
    verified: true
  }
];
