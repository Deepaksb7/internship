"use client";
import { useState } from "react";

const CreateAssignmentPage = () => {
  const [title, setTitle] = useState("");
  const [course, setCourse] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [time, setTime] = useState("");
  const [instructions, setInstructions] = useState("");
  const [allowGoogleDrive, setAllowGoogleDrive] = useState(false);

  const handleSubmit = () => {
    const assignment = {
      title,
      course,
      dueDate,
      time,
      instructions,
      allowGoogleDrive,
    };
    console.log("Assignment Created:", assignment);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-[960px] bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-black text-[#0d141b] dark:text-white mb-2">
            Create New Assignment
          </h1>
          <p className="text-base text-[#4c739a] dark:text-slate-400">
            Fill in the details to create a new assignment.
          </p>
        </div>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
            Assignment Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <label className="flex flex-col">
              <span className="text-base font-medium text-[#0d141b] dark:text-slate-300 pb-2">
                Assignment Title
              </span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Midterm Essay"
                className="form-input rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white h-14 p-4 placeholder:text-[#4c739a] dark:placeholder-slate-500 focus:outline-0 focus:ring-2 focus:ring-primary/50"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-base font-medium text-[#0d141b] dark:text-slate-300 pb-2">
                Course
              </span>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="form-select rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white h-14 p-4 placeholder:text-[#4c739a] dark:placeholder-slate-500 focus:outline-0 focus:ring-2 focus:ring-primary/50 appearance-none bg-no-repeat bg-right"
                
              >
                <option value="">Select a Course</option>
                <option value="cs101">Computer Science 101</option>
                <option value="en202">English Literature 202</option>
                <option value="ma303">Advanced Mathematics 303</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-base font-medium text-[#0d141b] dark:text-slate-300 pb-2">
                Due Date
              </span>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-input rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white h-14 p-4 focus:outline-0 focus:ring-2 focus:ring-primary/50"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-base font-medium text-[#0d141b] dark:text-slate-300 pb-2">
                Time
              </span>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="form-input rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white h-14 p-4 focus:outline-0 focus:ring-2 focus:ring-primary/50"
              />
            </label>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
            Instructions
          </h2>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Provide detailed instructions for the assignment..."
            className="w-full min-h-[160px] resize-y rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white p-4 focus:outline-0 focus:ring-2 focus:ring-primary/50 placeholder:text-[#4c739a] dark:placeholder-slate-500"
          />
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
            Submission Method
          </h2>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-base font-medium text-[#0d141b] dark:text-slate-300">
                Allow Google Drive Submissions
              </p>
              <p className="text-sm text-[#4c739a] dark:text-slate-500">
                Students can submit a link to a Google Drive file.
              </p>
            </div>
            <input
              type="checkbox"
              checked={allowGoogleDrive}
              onChange={() => setAllowGoogleDrive(!allowGoogleDrive)}
              className="w-6 h-6 rounded border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-300 cursor-pointer checked:bg-primary"
            />
          </div>

          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-semibold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors mb-6">
            <span className="material-symbols-outlined text-lg">link</span>
            Attach Google Drive Link
          </button>
        </section>

        <div className="flex justify-end gap-4">
          <button className="px-6 py-3 rounded-lg text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 font-semibold transition-colors">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-3 rounded-lg text-white bg-primary hover:bg-primary/90 font-semibold transition-colors"
          >
            Create Assignment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAssignmentPage;
