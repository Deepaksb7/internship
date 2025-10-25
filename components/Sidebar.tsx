"use client";
import { LayoutDashboardIcon, User2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const navItems = [
    { name: "Assignments", icon: <LayoutDashboardIcon />, path: "/AdminPage" },
    { name: "Students", icon: <User2 />, path: "/AdminPage/Student" },
  ];

  return (
    <div className="flex">
      <aside
        className={`w-64 bg-white p-4 shrink-0 border-r border-[#e7edf3] flex flex-col gap-4 h-screen fixed md:relative transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {isSidebarOpen && (
                <div className="absolute top-4 right-4 md:hidden">
                    <button onClick={() => setIsSidebarOpen(false)} className="text-2xl">
                        <X />
                    </button>
                </div>
            )}
        <div className="flex items-center gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border flex items-center justify-center">
            <User2 />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#0d141b] dark:text-white text-base font-medium">
              Deepak Behara
            </h1>
            <p className="text-[#4c739a] dark:text-slate-400 text-sm">Professor</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-primary/10 dark:hover:bg-primary/20"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <p className="text-sm font-medium">{item.name}</p>
              </Link>
            );
          })}
        </nav>
      </aside>

      <span className="flex-1">
        <div className="md:hidden p-4 bg-white">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-xl">
            <Menu />
          </button>
        </div>

      </span>
    </div>
  );
};

export default Sidebar;
