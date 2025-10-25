"use client";

import React from "react";

interface ConfirmSubmissionProps {
    assignmentTitle: string;
    courseName: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmSubmission: React.FC<ConfirmSubmissionProps> = ({
    assignmentTitle,
    courseName,
    onConfirm,
    onCancel,
}) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 font-display">
            <div className="relative flex h-auto w-full max-w-lg flex-col bg-white overflow-hidden rounded-xl shadow-lg ">
                <div className="p-8 flex flex-col items-center gap-6">
                    {/* Icon */}
                    <div className="bg-gray-200 rounded-full p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>

                    {/* Title + Description */}
                    <div className="text-center">
                        <p className="text-2xl font-semibold text-slate-900 leading-tight tracking-tight">
                            Confirm Submission
                        </p>
                        <p className="text-slate-500  mt-2">
                            Are you sure you want to submit this assignment? This action cannot be undone.
                        </p>
                    </div>

                    {/* Assignment Info */}
                    <div className="w-full">
                        <div className="border-t border-slate-200">
                            <div className="py-4 flex justify-between items-center">
                                <p className="text-sm text-slate-500 ">Assignment</p>
                                <p className="text-sm font-semibold text-slate-900 ">
                                    {assignmentTitle}
                                </p>
                            </div>
                            <div className="border-t border-slate-200  py-4 flex justify-between items-center">
                                <p className="text-sm text-slate-500 ">Course</p>
                                <p className="text-sm font-semibold text-slate-900 ">
                                    {courseName}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="w-full flex flex-col gap-3">
                        <button
                            onClick={onConfirm}
                            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-green-500 text-white text-base font-bold leading-normal tracking-[0.015em]"
                        >
                            Confirm &amp; Submit
                        </button>

                        <button
                            onClick={onCancel}
                            className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 text-slate-900 text-base font-bold leading-normal tracking-[0.015em]"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSubmission;
