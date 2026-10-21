import { Department, Specialization } from "@/types/department";

export const departments: Department[] = [
  {
    name: "Computer Science",
    slug: "computer-science",
    description:
      "Software engineering, artificial intelligence, algorithms, and systems infrastructure.",
    specializationsCount: 4,
    enrolledStudentsCount: 320,
    icon: "code",
    specializations: [
      {
        slug: "web-development",
        name: "Web Development",
        trackCode: "CS-SPEC-04",
        description:
          "Focusing on modern frontend architectures, full-stack frameworks, reactive interfaces, and distributed web APIs.",
        academicLead: "Prof. Elena Vance",
        primaryLab: "Turing Hall 408",
        enrollmentCount: 4,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "artificial-intelligence",
        name: "Artificial Intelligence",
        trackCode: "CS-SPEC-01",
        description:
          "Machine learning architectures, neural networks, and computer vision systems.",
        academicLead: "Dr. Alan Thorne",
        primaryLab: "Lovelace Lab 202",
        enrollmentCount: 3,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "cybersecurity",
        name: "Cybersecurity & Systems",
        trackCode: "CS-SPEC-02",
        description:
          "Network security, cryptographic primitives, and trusted execution environments.",
        academicLead: "Prof. Marcus Vance",
        primaryLab: "Shannon Security Vault 110",
        enrollmentCount: 2,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "cloud-computing",
        name: "Cloud Infrastructure",
        trackCode: "CS-SPEC-03",
        description:
          "Distributed storage engines, high-availability clusters, and container virtualization.",
        academicLead: "Dr. Sarah Jenkins",
        primaryLab: "Hopper Datacenter Lab 305",
        enrollmentCount: 3,
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
  {
    name: "Design",
    slug: "design",
    description:
      "User experience research, visual communication, interaction design, and product prototyping.",
    specializationsCount: 3,
    enrolledStudentsCount: 185,
    icon: "design",
    specializations: [
      {
        slug: "ui-ux-design",
        name: "UI/UX & Product Design",
        trackCode: "DS-SPEC-01",
        description:
          "Human-computer interaction, cognitive affordance, design systems, and usability evaluation.",
        academicLead: "Prof. Claire Fontaine",
        primaryLab: "Bauhaus Studio 104",
        enrollmentCount: 2,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "visual-communication",
        name: "Visual Communication",
        trackCode: "DS-SPEC-02",
        description:
          "Typography hierarchies, identity architecture, and editorial visual direction.",
        academicLead: "Dr. Leo Rossi",
        primaryLab: "Rams Design Lab 210",
        enrollmentCount: 2,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "interaction-design",
        name: "Interaction & Spatial Design",
        trackCode: "DS-SPEC-03",
        description:
          "Tangible interfaces, spatial audio-visual cues, and responsive installations.",
        academicLead: "Prof. Naomi Tanaka",
        primaryLab: "Ive Sensory Workshop 302",
        enrollmentCount: 1,
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
  {
    name: "Business",
    slug: "business",
    description:
      "Strategic management, financial technology, international entrepreneurship, and analytics.",
    specializationsCount: 3,
    enrolledStudentsCount: 240,
    icon: "business",
    specializations: [
      {
        slug: "financial-technology",
        name: "Financial Technology & Analytics",
        trackCode: "BA-SPEC-01",
        description:
          "Quantitative valuation algorithms, distributed ledgers, and financial data modeling.",
        academicLead: "Prof. Robert Sterling",
        primaryLab: "Wall Street Simulation Suite 101",
        enrollmentCount: 2,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "strategic-management",
        name: "Strategic Management",
        trackCode: "BA-SPEC-02",
        description:
          "Corporate turnaround strategy, organizational scaling, and venture incubation.",
        academicLead: "Dr. Katherine Holloway",
        primaryLab: "Executive Boardroom 501",
        enrollmentCount: 2,
        curriculumCycle: "2024–2025 Revised",
      },
      {
        slug: "international-business",
        name: "International Entrepreneurship",
        trackCode: "BA-SPEC-03",
        description:
          "Global supply-chain dynamics, cross-border venture models, and trade policy.",
        academicLead: "Prof. David Chen",
        primaryLab: "Global Commerce Center 204",
        enrollmentCount: 1,
        curriculumCycle: "2024–2025 Revised",
      },
    ],
  },
];

// Helper functions for clean querying
export function getDepartmentBySlug(slug: string): Department | undefined {
  // Support both "computer-science" and "cs" (since 404 suggested "/departments/cs")
  const normalized = slug.toLowerCase();
  if (normalized === "cs") return departments.find((d) => d.slug === "computer-science");
  return departments.find((d) => d.slug.toLowerCase() === normalized);
}

export function getSpecializationBySlug(
  departmentSlug: string,
  specializationSlug: string
): { department: Department; specialization: Specialization } | undefined {
  const dept = getDepartmentBySlug(departmentSlug);
  if (!dept) return undefined;
  const spec = dept.specializations.find(
    (s) => s.slug.toLowerCase() === specializationSlug.toLowerCase()
  );
  if (!spec) return undefined;
  return { department: dept, specialization: spec };
}
