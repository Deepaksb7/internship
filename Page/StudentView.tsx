"use client";

import { useEffect, useState } from "react";
import { Assignment } from "@/types/assignment";
import Header from "@/components/Header";
import AssignmentTable from "@/components/AssignmentTable";
import EmptyState from "@/components/EmptyState";
import SubmissionModal from "@/components/SubmissionModal";


export default function StudentView() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    } else {
      setAssignments([]);
    }
  }, []);


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

