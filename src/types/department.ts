export interface Specialization {
  slug: string;
  name: string;
  trackCode: string;
  description: string;
  academicLead: string;
  primaryLab: string;
  enrollmentCount: number;
  curriculumCycle: string;
}

export interface Department {
  name: string;
  slug: string;
  description: string;
  specializationsCount: number;
  enrolledStudentsCount: number;
  icon: "code" | "design" | "business";
  specializations: Specialization[];
}
