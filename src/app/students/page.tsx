import { students } from "@/data/students";
import StudentsClient from "./StudentsClient";

export default async function StudentsPage({
  searchParams,
}: {
  searchParams: Promise<{ department?: string; dept?: string }>;
}) {
  const resolvedParams = await searchParams;
  const initialDept = resolvedParams.department || resolvedParams.dept || "all";

  return <StudentsClient initialDept={initialDept} allStudents={students} />;
}
