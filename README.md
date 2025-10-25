
# Assignment Management Dashboard 

A modern, responsive assignment management system built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. This application provides role-based dashboards for both students and administrators to manage assignments with status tracking and double-verification submission flow.

🔗 **Live Demo:** [https://internship-seven-psi.vercel.app](https://internship-seven-psi.vercel.app)  
🔗 **GitHub Repository:** [https://github.com/Deepaksb7/internship](https://github.com/Deepaksb7/internship)

## 🎯 Overview

This project is a **full-stack frontend assignment** for the Joineazy Frontend Internship position. It implements a student-assignment management dashboard with clear role-based functionality:

- **Students** can view their assignments, confirm submissions via a double-verification flow, and track their progress.
- **Admins (Professors)** can create and manage assignments, attach Google Drive links for submissions, and visualize student progress through individual progress bars.

Each user sees only their relevant data with fully responsive design across desktop and mobile devices.

***

## ✨ Features

### Student Dashboard
- View all assigned tasks with due dates and submission status
- Double-confirmation submission flow ("Are you sure?" → Final confirmation)
- Responsive card-based layout
- Assignment details including title, course, and Drive submission links

### Admin Dashboard
- Create new assignments with title, course, due date, and Google Drive link
- View all assignments in a structured table format
- Track student submission status (Submitted / Not Started) with progress bars
- Edit and delete existing assignments
- Empty state handling with helpful prompts

### General Features
- **Fully Responsive Design** (mobile, desktop)
- **Context API** for global state management
- **Local Storage Persistence** for assignment data
- **Clean, Modern UI** with Tailwind CSS and shadcn/ui components
- **Type-Safe** with TypeScript

***

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **State Management** | React Context API + Hooks |
| **Data Storage** | LocalStorage (backend) |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

***

## 🚀 Getting Started

### There are 3 way's :

### 1. Cloning the repo and run locally

## Prerequisites 

- Node.js 18+ and npm installed
- Git installed on your machine

1. **Clone the repository:**
```bash
git clone https://github.com/Deepaksb7/internship.git
cd internship
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
```bash
Navigate to [http://localhost:3000](http://localhost:3000) to see the application it will be blank at first.
```

5. **Change the url:**
```bash
Navigate to [http://localhost:3000/AdminPage](http://localhost:3000/AdminPage) to see the application.
Navigate to [http://localhost:3000/studentPage](http://localhost:3000) to see the application.
```

***

### 2. Use docker pull

## Prerequisites 

- Docker desktop installed on your machine.


1. **docker desktop:**
```bash
Open docker desktop
```

2. **Pull the Image from Docker Hub:**
Run this in the terminal
```bash
docker pull deepak8101/joins:latest
```

3. **Run the Docker Container:**
Once the image is pulled, run the container with this command:
```bash
docker run -d -p 4000:3000 deepak8101/joins:latest
```

4. **Open your browser:**
```bash
Navigate to [http://localhost:4000](http://localhost:4000) to see the application it will be blank at first.
```

5. **Change the url:**
```bash
Navigate to [http://localhost:4000/AdminPage](http://localhost:4000/AdminPage) to see the application.
Navigate to [http://localhost:4000/studentPage](http://localhost:4000/studentPage) to see the application.
```
***

### 3. Vist the deployet site
The application is deployed on **Vercel** for seamless Next.js hosting:
```bash
**Live URL:** [https://internship-seven-psi.vercel.app](https://internship-seven-psi.vercel.app)
```

***

## 📁 Folder Structure

```
joins-dashboard
├──app
│   ├──AdminPage
│   │   ├──form
│   │   │   └──page.tsx
│   │   ├──Student
│   │   │   └──page.tsx
│   │   └──page.tsx
│   ├──context
│   │   └──AssignmentsContext.tsx
│   ├──studentPage
│   │   └──page.tsx
│   ├──favicon.ico
│   ├──globals.css
│   ├──layout.tsx
│   └──page.tsx
├──components
│   ├──ui
│   │   └──sonner.tsx
│   ├──AdminAssignmentTable.tsx
│   ├──AdminCreateForm.tsx
│   ├──AdminEmptyState.tsx
│   ├──AdminStudentTable.tsx
│   ├──AssignmentTable.tsx
│   ├──ConfirmSubmission.tsx
│   ├──EmptyState.tsx
│   ├──Header.tsx
│   ├──Sidebar.tsx
│   ├──SubmissionModal.tsx
│   └──Topbar.tsx
├──lib
│   └──utils.ts
├──Page
│   ├──AdminStudent.tsx
│   ├──AdminView.tsx
│   └──StudentView.tsx
├──public
│   ├──file.svg
│   ├──globe.svg
│   ├──image.png
│   ├──next.svg
│   ├──vercel.svg
│   └──window.svg
├──types
│   └──assignment.ts
├──utils
│   └──Storage.ts
├──│   │   ├──types
│   │   │   ├──routes.d.ts
│   │   │   └──validator.ts
│   │   ├──build-manifest.json
│   │   ├──fallback-build-manifest.json
│   │   ├──lock
│   │   ├──package.json
│   │   ├──prerender-manifest.json
│   │   ├──routes-manifest.json
│   │   └──trace
│   └──types
│   │   ├──routes.d.ts
│   │   └──validator.ts
├──components.json
├──data.ts
├──Dockerfile
├──eslint.config.mjs
├──globsld.d.ts
├──next.config.ts
├──package-lock.json
├──package.json
├──postcss.config.mjs
├──README.md
├──tsconfig.json
├──.dockerignore
└──.gitignore
```


### Key Directories Explained

- **`app/`**: Next.js 15 App Router directory containing all routes and layouts
- **`components/`**: Reusable React components following atomic design principles
- **`context/`**: Context API providers for global state (assignments, user role)
- **`public/`**: Static assets like images

***

## 🏗️ Tech Stack Decisions

### 1. **Next.js App Router (v15)**
Used the latest App Router for file-based routing, server components, and improved performance. Layouts are nested to apply admin-specific UI (sidebar) only where needed.[2][1]

### 2. **Context API for State Management**
Chose Context API over Redux/Zustand for simplicity since the app's state requirements are minimal. The `AssignmentsContext` manages:
- Assignment CRUD operations
- Local storage synchronization

### 3. **LocalStorage for Backend**
Since no backend API was provided, implemented client-side data persistence using `localStorage`. Data is loaded on mount using `useEffect` to avoid SSR hydration errors.

### 4. **Responsive Design with Tailwind CSS**
Used Tailwind's utility-first approach with responsive breakpoints (`sm:`, `md:`, `lg:`) to ensure mobile-first, fluid layouts without writing custom CSS.

### 5. **TypeScript for Type Safety**
All components, contexts, and utilities are strongly typed to catch errors during development and improve IDE autocomplete support.

***

## 🧩 **Component Structure**

### **Core Components**

#### **`ConfirmationModal.tsx`**
A modal used for double-verification to confirm assignment submission.

#### **`AdminAssignmentTable.tsx`**
Displays a table view of assignments for the admin dashboard. Allows the admin to manage assignments effectively.

#### **`AssignmentTable.tsx`**
Displays a table view of assignments for the student dashboard. Helps students track their assignments and due dates.

#### **`Sidebar.tsx`**
Provides the navigation sidebar for the admin panel, offering quick access to different management sections.

#### **`EmptyState.tsx`**
Displays an empty state message or graphic when there are no assignments available or other relevant data.

#### **`AdminCreateForm.tsx`**
A form component used by the admin to create new assignments and manage assignment details.

## 📝 Design Decisions Summary

- I just started and kept improving it.
- I planned to make it simple and easy to use.
- maked components then joined them.

***

## 👨‍💻 Author

**Deepak Behara**  
📧 Email: beharadeepak6@gmail.com  
💼 LinkedIn: [Deepak Behara](https://www.linkedin.com/in/deepakbehara/)  
🌐 Portfolio: [My Portfolio](https://portfolio-website-five-tau-99.vercel.app/)  
🐙 GitHub: [@Deepaksb7](https://github.com/Deepaksb7)

***



