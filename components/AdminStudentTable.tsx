"use client";

import { Assignments } from "@/types/assignment";

const AssignmentsTable = ({ assignments }: { assignments: Assignments[] }) => {
  return (
    <div className="space-y-8">
      {assignments.map((assignment) => {
        const submittedStudents = assignment.submissions.filter((s) => s.submitted);
        const totalStudents = assignment.submissions.length;
        const completionRate =
          totalStudents > 0 ? (submittedStudents.length / totalStudents) * 100 : 0;

        return (
          <div
            key={assignment.title}
            className="overflow-hidden rounded-xl border border-gray-300 dark:border-slate-800 bg-white dark:bg-background-dark/50"
          >
       
            <div className="px-6 py-4 border-b border-gray-200 dark:border-slate-700">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                    {assignment.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {assignment.course}
                  </p>
                </div>
                <p className="text-sm text-gray-500 dark:text-slate-400">
                  {submittedStudents.length} / {totalStudents} Submitted
                </p>
              </div>

 
              <div className="mt-3 h-2 w-full bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-primary transition-all duration-500"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
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
                    Progress
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-800">
                {assignment.submissions.map((s) => {

                  let progress = 0;
                  if (s.submitted && s.grade && s.grade.includes("/")) {
                    const [score, max] = s.grade.split("/").map(Number);
                    if (!isNaN(score) && !isNaN(max)) {
                      progress = (score / max) * 100;
                    }
                  }

                  return (
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
                          <span className="text-red-600 dark:text-red-400">
                            Not Submitted
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-slate-400">
                        {s.grade}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap w-40">
                        <div className="h-2 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-2 transition-all duration-500 ${
                              s.submitted
                                ? progress >= 90
                                  ? "bg-green-500"
                                  : progress >= 70
                                  ? "bg-yellow-400"
                                  : "bg-orange-400"
                                : "bg-gray-400"
                            }`}
                            style={{ width: `${s.submitted ? progress : 0}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-slate-400 ml-1">
                          {s.submitted ? `${Math.round(progress)}%` : "0%"}
                        </span>
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
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default AssignmentsTable;
