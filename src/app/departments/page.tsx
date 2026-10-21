import Link from "next/link";
import { departments } from "@/data/departments";

export default function DepartmentsPage() {
  const renderDepartmentIcon = (icon: string) => {
    switch (icon) {
      case "code":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <line x1="8" x2="16" y1="21" y2="21" />
            <line x1="12" x2="12" y1="17" y2="21" />
          </svg>
        );
      case "design":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
          </svg>
        );
      case "business":
        return (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="main-container">
      {/* Header section matching Screenshot 3 */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "16px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            Departments
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginTop: "4px",
            }}
          >
            Explore academic faculties, programs, and enrolled students.
          </p>
        </div>

        {/* Active badge on right */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12.5px",
            fontWeight: 500,
            color: "#2563eb",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
            }}
          />
          3 Active Academic Faculties
        </div>
      </div>

      {/* Horizontal divider */}
      <div
        style={{
          borderTop: "1px solid #e5e7eb",
          marginBottom: "24px",
        }}
      />

      {/* Department Cards Container */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {departments.map((dept, index) => (
          <div
            key={dept.slug}
            style={{
              padding: "24px",
              borderBottom:
                index < departments.length - 1 ? "1px solid #f3f4f6" : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* Left icon & info */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
                flex: "1 1 500px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "#eff6ff",
                  border: "1px solid #dbeafe",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                {renderDepartmentIcon(dept.icon)}
              </div>

              <div>
                <Link
                  href={`/departments/${dept.slug}`}
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#111827",
                    display: "inline-block",
                  }}
                >
                  {dept.name}
                </Link>

                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#4b5563",
                    margin: "4px 0 8px 0",
                    lineHeight: "1.5",
                  }}
                >
                  {dept.description}
                </p>

                {/* Sub details: Specializations & Enrolled count */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "12px",
                    color: "#6b7280",
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    △ {dept.specializationsCount} Specializations
                  </span>
                  <span>·</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    👥 {dept.enrolledStudentsCount} Enrolled Students
                  </span>

                  {/* Quick links to specializations */}
                  <span>·</span>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                    {dept.specializations.map((spec) => (
                      <Link
                        key={spec.slug}
                        href={`/departments/${dept.slug}/${spec.slug}`}
                        style={{
                          color: "#2563eb",
                          backgroundColor: "#f0f5ff",
                          padding: "1px 6px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: 500,
                        }}
                      >
                        {spec.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: View students link */}
            <div>
              <Link
                href={`/students?department=${encodeURIComponent(dept.name)}`}
                style={{
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "#2563eb",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                View students →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer metadata matching Screenshot 3 */}
      <div className="page-footer-meta">
        <span>Curriculum Year 2024–2025</span>
        <span>Updated daily via Campus Records API</span>
      </div>
    </div>
  );
}
