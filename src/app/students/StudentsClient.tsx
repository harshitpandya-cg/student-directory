"use client";

import { useState, useMemo } from "react";
import { Student } from "@/types/student";
import StudentCard from "@/components/StudentCard";


interface StudentsClientProps {
  initialDept: string;
  allStudents: Student[];
}

export default function StudentsClient({
  initialDept,
  allStudents,
}: StudentsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(
    initialDept !== "all" ? initialDept : "all"
  );
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  // Filter students based on search query and department dropdown
  
  const filteredStudents = useMemo(() => {
    return allStudents.filter((student) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        student.name.toLowerCase().includes(q) ||
        student.id.toLowerCase().includes(q) ||
        student.specializationName.toLowerCase().includes(q) ||
        student.focusTrack.toLowerCase().includes(q);

      const matchesDept =
        selectedDept === "all" ||
        student.department.toLowerCase() === selectedDept.toLowerCase() ||
        student.departmentSlug.toLowerCase() === selectedDept.toLowerCase();

      return matchesSearch && matchesDept;
    });
  }, [allStudents, searchQuery, selectedDept]);

  // Pagination calculation
  const totalStudents = filteredStudents.length;
  const totalPages = Math.ceil(totalStudents / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedStudents = filteredStudents.slice(
    startIndex,
    startIndex + pageSize
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleDeptChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDept(e.target.value);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchQuery("");
    setSelectedDept("all");
    setCurrentPage(1);
  };

  return (
    <div className="main-container">
      {/* Title & Description */}
      <div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#111827",
            letterSpacing: "-0.02em",
          }}
        >
          Students
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginTop: "4px",
          }}
        >
          Browse students and view their profiles.
        </p>
      </div>

      {/* Filter and Search Bar matching Screenshot 2 */}
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "12px 16px",
          marginTop: "20px",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        {/* Search input with search icon */}
        <div
          style={{
            position: "relative",
            flex: "1 1 300px",
            maxWidth: "380px",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search students"
            style={{
              width: "100%",
              padding: "7px 12px 7px 34px",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
              outline: "none",
              fontSize: "13.5px",
              color: "#111827",
            }}
          />
        </div>

        {/* Department select filter */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <label
            htmlFor="dept-select"
            style={{
              fontSize: "13px",
              color: "#4b5563",
              fontWeight: 500,
            }}
          >
            Department:
          </label>
          <select
            id="dept-select"
            value={selectedDept}
            onChange={handleDeptChange}
            style={{
              padding: "6px 28px 6px 10px",
              borderRadius: "6px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#ffffff",
              fontSize: "13px",
              color: "#111827",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="all">All departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Design">Design</option>
            <option value="Business">Business</option>
          </select>
        </div>
      </div>

      {/* Students Card Grid */}
      {paginatedStudents.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "18px",
          }}
        >
          {paginatedStudents.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "48px 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 14px auto",
              color: "#6b7280",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#111827",
              marginBottom: "6px",
            }}
          >
            No students found
          </h3>
          <p
            style={{
              fontSize: "13.5px",
              color: "#6b7280",
              maxWidth: "380px",
              margin: "0 auto 18px auto",
            }}
          >
            No student records match your current search and department filter.
          </p>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "7px 16px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 500,
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Pagination Footer matching Screenshot 2 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "24px",
          padding: "0 2px",
        }}
      >
        <span style={{ fontSize: "12.5px", color: "#6b7280" }}>
          Showing {paginatedStudents.length} of {totalStudents} students
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage <= 1}
            style={{
              border: "1px solid #e5e7eb",
              backgroundColor: currentPage <= 1 ? "#f9fafb" : "#ffffff",
              color: currentPage <= 1 ? "#9ca3af" : "#374151",
              padding: "5px 12px",
              borderRadius: "6px",
              fontSize: "12.5px",
              cursor: currentPage <= 1 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage >= totalPages}
            style={{
              border: "1px solid #e5e7eb",
              backgroundColor: currentPage >= totalPages ? "#f9fafb" : "#ffffff",
              color: currentPage >= totalPages ? "#9ca3af" : "#374151",
              padding: "5px 12px",
              borderRadius: "6px",
              fontSize: "12.5px",
              cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
