import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function NotFound() {
  return (
    <div className="main-container">
      <Breadcrumbs
        items={[
          { label: "Directory", href: "/students" },
          { label: "Not Found" },
        ]}
      />

      <div
        style={{
          padding: "60px 20px 40px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "#f3f4f6",
            border: "1px solid #e5e7eb",
            borderRadius: "9999px",
            padding: "4px 12px",
            fontSize: "11px",
            fontWeight: 600,
            color: "#4b5563",
            letterSpacing: "0.05em",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#6b7280",
            }}
          />
          404 · ROUTE NOT FOUND
        </div>

        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            color: "#111827",
            marginBottom: "10px",
          }}
        >
          Student or department not found
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            maxWidth: "460px",
            margin: "0 auto 28px auto",
            lineHeight: "1.5",
          }}
        >
          The requested directory entry or path could not be located. It may have
          moved or the identifier might be invalid.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <Link
            href="/students"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "9px 20px",
              borderRadius: "6px",
              fontSize: "13.5px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Return to Students Directory
          </Link>

          <Link
            href="/departments"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #d1d5db",
              color: "#374151",
              padding: "9px 20px",
              borderRadius: "6px",
              fontSize: "13.5px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Browse All Departments
          </Link>
        </div>

        <div
          style={{
            maxWidth: "540px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            overflow: "hidden",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f9fafb",
              borderBottom: "1px solid #e5e7eb",
              padding: "10px 16px",
            }}
          >
            <span
              style={{
                fontSize: "10.5px",
                fontWeight: 600,
                color: "#6b7280",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              SUGGESTED STARTING POINTS
            </span>
            <span style={{ fontSize: "11px", color: "#9ca3af" }}>
              Internal Routes
            </span>
          </div>

          <div>
            <Link
              href="/departments/computer-science"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: "1px solid #f3f4f6",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#111827",
                  fontWeight: 500,
                }}
              >
                🏛️ Computer Science Department
              </span>
              <span style={{ color: "#2563eb" }}>/departments/cs →</span>
            </Link>

            <Link
              href="/students"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: "1px solid #f3f4f6",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#111827",
                  fontWeight: 500,
                }}
              >
                👥 All Students Directory
              </span>
              <span style={{ color: "#2563eb" }}>/students →</span>
            </Link>

            <Link
              href="/departments"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#111827",
                  fontWeight: 500,
                }}
              >
                📚 Academic Departments
              </span>
              <span style={{ color: "#2563eb" }}>/departments →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
