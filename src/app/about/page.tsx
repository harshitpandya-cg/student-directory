import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutPage() {
  return (
    <div className="main-container">
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "About" },
        ]}
      />

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
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "8px",
            }}
          >
            About Campus Directory
          </h1>

          <p
            style={{
              fontSize: "14px",
              color: "#4b5563",
              lineHeight: "1.6",
              marginBottom: "24px",
            }}
          >
            Campus Directory is an academic student information portal designed to
            provide an organized, readable view of enrolled students, academic
            departments, and specialization tracks.
          </p>

          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              paddingTop: "20px",
              marginBottom: "20px",
            }}
          >
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#111827",
                marginBottom: "12px",
              }}
            >
              Key Highlights
            </h2>

            <ul
              style={{
                fontSize: "13.5px",
                color: "#4b5563",
                lineHeight: "1.7",
                paddingLeft: "20px",
              }}
            >
              <li>
                <strong>Student Directory:</strong> Filter students by department
                or search by name and ID in real time.
              </li>
              <li>
                <strong>Academic Profiles:</strong> Detailed profiles featuring
                student bios, current academic standing, and enrolled subjects.
              </li>
              <li>
                <strong>Department Tracks:</strong> Hierarchical department
                listings and nested specialization tracks with assigned labs and
                leads.
              </li>
              <li>
                <strong>Reliable Navigation:</strong> Robust App Router dynamic
                routes with custom 404 fallbacks.
              </li>
            </ul>
          </div>

          <div
            style={{
              borderTop: "1px solid #f3f4f6",
              paddingTop: "20px",
            }}
          >
            <Link
              href="/students"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "8px 18px",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 500,
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Explore Students Directory
            </Link>
          </div>
        </div>

        <div className="page-footer-meta">
          <span>Campus Directory © Academic Informatics Core</span>
          <span>Version 1.0.0</span>
        </div>
      </div>
    </div>
  );
}
