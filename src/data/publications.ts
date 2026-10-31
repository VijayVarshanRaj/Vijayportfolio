export interface PublicationItem {
  id: string;
  title: string;
  venue: string;
  year: string;
  status: "IEEE PUBLISHED" | "UNDER REVIEW";
  statusBadge: string;
  publisher: string;
  description: string;
  doiOrUrl?: string;
  tags: string[];
}

export const publications: PublicationItem[] = [
  {
    id: "iccmc-2025",
    title: "Transparent Secure Supply Chain Packing",
    venue: "ICCMC 2025 · 9th International Conference on Computing Methodologies and Communication",
    year: "2025",
    status: "IEEE PUBLISHED",
    statusBadge: "IEEE Xplore Published",
    publisher: "IEEE Xplore",
    description: "Researched and authored a transparent, cryptographically verifiable supply chain packaging and tracking framework combining deterministic data contracts with computer vision inspection for zero-trust logistics.",
    doiOrUrl: "https://ieeexplore.ieee.org/document/11140598",
    tags: ["IEEE Xplore", "Supply Chain Security", "Computer Vision", "Verification"]
  },
  {
    id: "iccit-2025",
    title: "Carnisight 2.0 — Next-Gen Freshness Estimation of Perishable Foods",
    venue: "ICCIT 2025 · International Conference on Computer and Information Technology",
    year: "2025",
    status: "UNDER REVIEW",
    statusBadge: "Under Review (ICCIT 2025)",
    publisher: "Conference Review Board",
    description: "Formulated a transfer-learning paradigm integrating edge-optimized MobileNetV2 CNNs and sensor-fusion data contracts to assess perishable food freshness with high accuracy in sub-5-second evaluation cycles.",
    doiOrUrl: undefined,
    tags: ["Under Review", "Perishable Freshness", "Transfer Learning", "Sensor Fusion"]
  }
];
