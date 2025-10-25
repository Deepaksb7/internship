"use client";

import AdminAssignmentTable from "@/components/AdminAssignmentTable";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useAssignments } from "@/app/context/AssignmentsContext";
import AdminEmptyState from "@/components/AdminEmptyState";

export default function AdminView() {
  const { assignments, deleteAssignment } = useAssignments();

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 lg:p-10 bg-background-light dark:bg-background-dark">
          <div className="flex items-center justify-center  flex-col mb-8 ">

            <h1 className="text-4xl font-black text-[#0d141b] dark:text-white mb-2">
              Manage Assignments
            </h1>

            <p className="text-base text-[#4c739a] dark:text-slate-400">
              View and manage all assignments.
            </p>

          </div>
        

          {assignments.length > 0 ? (
            <AdminAssignmentTable
              assignments={assignments}
              deleteAssignment={deleteAssignment}
            />
          ) : (
            <AdminEmptyState />
          )}
        </main>
      </div>
    </div>
  );
}
