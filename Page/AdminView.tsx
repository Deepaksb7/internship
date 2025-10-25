"use client";

import { useState, useEffect } from "react";
import AdminAssignmentTable from "@/components/AdminAssignmentTable";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { Assignment } from "@/types/assignment";

export default function AdminView() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("assignments");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) setAssignments(parsed);
        else setAssignments([]);
      } catch {
        setAssignments([]);
      }
    } else {
      setAssignments([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 lg:p-10 bg-background-light dark:bg-background-dark">
          <h1 className="text-4xl font-black text-[#0d141b] dark:text-white">
            Assignments
          </h1>
          <AdminAssignmentTable
            assignments={assignments}
            setAssignments={setAssignments}
      
          />
        </main>
      </div>
    </div>
  );
}
