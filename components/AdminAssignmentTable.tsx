"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Assignment } from "@/types/assignment";
import { Trash2Icon } from "lucide-react"; 

interface AdminAssignmentTableProps {
  assignments: Assignment[];
  deleteAssignment: (id: string) => void;
}

const AdminAssignmentTable: React.FC<AdminAssignmentTableProps> = ({
  assignments,
  deleteAssignment,
}) => {
  const router = useRouter();

  const handleDelete = (id: string) => {
    deleteAssignment(id); 
  };

  const AssignmentFormOpenHandler = () => {
    router.push("/AdminPage/form");
  };

  return (
    <div className="max-w-[960px] mx-auto mt-6 ">

      <div className="flex justify-end mb-4">
        <button
          className="px-6 py-3 rounded-lg text-white bg-primary hover:bg-primary/90 font-semibold transition-colors"
          onClick={AssignmentFormOpenHandler}
        >
          Add Assignment
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white text-black shadow-sm flex md:flex-row flex-col" >
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
                <td className="p-3 flex gap-2 items-center">
                  <a className="text-primary hover:underline" href="#">
                    View
                  </a>
                  <button
                    className="text-red-600 hover:underline p-3 cursor-pointer"
                    onClick={() => handleDelete(a.id)}
                  >
                    <Trash2Icon size={20} className="ml-5"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
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
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium ${colorMap[status]}`}
    >
      {status}
    </span>
  );
}

export default AdminAssignmentTable;
