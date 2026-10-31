export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "AI / MACHINE LEARNING" | "COMPUTER VISION" | "FULL-STACK & SYSTEMS" | "IOT & SECURITY";
  allCategories: string[];
  period: string;
  problem: string;
  solution: string;
  technicalApproach: string[];
  metrics: {
    value: string;
    label: string;
  }[];
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  visualType: "xai-dashboard" | "freshlens-panel" | "ids-timeline";
  status: "Completed Project" | "Deployed System";
}

export const projectFilterCategories = [
  "ALL",
  "AI / MACHINE LEARNING",
  "COMPUTER VISION",
  "FULL-STACK & SYSTEMS",
  "IOT & SECURITY"
] as const;

export const projects: ProjectItem[] = [
  {
    id: "xai-xray",
    number: "01",
    title: "XAI X-Ray Analysis",
    subtitle: "Full-Stack Medical Image Classification Web App",
    category: "AI / MACHINE LEARNING",
    allCategories: ["AI / MACHINE LEARNING", "COMPUTER VISION", "FULL-STACK & SYSTEMS"],
    period: "Feb 2026 – May 2026",
    problem: "Deep learning models in medical diagnostics often operate as opaque black boxes, preventing radiologists and clinicians from interpreting model decisions and causing high diagnostic validation overhead.",
    solution: "Built and deployed an end-to-end multi-user clinical decision support platform combining a custom TensorFlow CNN classifier with dual Grad-CAM and LIME explainability heatmaps for rapid, transparent verification.",
    technicalApproach: [
      "Custom Deep CNN trained on 5,216 curated chest radiographs with augmentation and class-balancing",
      "Grad-CAM gradient-weighted activation mapping to highlight critical lung pathology regions",
      "LIME perturbation superpixel interpretability allowing doctors to cross-verify predictions in under 30 seconds",
      "Full-stack multi-user Flask REST backend with SQLAlchemy ORM, MySQL database, and secure JWT session management"
    ],
    metrics: [
      { value: "98%", label: "Clinical Benchmark Accuracy" },
      { value: "5,216", label: "Curated Radiograph Dataset" },
      { value: "<3s", label: "Multi-User Inference Latency" },
      { value: "-45%", label: "Clinician Review Overhead" }
    ],
    tags: [
      "Python",
      "Flask",
      "TensorFlow",
      "CNN",
      "MySQL",
      "Bootstrap",
      "SQLAlchemy",
      "Grad-CAM",
      "LIME",
      "JWT"
    ],
    githubUrl: "https://github.com/VijayVarshanRaj",
    demoUrl: "https://vijayvarshanrajportfolio.netlify.app/",
    visualType: "xai-dashboard",
    status: "Deployed System"
  },
  {
    id: "freshlens-ai",
    number: "02",
    title: "FreshLens AI",
    subtitle: "Meat Quality Assessment & Sensor-Fusion System",
    category: "COMPUTER VISION",
    allCategories: ["COMPUTER VISION", "AI / MACHINE LEARNING", "IOT & SECURITY"],
    period: "Sep 2025 – Dec 2025",
    problem: "Traditional meat and perishable grading relies on slow destructive sampling or subjective manual inspection, resulting in food waste, supply chain delays, and health risks.",
    solution: "Engineered an automated non-invasive quality inspection suite fine-tuning MobileNetV2 via transfer learning on perishable imagery, connected to a modular IoT sensor-fusion interface.",
    technicalApproach: [
      "MobileNetV2 CNN backbone fine-tuned via transfer learning for lightweight, edge-compatible inference",
      "OpenCV preprocessing pipeline applying adaptive thresholding, contrast normalization, and color balancing",
      "Modular IoT sensor-fusion interface with standardized data contracts for decoupled microservice ingestion",
      "Interactive Streamlit monitoring dashboard integrated with OpenAI evaluation prompts for automated reporting"
    ],
    metrics: [
      { value: ">95%", label: "Freshness Classification Accuracy" },
      { value: "4,000+", label: "Curated Perishable Images" },
      { value: "<5s", label: "Inference & Grading Latency" },
      { value: "-60%", label: "Sensor Integration Onboarding Time" }
    ],
    tags: [
      "Python",
      "TensorFlow",
      "MobileNetV2",
      "OpenCV",
      "Streamlit",
      "OpenAI API",
      "Transfer Learning",
      "IoT Fusion"
    ],
    githubUrl: "https://github.com/VijayVarshanRaj",
    demoUrl: "",
    visualType: "freshlens-panel",
    status: "Completed Project"
  },
  {
    id: "hybrid-ids",
    number: "03",
    title: "Hybrid Intrusion Detection System",
    subtitle: "Real-Time Network Threat Defense Pipeline",
    category: "IOT & SECURITY",
    allCategories: ["IOT & SECURITY", "AI / MACHINE LEARNING", "FULL-STACK & SYSTEMS"],
    period: "May 2025 – Jul 2025",
    problem: "Standard signature-based intrusion detection tools fail on unseen zero-day attacks, whereas standalone deep learning models introduce high computational latency and false positive alerts in high-speed networks.",
    solution: "Engineered a high-throughput hybrid defense pipeline pairing temporal LSTM deep learning with deterministic finite automata (DFA) rule engines for real-time packet-stream classification.",
    technicalApproach: [
      "Deterministic Finite Automata (DFA) state machines executing sub-millisecond filtering on known traffic signatures",
      "Recurrent LSTM deep neural network analyzing temporal flow sequences to detect novel and multi-step attack vectors",
      "Streaming ingestion pipeline benchmarked on the CICIDS2017 dataset processing 2.8M+ network connection records",
      "Real-time Streamlit operational surveillance dashboard tracking active anomalies and reducing incident triage time"
    ],
    metrics: [
      { value: "99.2%", label: "Binary Attack Detection Accuracy" },
      { value: "97.8%", label: "Multi-Class Threat Classification" },
      { value: "2.8M+", label: "CICIDS2017 Records Processed" },
      { value: "<200ms", label: "Real-Time Stream Latency" }
    ],
    tags: [
      "Python",
      "TensorFlow",
      "LSTM",
      "Scikit-learn",
      "Streamlit",
      "Finite Automata",
      "CICIDS2017",
      "Network Security"
    ],
    githubUrl: "https://github.com/VijayVarshanRaj",
    demoUrl: "",
    visualType: "ids-timeline",
    status: "Completed Project"
  }
];
