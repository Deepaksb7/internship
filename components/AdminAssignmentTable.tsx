"use client";

import React, { useEffect, useState } from "react";
import { Assignment } from "@/types/assignment";
import { useRouter } from "next/navigation";

interface AdminAssignmentTableProps {
  assignments: Assignment[];
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
}

const AdminAssignmentTable: React.FC<AdminAssignmentTableProps> = ({
  assignments,
  setAssignments,
}) => {
  const router = useRouter();

  // Delete assignment handler
  // const handleDelete = (id: string) => {
  //   const updated = assignments.filter((a) => a.id !== id);
  //   setAssignments(updated);
  //   localStorage.setItem("assignments", JSON.stringify(updated));
  // };
  console.log(assignments,"admin assignment table");
  // setAssignments(assignments);
  const AssignmentFormOpenHandler = () => {
    router.push("/AdminPage/form");
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white text-black">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 font-normal">
            <tr>
              <th className="text-left p-3 w-[35%]">Assignment Title & Course</th>
              <th className="text-left p-3 w-[25%]">Due Date</th>
              <th className="text-left p-3 w-[15%]">Status</th>
              <th className="text-left p-3 w-[25%]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id} className="hover:bg-gray-100">
                <td className="p-3 font-medium">
                  {a.title}
                  <span className="block text-xs text-gray-500">{a.course}</span>
                </td>
                <td className="p-3">{a.dueDate}</td>
                <td className="p-3">
                  <StatusBadge status={a.status} />
                </td>
                <td className="p-3 flex gap-2">
                  <a className="text-primary hover:underline" href="#">
                    View
                  </a>
                  <button
                    className="text-red-600 hover:underline"
                    // onClick={() => handleDelete(a.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
        onClick={AssignmentFormOpenHandler}
      >
        Add Assignment
      </button>
    </>
  );
};

function StatusBadge({ status = "Not Started" }: { status?: string }) {
  const colorMap: Record<string, string> = {
    "Not Started": "bg-gray-100 text-gray-800",
    "In Progress": "bg-yellow-100 text-yellow-800",
    Submitted: "bg-green-100 text-green-800",
    Graded: "bg-blue-100 text-blue-800",
    Overdue: "bg-red-100 text-red-800",
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${colorMap[status]}`}>
      {status}
    </span>
  );
}

export default AdminAssignmentTable;
