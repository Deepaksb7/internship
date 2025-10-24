import { Assignment } from "@/types/assignment";
import { useState } from "react";
import ConfirmSubmission from "./ConfirmSubmission";
import { toast } from "sonner"

interface Props {
  assignment: Assignment;
  onClose: () => void;
}

export default function SubmissionModal({ assignment, onClose }: Props) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);


  const handleConfirm = () => {
    toast("Assignment submitted!");
    setShowConfirm(false);
    onClose();
  };

  const handleCancel = () => {
    toast("Submission cancelled.");
    setShowConfirm(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 text-black"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white dark:bg-background-dark rounded-lg w-full max-w-md overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold">Submit Your Assignment</h3>
          <p className="text-sm text-gray-500">{assignment.title}</p>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Upload File</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-primary file:text-white hover:file:bg-primary/90"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="confirm"
              checked={confirmed}
              onChange={() => setConfirmed(!confirmed)}
              className="h-4 w-4 text-primary border-gray-300 rounded"
            />
            <label htmlFor="confirm" className="text-sm">
              I confirm this is the final version of my assignment.
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3 bg-gray-50 dark:bg-gray-800/50 p-4">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button
            disabled={!confirmed}
            className="px-4 py-2 bg-primary text-white rounded-lg disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            onClick={() => {
              setShowConfirm(true);
            }}
          >
            Confirm
          </button>
        </div>
        {showConfirm && (
          <ConfirmSubmission
            assignmentTitle={assignment.title}
            courseName={assignment.course}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
}

