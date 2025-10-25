"use client";

import { useAssignments } from "@/app/context/AssignmentsContext";
import { useRouter } from "next/navigation";
import {  useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";


interface AssignmentForm {
  title: string;
  course: string;
  dueDate: string;
  time: string;
  allowDrive: boolean;
}

export default function CreateAssignmentPage() {

  const router = useRouter();

  const { addAssignment, } = useAssignments()

  const [form, setForm] = useState<AssignmentForm>({
    title: "",
    course: "",
    dueDate: "",
    time: "",
    allowDrive: false,
  });

  

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        [target.name]: target.checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
  const currentTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const newAssignment = {
      id: uuidv4(),
      ...form,
      time: currentTime,
    };
    addAssignment(newAssignment);
    toast("✅ Assignment created successfully!");
    setForm({
      title: "",
      course: "",
      dueDate: "",
      time: "",
      allowDrive: false,
    });

    router.push("/AdminPage");

  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display px-4 md:px-10 lg:px-20 xl:px-40 py-10">
      <div className="max-w-[960px] mx-auto bg-white dark:bg-background-dark/50 rounded-xl shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h1 className="text-4xl font-black text-[#0d141b] dark:text-white leading-tight tracking-tight">
            Create New Assignment
          </h1>
          <p className="text-[#4c739a] dark:text-slate-400 mt-2">
            Fill in the details to create a new assignment.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
   
          <section>
            <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
              Assignment Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium text-[#0d141b] dark:text-slate-300">
                  Assignment Title
                </p>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="e.g., Midterm Essay"
                  className="form-input h-14 rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white p-[15px] text-base focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  required
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium text-[#0d141b] dark:text-slate-300">
                  Course
                </p>
                <select
                  name="course"
                  value={form.course}
                  onChange={handleChange}
                  required
                  className="form-select h-14 rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white p-[15px] text-base focus:ring-2 focus:ring-primary/50 focus:outline-none"
                >
                  <option value="" disabled>
                    Select a Course
                  </option>
                  <option value="cs101">Computer Science 101</option>
                  <option value="en202">English Literature 202</option>
                  <option value="ma303">Advanced Mathematics 303</option>
                </select>
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium text-[#0d141b] dark:text-slate-300">
                  Due Date
                </p>
                <input
                  type="date"
                  name="dueDate"
                  value={form.dueDate}
                  onChange={handleChange}
                  className="form-input h-14 rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white p-[15px] text-base focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  required
                />
              </label>

              <label className="flex flex-col">
                <p className="pb-2 text-base font-medium text-[#0d141b] dark:text-slate-300">
                  Time
                </p>
                <input
                  type="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="form-input h-14 rounded-lg border border-[#cfdbe7] dark:border-slate-700 bg-background-light dark:bg-background-dark text-[#0d141b] dark:text-white p-[15px] text-base focus:ring-2 focus:ring-primary/50 focus:outline-none"
                  required
                />
              </label>
            </div>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
              Submission Method
            </h2>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <label htmlFor="allowDrive" className="flex flex-col">
                  <span className="text-base font-medium text-[#0d141b] dark:text-slate-300">
                    Allow Google Drive Submissions
                  </span>
                  <span className="text-sm text-[#4c739a] dark:text-slate-500">
                    Students can submit a link to a Google Drive file.
                  </span>
                </label>

                <input
                  type="checkbox"
                  id="allowDrive"
                  name="allowDrive"
                  checked={form.allowDrive}
                  onChange={handleChange}
                  className="h-6 w-6 accent-primary cursor-pointer"
                />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg bg-primary/10 dark:bg-primary/20 text-primary font-semibold hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors"
              >
                <span className="material-symbols-outlined text-lg">link</span>
                Attach Google Drive Link
              </button>
            </div>
          </section>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() =>
                setForm({
                  title: "",
                  course: "",
                  dueDate: "",
                  time: "",
                  allowDrive: false,
                })
              }
              className="px-6 py-3 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Create Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
