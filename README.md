# Student Directory — Next.js Application

A clean, modern, and academic student and department directory web application built using **Next.js (App Router)** and **TypeScript**.

The application allows users to browse student profiles, search and filter by department, inspect academic details and enrolled subjects, explore academic faculties and specializations, and safely handle non-existent routes with custom 404 fallbacks.

---

## 1. Project Overview

Campus Directory is designed for university and collegiate environments to present student records, faculty structures, and academic programs cleanly and clearly.

### Design Highlights
- **Subtle Lavender Background:** Clean, distraction-free backdrop with an academic look.
- **Unified Navigation:** Consistent top navigation bar with brand icon, active page indicators, and quick links.
- **Consistent Typography & Spacing:** Strict typography hierarchy with rounded badges, dividers, and accessible color contrast.
- **Responsive Layout:** Adapts smoothly across mobile screens, tablets, and desktop displays.

---

## 2. Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (v15 App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **UI & Styling:** React 19 with CSS Modules / modern global styling variables
- **Data Source:** Structured local TypeScript dummy datasets (no external database or third-party APIs required)
- **Icons:** Lightweight, inline SVGs with zero external icon package overhead

---

## 3. Main Features

1. **Student Listing & Search (`/students`):**
   - Real-time search by student name, ID, or specialization.
   - Dropdown filter to view students by department (Computer Science, Design, Business).
   - Dynamic counter displaying matching students (e.g., `Showing 8 of 8 students`).
   - Clean empty state with a "Reset Filters" action when no students match.
   - Responsive grid of student cards displaying initials, ID badge, department tag, study year, and profile link.

2. **Student Profile (`/students/[id]`):**
   - Breadcrumb navigation and back link to the directory.
   - Large student initials avatar and status badge (`Active Student`).
   - 2-column details grid showing department, study year, email, and enrollment term.
   - Biographical summary.
   - Enrolled subjects breakdown with course codes, subject titles, and credit counts.
   - System record ID and last-validation timestamp metadata.

3. **Departments Listing (`/departments`):**
   - Active faculty count header (`3 Active Academic Faculties`).
   - Cards for each department showing description, specialization count, and total enrollment.
   - Direct "View students →" link that opens the student directory pre-filtered to that department.
   - Quick pills to jump directly into specific specialization tracks.

4. **Nested Department & Specialization Page (`/departments/[department]/[specialization]`):**
   - Dynamic track details showing specialization code (e.g., `CS-SPEC-04`), academic lead, primary lab room, active enrollment, and curriculum cycle.
   - Filtered student list showing students enrolled in that specific track.
   - Quick return navigation to the parent department or the global student directory.

5. **Custom 404 Fallback (`not-found.tsx`):**
   - Triggered automatically via `notFound()` for invalid student IDs, unknown departments, or non-existent specialization tracks.
   - Includes a route status badge, descriptive explanation, and navigation buttons back to safety.
   - "Suggested Starting Points" section with one-click links to primary departments and directories.

---

## 4. Folder Structure

```
student-directory/
├── src/
│   ├── app/
│   │   ├── layout.tsx                                      # Root layout with shared Navbar and global styles
│   │   ├── globals.css                                     # Global color variables, resets, and typography
│   │   ├── page.tsx                                        # Entry route: redirects "/" to "/students"
│   │   ├── not-found.tsx                                   # Custom 404 Route Not Found page
│   │   ├── about/
│   │   │   └── page.tsx                                    # About page explaining the directory system
│   │   ├── students/
│   │   │   ├── page.tsx                                    # Server Component for student directory
│   │   │   ├── StudentsClient.tsx                          # Interactive client component (search, filter, pagination)
│   │   │   └── [id]/
│   │   │       └── page.tsx                                # Dynamic student profile page
│   │   └── departments/
│   │       ├── page.tsx                                    # All departments listing
│   │       └── [department]/
│   │           ├── page.tsx                                # Department detail & specializations overview
│   │           └── [specialization]/
│   │               └── page.tsx                            # Nested specialization track with student roster
│   ├── components/
│   │   ├── Navbar.tsx                                      # Header navigation bar with active indicators
│   │   ├── StudentCard.tsx                                 # Reusable card for directory and track views
│   │   └── Breadcrumbs.tsx                                 # Reusable breadcrumb navigation
│   ├── data/
│   │   ├── students.ts                                     # Comprehensive student records dataset
│   │   └── departments.ts                                  # Departments & specializations dataset
│   └── types/
│       ├── student.ts                                      # TypeScript interfaces for Student and EnrolledSubject
│       └── department.ts                                   # TypeScript interfaces for Department and Specialization
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 5. Application Routes and Their Purposes

| Route | Type | Description |
|---|---|---|
| `/` | Server (Redirect) | Redirects visitors to `/students` automatically. |
| `/students` | Server / Client | The primary student directory with live search and department filter. |
| `/students/[id]` | Dynamic Server Route | Detailed profile view for a specific student (e.g. `/students/stu-1042`). Calls `notFound()` if ID is invalid. |
| `/departments` | Server Component | Listing of all active academic departments and quick navigation. |
| `/departments/[department]` | Dynamic Server Route | Overview of a single department, its specialization tracks, and enrolled students. |
| `/departments/[department]/[specialization]` | Dynamic Server Route | Detailed page for a specific track (e.g. `/departments/computer-science/web-development`). |
| `/about` | Server Component | About page describing the platform. |
| `/*` (Invalid path) | Custom Not Found | Renders `not-found.tsx` with suggested starting points. |

---

## 6. Routing and Architecture Explanation

### App Router Paradigm
- **Server Components by Default:** Page components (`/students/[id]`, `/departments`, `/departments/[department]/[specialization]`) run on the server. They read local dummy data and return lightweight, pre-rendered HTML without client-side bundle bloat.
- **Client Components where Needed (`"use client"`):** The interactive search bar, department filter dropdown, and pagination on `/students` are isolated inside `StudentsClient.tsx`, while the parent Server Component supplies initial data and search parameters.
- **Dynamic Route Parameters:** Routes with square brackets (such as `[id]` and `[department]/[specialization]`) access route segments asynchronously through `params: Promise<{ id: string }>` in accordance with Next.js 15 standards.
- **Error Handling via `notFound()`:** When a user requests an ID or department slug that does not exist in our data records, Next.js instantly renders our styled `not-found.tsx` page.

---

## 7. Installation and Setup

### Prerequisites
- Node.js (version 18.18.0 or later, v20+ recommended)
- npm (or pnpm / yarn)

### Step 1: Install Dependencies
Open your terminal in the `student-directory` folder and run:
```bash
npm install
```

### Step 2: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Step 3: Verify TypeScript Types & Build
To verify that all types and pages compile cleanly:
```bash
npm run lint
npm run build
```

### Step 4: Run the Production Server
```bash
npm run start
```

---

## 8. Summary for Project Evaluation

1. **How does the search and filter work?**
   - The search input and department selector are controlled by React state in `StudentsClient.tsx`. A memoized `useMemo` filter checks the student's name, ID, and department in real time without refreshing the page.
2. **Where is data stored?**
   - In `src/data/students.ts` and `src/data/departments.ts`. Components import getter functions (`getStudentById`, `getSpecializationBySlug`, etc.) ensuring a single source of truth across all pages.
3. **How are 404s handled?**
   - In dynamic routes, if the requested ID or department cannot be found in the dataset, Next.js's native `notFound()` function is triggered, displaying `not-found.tsx`.