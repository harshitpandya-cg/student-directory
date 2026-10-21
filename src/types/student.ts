export interface EnrolledSubject {
  code: string;
  name: string;
  credits: number;
}

export interface Student {
  id: string;
  name: string;
  initials: string;
  department: string;
  departmentSlug: string;
  specializationSlug: string;
  specializationName: string;
  focusTrack: string;
  year: string;
  studyYearFull: string;
  email: string;
  enrolled: string;
  status: "Active Student" | "Inactive";
  about: string;
  academicStanding: string;
  subjects: EnrolledSubject[];
  systemRecordId: string;
  lastValidated: string;
}
