"use client";

import { useState } from "react";
import { Assignment } from "@/types/assignment";
import Header from "@/components/Header";
import AssignmentTable from "@/components/AssignmentTable";
import EmptyState from "@/components/EmptyState";
import SubmissionModal from "@/components/SubmissionModal";


export default function StudentView() {
  const [assignments] = useState<Assignment[]>([
    {
      id: 1,
      title: "History Essay - The Roman Empire",
      course: "HIST 101",
      dueDate: "Oct 26, 2024 at 11:59 PM",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Calculus Problem Set 3",
      course: "MATH 203",
      dueDate: "Oct 28, 2024 at 5:00 PM",
      status: "Not Started",
    },
    {
      id: 3,
      title: "Literary Analysis Paper",
      course: "ENGL 102",
      dueDate: "Nov 02, 2024 at 11:59 PM",
      status: "Submitted",
    },
    {
      id: 4,
      title: "Physics Lab Report",
      course: "PHYS 101",
      dueDate: "Oct 20, 2024 at 11:59 PM",
      status: "Overdue",
    },
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 ">
      <Header />

      <main className="max-w-6xl mx-auto p-6 text-black my-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold ">My Assignments</h1>
          <p className="text-gray-500">Welcome back, student!</p>
        </div>

        {assignments.length > 0 ? (
          <AssignmentTable
            assignments={assignments}
            onSubmitClick={(a) => setSelectedAssignment(a)}
          />
        ) : (
          <EmptyState />
        )}
      </main>

      {selectedAssignment && (
        <SubmissionModal
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
        />
      )}
    </div>
  );
}

