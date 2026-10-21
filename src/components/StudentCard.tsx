import Link from "next/link";
import { Student } from "@/types/student";

interface StudentCardProps {
  student: Student;
  variant?: "directory" | "specialization";
}

export default function StudentCard({
  student,
  variant = "directory",
}: StudentCardProps) {
  const getDepartmentColors = (dept: string) => {
    switch (dept.toLowerCase()) {
      case "computer science":
        return {
          avatarBg: "#dbeafe",
          avatarText: "#1d4ed8",
          badgeBg: "#eff6ff",
          badgeBorder: "#bfdbfe",
          badgeText: "#1d4ed8",
        };
      case "design":
        return {
          avatarBg: "#fce7f3",
          avatarText: "#be185d",
          badgeBg: "#fdf2f8",
          badgeBorder: "#fbcfe8",
          badgeText: "#be185d",
        };
      case "business":
        return {
          avatarBg: "#ffedd5",
          avatarText: "#c2410c",
          badgeBg: "#fff7ed",
          badgeBorder: "#fed7aa",
          badgeText: "#c2410c",
        };
      default:
        return {
          avatarBg: "#e5e7eb",
          avatarText: "#374151",
          badgeBg: "#f3f4f6",
          badgeBorder: "#e5e7eb",
          badgeText: "#374151",
        };
    }
  };

  const colors = getDepartmentColors(student.department);

  if (variant === "specialization") {
    return (
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "16px 18px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "6px",
                backgroundColor: colors.avatarBg,
                color: colors.avatarText,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "13px",
              }}
            >
              {student.initials}
            </div>
            <div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "14.5px",
                  color: "#111827",
                }}
              >
                {student.name}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                {student.id}
              </div>
            </div>
          </div>

          <span
            style={{
              fontSize: "11px",
              color: "#4b5563",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
              padding: "2px 7px",
              backgroundColor: "#ffffff",
              fontWeight: 500,
            }}
          >
            {student.year.replace("rd Year", "").replace("nd Year", "").replace("st Year", "").replace("th Year", "") ? `Year ${student.year.charAt(0)}` : student.year}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #f3f4f6",
            paddingTop: "12px",
            fontSize: "12.5px",
          }}
        >
          <span style={{ color: "#4b5563", fontWeight: 500 }}>
            {student.focusTrack}
          </span>
          <Link
            href={`/students/${student.id.toLowerCase()}`}
            style={{
              color: "#2563eb",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            View profile →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        padding: "18px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "170px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "6px",
              backgroundColor: colors.avatarBg,
              color: colors.avatarText,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "13px",
            }}
          >
            {student.initials}
          </div>

          <span
            style={{
              fontSize: "11px",
              color: "#4b5563",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
              padding: "2px 6px",
              backgroundColor: "#f9fafb",
              fontWeight: 500,
            }}
          >
            {student.id}
          </span>
        </div>

        <h3
          style={{
            fontSize: "15.5px",
            fontWeight: 600,
            color: "#111827",
            marginBottom: "8px",
          }}
        >
          {student.name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 500,
              padding: "2px 7px",
              borderRadius: "4px",
              backgroundColor: colors.badgeBg,
              border: `1px solid ${colors.badgeBorder}`,
              color: colors.badgeText,
            }}
          >
            {student.department}
          </span>
          <span style={{ fontSize: "12px", color: "#6b7280" }}>
            {student.year}
          </span>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #f3f4f6",
          marginTop: "16px",
          paddingTop: "12px",
        }}
      >
        <Link
          href={`/students/${student.id.toLowerCase()}`}
          style={{
            color: "#2563eb",
            fontSize: "13px",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          View profile →
        </Link>
      </div>
    </div>
  );
}
