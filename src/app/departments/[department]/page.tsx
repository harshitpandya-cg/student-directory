import Link from "next/link";
import { notFound } from "next/navigation";
import { getDepartmentBySlug } from "@/data/departments";
import { getStudentsByDepartment } from "@/data/students";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ department: string }>;
}) {
  const { department: deptSlug } = await params;
  const department = getDepartmentBySlug(deptSlug);

  if (!department) {
    notFound();
  }

  const deptStudents = getStudentsByDepartment(department.slug);

  return (
    <div className="main-container">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name },
        ]}
      />

      {/* Back button */}
      <div style={{ marginBottom: "18px" }}>
        <Link
          href="/departments"
          style={{
            fontSize: "13px",
            color: "#4b5563",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          ← Back to all departments
        </Link>
      </div>

      {/* Department Banner Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#111827",
                letterSpacing: "-0.01em",
              }}
            >
              {department.name} Department
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "#4b5563",
                marginTop: "6px",
                maxWidth: "700px",
                lineHeight: "1.5",
              }}
            >
              {department.description}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "12.5px",
            }}
          >
            <span
              style={{
                backgroundColor: "#eff6ff",
                border: "1px solid #dbeafe",
                color: "#1d4ed8",
                padding: "3px 8px",
                borderRadius: "5px",
                fontWeight: 500,
              }}
            >
              {department.specializationsCount} Specializations
            </span>
            <span
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                color: "#4b5563",
                padding: "3px 8px",
                borderRadius: "5px",
                fontWeight: 500,
              }}
            >
              {department.enrolledStudentsCount} Enrollees
            </span>
          </div>
        </div>
      </div>

      {/* Specialization Tracks */}
      <div style={{ marginBottom: "32px" }}>
        <h2
          style={{
            fontSize: "17px",
            fontWeight: 600,
            color: "#111827",
            marginBottom: "14px",
          }}
        >
          Academic Specializations
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
          }}
        >
          {department.specializations.map((spec) => (
            <div
              key={spec.slug}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                padding: "18px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#4b5563",
                      backgroundColor: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                      padding: "2px 6px",
                      borderRadius: "4px",
                    }}
                  >
                    {spec.trackCode}
                  </span>
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    Lead: {spec.academicLead}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "15.5px",
                    fontWeight: 600,
                    color: "#111827",
                    marginBottom: "6px",
                  }}
                >
                  {spec.name}
                </h3>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#4b5563",
                    lineHeight: "1.45",
                  }}
                >
                  {spec.description}
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid #f3f4f6",
                  paddingTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "12px", color: "#6b7280" }}>
                  Lab: {spec.primaryLab}
                </span>
                <Link
                  href={`/departments/${department.slug}/${spec.slug}`}
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#2563eb",
                  }}
                >
                  Explore track →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enrolled Students in this department */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <h2
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Students in {department.name} ({deptStudents.length})
          </h2>

          <Link
            href={`/students?department=${encodeURIComponent(department.name)}`}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#2563eb",
            }}
          >
            Filter in Directory →
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "18px",
          }}
        >
          {deptStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="page-footer-meta">
        <span>Curriculum Year 2024–2025</span>
        <span>Academic Informatics Core</span>
      </div>
    </div>
  );
}
