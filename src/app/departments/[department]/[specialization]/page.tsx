import Link from "next/link";
import { notFound } from "next/navigation";
import { getSpecializationBySlug } from "@/data/departments";
import { getStudentsBySpecialization } from "@/data/students";
import Breadcrumbs from "@/components/Breadcrumbs";
import StudentCard from "@/components/StudentCard";

export default async function SpecializationPage({
  params,
}: {
  params: Promise<{ department: string; specialization: string }>;
}) {
  const { department: deptSlug, specialization: specSlug } = await params;

  const result = getSpecializationBySlug(deptSlug, specSlug);

  if (!result) {
    notFound();
  }

  const { department, specialization } = result;
  const enrolledStudents = getStudentsBySpecialization(
    department.slug,
    specialization.slug
  );

  return (
    <div className="main-container">
      {/* Breadcrumbs matching Screenshot 5 */}
      <Breadcrumbs
        items={[
          { label: "Departments", href: "/departments" },
          { label: department.name, href: `/departments/${department.slug}` },
          { label: specialization.name },
        ]}
      />

      {/* Subheader links */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "18px",
          fontSize: "13px",
        }}
      >
        <Link
          href={`/departments/${department.slug}`}
          style={{
            color: "#2563eb",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          ← Return to {department.name} Department
        </Link>

        <Link
          href="/students"
          style={{
            color: "#2563eb",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          View all students →
        </Link>
      </div>

      {/* Main Specialization Card */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "24px",
          marginBottom: "28px",
        }}
      >
        {/* Card Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#111827",
                letterSpacing: "-0.01em",
              }}
            >
              {specialization.name}
            </h1>

            <span
              style={{
                fontSize: "12px",
                color: "#4b5563",
                backgroundColor: "#f3f4f6",
                border: "1px solid #e5e7eb",
                borderRadius: "5px",
                padding: "2px 8px",
              }}
            >
              Specialization under {department.name}
            </span>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontSize: "10px",
                fontWeight: 600,
                color: "#6b7280",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "3px",
              }}
            >
              DEPARTMENT TRACK
            </div>
            <span
              style={{
                fontSize: "11.5px",
                fontWeight: 600,
                color: "#111827",
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                padding: "3px 8px",
                borderRadius: "4px",
                display: "inline-block",
                fontFamily: "monospace",
              }}
            >
              {specialization.trackCode}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "13.5px",
            color: "#4b5563",
            lineHeight: "1.5",
            marginTop: "12px",
            maxWidth: "760px",
          }}
        >
          {specialization.description}
        </p>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid #f3f4f6",
            margin: "20px 0",
          }}
        />

        {/* 4-Column Metrics Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Academic Lead
            </div>
            <div
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {specialization.academicLead}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Primary Core Lab
            </div>
            <div
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {specialization.primaryLab}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Total Enrollment
            </div>
            <div
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {enrolledStudents.length} Active Enrollees
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "11px",
                color: "#6b7280",
                marginBottom: "4px",
              }}
            >
              Curriculum Cycle
            </div>
            <div
              style={{
                fontSize: "13.5px",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {specialization.curriculumCycle}
            </div>
          </div>
        </div>
      </div>

      {/* Students in this Specialization Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h2
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "#111827",
            }}
          >
            Students in this Specialization
          </h2>
          <span
            style={{
              fontSize: "11.5px",
              fontWeight: 600,
              color: "#4b5563",
              backgroundColor: "#f3f4f6",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
              padding: "1px 6px",
            }}
          >
            {enrolledStudents.length}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            color: "#6b7280",
          }}
        >
          <span>Filtered by Track:</span>
          <span
            style={{
              fontSize: "11.5px",
              fontWeight: 500,
              color: "#1d4ed8",
              backgroundColor: "#eff6ff",
              border: "1px solid #dbeafe",
              padding: "2px 8px",
              borderRadius: "4px",
            }}
          >
            {specialization.name}
          </span>
        </div>
      </div>

      {/* 2-Column Students Grid */}
      {enrolledStudents.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "16px",
          }}
        >
          {enrolledStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              variant="specialization"
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "36px",
            textAlign: "center",
            color: "#6b7280",
            fontSize: "13.5px",
          }}
        >
          No students currently enrolled in this specialization track.
        </div>
      )}

      {/* Page Footer Metadata matching Screenshot 5 */}
      <div className="page-footer-meta">
        <span>Campus Directory © Academic Informatics Core</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          Path: /departments/{department.slug}/{specialization.slug}
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#16a34a",
              display: "inline-block",
            }}
          />
        </span>
      </div>
    </div>
  );
}
