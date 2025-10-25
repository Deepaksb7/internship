import {  User2 } from "lucide-react";

const Topbar = () => {
    return (
        <header className="flex items-center justify-between px-10 py-3 bg-white dark:bg-background-dark/50 border-b border-[#e7edf3] dark:border-slate-800">
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4 text-[#0d141b] dark:text-white">
                    <div className="w-6 h-6 text-primary">
                        <svg
                            fill="none"
                            viewBox="0 0 48 48"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 6H42L36 24L42 42H6L12 24L6 6Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <h2 className="text-lg font-bold">University of Design</h2>
                </div>
            </div>

            <div className="flex items-center gap-4">

                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border flex items-center justify-center"
                >
                    <User2 />
                </div>
            </div>
        </header>
    );
};

export default Topbar;

