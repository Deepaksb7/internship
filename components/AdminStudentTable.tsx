"use client";

import { Assignments } from "@/types/assignment";


const AssignmentsTable = ({ assignments }: { assignments: Assignments[] }) => {
  return (
    <div className="space-y-8">
      {assignments.map((assignment) => {
        const submittedStudents = assignment.submissions.filter((s) => s.submitted);

        return (
          <div
            key={assignment.title}
            className="overflow-hidden rounded-xl border border-gray-300 dark:border-slate-800 bg-white dark:bg-background-dark/50"
          >
            <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{assignment.title}</h2>
                <p className="text-sm text-gray-500 dark:text-slate-400">{assignment.course}</p>
              </div>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                {submittedStudents.length} / {assignment.submissions.length} Submitted
              </p>
            </div>

            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-900">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    Student Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    Submission Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    Grade
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                {assignment.submissions.map((s) => (
                  <tr
                    key={s.name}
                    className="hover:bg-gray-50 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {s.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
                      {s.submitted ? (
                        <span className="text-green-600 dark:text-green-400">
                          Submitted on {s.submissionDate}
                        </span>
                      ) : (
                        <span className="text-red-600 dark:text-red-400">Not Submitted</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
                      {s.grade}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      {s.submitted ? (
                        <a
                          href={s.link}
                          className="text-primary hover:text-primary/80"
                        >
                          View Submission
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default AssignmentsTable;
