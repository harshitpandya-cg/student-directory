import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "13px",
        color: "#6b7280",
        marginBottom: "16px",
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{
                  color: "#4b5563",
                  transition: "color 0.15s ease",
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: isLast ? "#111827" : "#4b5563",
                  fontWeight: isLast ? 600 : 400,
                }}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span style={{ color: "#d1d5db", userSelect: "none" }}>/</span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
