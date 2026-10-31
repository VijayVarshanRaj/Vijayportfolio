export interface WorkflowStep {
  step: string;
  name: string;
  summary: string;
  description: string;
  deliverables: string[];
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    name: "UNDERSTAND",
    summary: "Define the problem and requirements.",
    description: "Deep dive into problem constraints, operational objectives, real-world user needs, and target performance metrics.",
    deliverables: [
      "Problem statement & constraint scoping",
      "Benchmark metrics definition (accuracy, latency, throughput)",
      "Dataset assessment & feasibility check"
    ]
  },
  {
    step: "02",
    name: "DESIGN",
    summary: "Plan the architecture and solution.",
    description: "Architect neural topologies, backend services, API data contracts, and intuitive user interfaces.",
    deliverables: [
      "System architecture & data pipeline blueprint",
      "RESTful API contract definitions & schema modeling",
      "UI/UX interaction wireframes & dashboard design"
    ]
  },
  {
    step: "03",
    name: "DEVELOP",
    summary: "Build the frontend, backend, and AI components.",
    description: "Implement end-to-end codebases with modular Python backends, deep learning pipelines, and responsive frontends.",
    deliverables: [
      "Model training, fine-tuning & transfer learning",
      "Python/Flask backend & secure REST endpoints",
      "Responsive React client interface & state management"
    ]
  },
  {
    step: "04",
    name: "EVALUATE",
    summary: "Test functionality and evaluate real model performance.",
    description: "Rigorously benchmark models against test splits, validate explainability with Grad-CAM/LIME, and run unit tests.",
    deliverables: [
      "Confusion matrices, ROC curves & latency profiling",
      "Explainable AI validation (Grad-CAM & LIME heatmaps)",
      "Comprehensive unit testing & error handling validation"
    ]
  },
  {
    step: "05",
    name: "DEPLOY",
    summary: "Package and deploy the application.",
    description: "Package the application for production release with robust error handling, monitoring, and reproducible documentation.",
    deliverables: [
      "Production containerization & cloud hosting",
      "Interactive monitoring dashboards & telemetry logging",
      "Technical documentation & GitHub repository release"
    ]
  }
];
