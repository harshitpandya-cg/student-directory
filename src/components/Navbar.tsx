"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isStudentsActive =
    pathname === "/" || pathname.startsWith("/students");
  const isDepartmentsActive = pathname.startsWith("/departments");
  const isAboutActive = pathname === "/about";

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1040px",
          margin: "0 auto",
          padding: "0 20px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <Link
            href="/students"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                backgroundColor: "#2563eb",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "15px",
                color: "#111827",
                letterSpacing: "-0.01em",
              }}
            >
              Campus Directory
            </span>
          </Link>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              height: "56px",
            }}
          >
            <Link
              href="/students"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "100%",
                padding: "0 4px",
                fontSize: "13.5px",
                fontWeight: isStudentsActive ? 600 : 400,
                color: isStudentsActive ? "#111827" : "#4b5563",
                borderBottom: isStudentsActive
                  ? "2px solid #2563eb"
                  : "2px solid transparent",
                transition: "color 0.15s ease",
              }}
            >
              Students
            </Link>

            <Link
              href="/departments"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "100%",
                padding: "0 4px",
                fontSize: "13.5px",
                fontWeight: isDepartmentsActive ? 600 : 400,
                color: isDepartmentsActive ? "#111827" : "#4b5563",
                borderBottom: isDepartmentsActive
                  ? "2px solid #2563eb"
                  : "2px solid transparent",
                transition: "color 0.15s ease",
              }}
            >
              Departments
            </Link>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "100%",
                padding: "0 4px",
                fontSize: "13.5px",
                fontWeight: isAboutActive ? 600 : 400,
                color: isAboutActive ? "#111827" : "#4b5563",
                borderBottom: isAboutActive
                  ? "2px solid #2563eb"
                  : "2px solid transparent",
                transition: "color 0.15s ease",
              }}
            >
              About
            </Link>
          </nav>
        </div>

        <div>
          <span
            style={{
              display: "inline-block",
              border: "1px solid #dbeafe",
              backgroundColor: "#f4f8ff",
              color: "#3b82f6",
              fontSize: "11.5px",
              fontWeight: 500,
              padding: "3px 9px",
              borderRadius: "5px",
            }}
          >
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}
