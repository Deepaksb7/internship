"use client";

import { useEffect, useState } from "react";
import { Assignment } from "@/types/assignment";
import Header from "@/components/Header";
import AssignmentTable from "@/components/AssignmentTable";
import EmptyState from "@/components/EmptyState";
import SubmissionModal from "@/components/SubmissionModal";
import { loadAssignments } from "@/utils/Storage";


export default function StudentView() {
   const [assignments, setAssignments] = useState<Assignment[]>([]);

  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);

  useEffect(() => {

    const fetchAssignments = async () => {
      const loadedAssignments = await loadAssignments();
      setAssignments(loadedAssignments);
    };

    fetchAssignments();

    const handleStorage = () => {
      fetchAssignments(); 
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []); 

  return (
    <div className=" min-h-screen bg-background-light text-gray-800">
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

