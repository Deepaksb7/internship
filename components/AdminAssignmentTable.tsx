// components/AssignmentTable.tsx
import React from "react";

interface Assignment {
  title: string;
  course: string;
  dueDate: string;
  score: number;
  maxScore: number;
  late?: boolean;
  actionLabel: string;
  actionLink: string;
}

const assignments: Assignment[] = [
  {
    title: "History Essay - The Roman Empire",
    course: "HIST 101",
    dueDate: "Oct 26, 2024 at 11:59 PM",
    score: 83,
    maxScore: 100,
    actionLabel: "View Submissions",
    actionLink: "#",
  },
  {
    title: "Calculus Problem Set 3",
    course: "MATH 203",
    dueDate: "Oct 28, 2024 at 5:00 PM",
    score: 95,
    maxScore: 100,
    actionLabel: "Grade",
    actionLink: "#",
  },
  {
    title: "Literary Analysis Paper",
    course: "ENGL 102",
    dueDate: "Nov 02, 2024 at 11:59 PM",
    score: 100,
    maxScore: 100,
    actionLabel: "View Submissions",
    actionLink: "#",
  },
  {
    title: "Physics Lab Report",
    course: "PHYS 101",
    dueDate: "Oct 20, 2024 at 11:59 PM",
    score: 45,
    maxScore: 100,
    late: true,
    actionLabel: "View Submissions",
    actionLink: "#",
  },
];

const AdminAssignmentTable: React.FC = () => {
  return (
    <div className="mt-4 container">
      <div className="overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-background-dark/50">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-900">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Assignment Title
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Due Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Submissions
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#cfdbe7] dark:divide-slate-800">
            {assignments.map((assignment, index) => {
              const percentage = (assignment.score / assignment.maxScore) * 100;
              const progressColor = percentage >= 70 ? "#7ED321" : "#D0021B";

              return (
                <tr
                  key={index}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {assignment.title}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-slate-400">
                      {assignment.course}
                    </div>
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm ${
                      assignment.late
                        ? "text-yellow-500"
                        : "text-gray-500 dark:text-slate-400"
                    }`}
                  >
                    {assignment.dueDate} {assignment.late ? "(Late)" : ""}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-28 bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full"
                          style={{ width: `${percentage}%`, backgroundColor: progressColor }}
                        ></div>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {assignment.score}/{assignment.maxScore}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a
                      className="text-primary hover:text-primary/80"
                      href={assignment.actionLink}
                    >
                      {assignment.actionLabel}
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAssignmentTable;
