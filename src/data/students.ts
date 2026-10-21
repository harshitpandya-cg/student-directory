import { Student } from "@/types/student";

export const students: Student[] = [
  {
    id: "STU-1042",
    name: "Aarav Mehta",
    initials: "AM",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    specializationName: "Web Development",
    focusTrack: "Full-Stack Architecture",
    year: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    email: "aarav.mehta@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "Aarav is an undergraduate researcher focusing on distributed systems and cloud architecture. When not coding in Rust or Go, he mentors first-year engineering students in algorithm fundamentals.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "CS-301", name: "Distributed Systems & Microservices", credits: 4.0 },
      { code: "CS-340", name: "Web Application Architecture", credits: 4.0 },
      { code: "CS-280", name: "Algorithms & Complexity", credits: 3.5 },
    ],
    systemRecordId: "0948-CS-AM",
    lastValidated: "Oct 24, 2024",
  },
  {
    id: "STU-1089",
    name: "Elena Rostova",
    initials: "ER",
    department: "Design",
    departmentSlug: "design",
    specializationSlug: "ui-ux-design",
    specializationName: "UI/UX & Product Design",
    focusTrack: "Design Systems & Ergonomics",
    year: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    email: "elena.rostova@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Elena explores how typography and micro-interactions elevate cognitive accessibility in digital tools. She works as a peer mentor in the university usability laboratory.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "DS-201", name: "Interaction Design Fundamentals", credits: 3.5 },
      { code: "DS-220", name: "User Research & Usability Testing", credits: 4.0 },
      { code: "DS-250", name: "Visual Information Hierarchies", credits: 3.0 },
    ],
    systemRecordId: "0812-DS-ER",
    lastValidated: "Oct 22, 2024",
  },
  {
    id: "STU-1120",
    name: "Marcus Chen",
    initials: "MC",
    department: "Business",
    departmentSlug: "business",
    specializationSlug: "financial-technology",
    specializationName: "Financial Technology & Analytics",
    focusTrack: "Quantitative Valuation Models",
    year: "4th Year",
    studyYearFull: "4th Year (Senior)",
    email: "marcus.chen@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Marcus specializes in algorithmic finance and decentralized capital markets. He is currently co-authoring an analytical paper on automated liquidity protocol structures.",
    academicStanding: "4th Year Undergraduate",
    subjects: [
      { code: "BA-410", name: "Quantitative Financial Modeling", credits: 4.0 },
      { code: "BA-435", name: "Corporate Innovation Strategy", credits: 3.5 },
      { code: "BA-480", name: "Global Venture Development", credits: 4.0 },
    ],
    systemRecordId: "1104-BA-MC",
    lastValidated: "Oct 19, 2024",
  },
  {
    id: "STU-1155",
    name: "Priya Sharma",
    initials: "PS",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    specializationName: "Web Development",
    focusTrack: "Reactive UI Design",
    year: "1st Year",
    studyYearFull: "1st Year (Freshman)",
    email: "priya.sharma@campus.edu",
    enrolled: "Fall 2024",
    status: "Active Student",
    about:
      "Priya is passionate about frontend development and component-driven web design. She builds open-source UI libraries and actively contributes to collegiate web hackathons.",
    academicStanding: "1st Year Undergraduate",
    subjects: [
      { code: "CS-101", name: "Introduction to Computing & Programming", credits: 4.0 },
      { code: "CS-120", name: "Modern Web Architecture & Protocols", credits: 3.5 },
      { code: "MA-150", name: "Discrete Mathematics for Computing", credits: 4.0 },
    ],
    systemRecordId: "1190-CS-PS",
    lastValidated: "Oct 25, 2024",
  },
  {
    id: "STU-1201",
    name: "Lucas Dubois",
    initials: "LD",
    department: "Design",
    departmentSlug: "design",
    specializationSlug: "ui-ux-design",
    specializationName: "UI/UX & Product Design",
    focusTrack: "Motion Graphics & Spatial UI",
    year: "3rd Year",
    studyYearFull: "3rd Year (Junior)",
    email: "lucas.dubois@campus.edu",
    enrolled: "Fall 2022",
    status: "Active Student",
    about:
      "Lucas investigates spatial user interface paradigms and tangible computing interfaces. He collaborates closely with the architectural prototyping workshop.",
    academicStanding: "3rd Year Undergraduate",
    subjects: [
      { code: "DS-310", name: "Motion Design for Interactive Systems", credits: 4.0 },
      { code: "DS-330", name: "Tangible & Spatial Interface Studies", credits: 3.5 },
      { code: "DS-360", name: "Product Prototyping & Fabrication", credits: 4.0 },
    ],
    systemRecordId: "1224-DS-LD",
    lastValidated: "Oct 20, 2024",
  },
  {
    id: "STU-1244",
    name: "Maya Lin",
    initials: "ML",
    department: "Business",
    departmentSlug: "business",
    specializationSlug: "financial-technology",
    specializationName: "Financial Technology & Analytics",
    focusTrack: "Venture Capital Strategy",
    year: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    email: "maya.lin@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Maya is interested in venture capital investments and technology startup scaling. She manages the student entrepreneurship fund and coordinates weekly founder talks.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "BA-210", name: "Financial Accounting & Reporting", credits: 4.0 },
      { code: "BA-240", name: "Principles of Strategic Marketing", credits: 3.5 },
      { code: "BA-280", name: "Entrepreneurial Finance & Valuation", credits: 3.5 },
    ],
    systemRecordId: "1258-BA-ML",
    lastValidated: "Oct 21, 2024",
  },
  {
    id: "STU-1310",
    name: "Tariq Al-Mansoor",
    initials: "TA",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    specializationName: "Web Development",
    focusTrack: "Distributed Web Systems",
    year: "4th Year",
    studyYearFull: "4th Year (Senior)",
    email: "tariq.almansoor@campus.edu",
    enrolled: "Fall 2021",
    status: "Active Student",
    about:
      "Tariq focuses on high-throughput backend services and cloud edge computation. He has completed two engineering internships building distributed streaming backends.",
    academicStanding: "4th Year Undergraduate",
    subjects: [
      { code: "CS-401", name: "Advanced Cloud Infrastructure & DevOps", credits: 4.0 },
      { code: "CS-450", name: "Distributed Consensus Protocols", credits: 4.0 },
      { code: "CS-490", name: "Senior Engineering Capstone Project", credits: 4.0 },
    ],
    systemRecordId: "1330-CS-TA",
    lastValidated: "Oct 23, 2024",
  },
  {
    id: "STU-1388",
    name: "Sophia Müller",
    initials: "SM",
    department: "Computer Science",
    departmentSlug: "computer-science",
    specializationSlug: "web-development",
    specializationName: "Web Development",
    focusTrack: "Progressive Web Apps",
    year: "2nd Year",
    studyYearFull: "2nd Year (Sophomore)",
    email: "sophia.mueller@campus.edu",
    enrolled: "Fall 2023",
    status: "Active Student",
    about:
      "Sophia studies offline-first web technologies and cross-platform mobile frameworks. She is an active open-source contributor and leader of the Women in Tech student group.",
    academicStanding: "2nd Year Undergraduate",
    subjects: [
      { code: "CS-215", name: "Data Structures & Algorithms", credits: 4.0 },
      { code: "CS-240", name: "Client-Side Web Frameworks", credits: 3.5 },
      { code: "CS-260", name: "Database Management Systems", credits: 4.0 },
    ],
    systemRecordId: "1402-CS-SM",
    lastValidated: "Oct 24, 2024",
  },
];

// Helper functions for easy and clean querying
export function getStudentById(id: string): Student | undefined {
  return students.find((s) => s.id.toLowerCase() === id.toLowerCase());
}

export function getStudentsBySpecialization(
  departmentSlug: string,
  specializationSlug: string
): Student[] {
  return students.filter(
    (s) =>
      s.departmentSlug.toLowerCase() === departmentSlug.toLowerCase() &&
      s.specializationSlug.toLowerCase() === specializationSlug.toLowerCase()
  );
}

export function getStudentsByDepartment(departmentSlug: string): Student[] {
  return students.filter(
    (s) => s.departmentSlug.toLowerCase() === departmentSlug.toLowerCase()
  );
}
