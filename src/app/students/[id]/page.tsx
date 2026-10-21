import Link from "next/link";
import { notFound } from "next/navigation";
import { getStudentById } from "@/data/students";
import Breadcrumbs from "@/components/Breadcrumbs";

export default async function StudentProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const student = getStudentById(id);

  if (!student) {
    notFound();
  }

  return (
    <div className="main-container">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Students", href: "/students" },
          { label: student.name },
        ]}
      />

      {/* Back button */}
      <div style={{ marginBottom: "20px" }}>
        <Link
          href="/students"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            color: "#4b5563",
            fontWeight: 500,
          }}
        >
          ← Back to students
        </Link>
      </div>

      {/* Main Profile Card matching Screenshot 1 */}
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "32px",
          }}
        >
          {/* Header row: Avatar, Name, and Badges */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "8px",
                backgroundColor: "#dbeafe",
                color: "#1d4ed8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {student.initials}
            </div>

            <div>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#111827",
                  lineHeight: 1.2,
                  marginBottom: "6px",
                }}
              >
                {student.name}
              </h1>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#4b5563",
                    border: "1px solid #e5e7eb",
                    borderRadius: "4px",
                    padding: "2px 7px",
                    backgroundColor: "#f9fafb",
                    fontWeight: 500,
                  }}
                >
                  {student.id}
                </span>

                <span
                  style={{
                    fontSize: "11.5px",
                    color: "#15803d",
                    border: "1px solid #bbf7d0",
                    borderRadius: "4px",
                    padding: "2px 7px",
                    backgroundColor: "#f0fdf4",
                    fontWeight: 500,
                  }}
                >
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              margin: "24px 0",
            }}
          />

          {/* 2-Column Info Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#6b7280",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Department
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                }}
              >
                {student.department}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#6b7280",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Study Year
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#111827",
                }}
              >
                {student.studyYearFull}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#6b7280",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Email
              </div>
              <a
                href={`mailto:${student.email}`}
                style={{
                  fontSize: "14px",
                  color: "#2563eb",
                  textDecoration: "none",
                }}
              >
                {student.email}
              </a>
            </div>

            <div>
              <div
                style={{
                  fontSize: "10.5px",
                  fontWeight: 600,
                  color: "#6b7280",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "4px",
                }}
              >
                Enrolled
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#111827",
                }}
              >
                {student.enrolled}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              margin: "24px 0",
            }}
          />

          {/* About Section */}
          <div>
            <h2
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "8px",
              }}
            >
              About
            </h2>
            <p
              style={{
                fontSize: "13.5px",
                color: "#4b5563",
                lineHeight: "1.6",
              }}
            >
              {student.about}
            </p>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              margin: "24px 0",
            }}
          />

          {/* Academic Details Section */}
          <div>
            <h2
              style={{
                fontSize: "14.5px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "14px",
              }}
            >
              Academic Details
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                }}
              >
                <span style={{ color: "#6b7280" }}>Department</span>
                <span style={{ color: "#111827", fontWeight: 500 }}>
                  {student.department}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                }}
              >
                <span style={{ color: "#6b7280" }}>Current Academic Standing</span>
                <span style={{ color: "#111827", fontWeight: 500 }}>
                  {student.academicStanding}
                </span>
              </div>
            </div>

            {/* Enrolled Subjects Box */}
            <div
              style={{
                fontSize: "10.5px",
                fontWeight: 600,
                color: "#6b7280",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "8px",
              }}
            >
              Enrolled Subjects
            </div>

            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              {student.subjects.map((subject, index) => (
                <div
                  key={subject.code}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px 14px",
                    backgroundColor: "#ffffff",
                    borderBottom:
                      index < student.subjects.length - 1
                        ? "1px solid #f3f4f6"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#111827",
                      fontWeight: 500,
                    }}
                  >
                    {subject.code}: {subject.name}
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#6b7280",
                      fontWeight: 500,
                    }}
                  >
                    {subject.credits.toFixed(1)} Credits
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer Metadata underneath */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "14px",
            padding: "0 4px",
            fontSize: "11.5px",
            color: "#9ca3af",
          }}
        >
          <span>System Record ID: {student.systemRecordId}</span>
          <span>Last validated: {student.lastValidated}</span>
        </div>
      </div>
    </div>
  );
}
