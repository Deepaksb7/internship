"use client";
import { LayoutDashboardIcon, SquareDashed, SquarePen, User2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
    { name: "Dashboard", icon: <LayoutDashboardIcon />, path: "/AdminPage" },
    { name: "Assignments", icon: <SquareDashed />, path: "/assignments" },
    { name: "Students", icon: <User2 />, path: "/AdminPage/Student" },
    { name: "Grades", icon: <SquarePen />, path: "/grades" },
  ];
    return (
        <aside className="w-64 bg-white p-4 shrink-0 border-r border-[#e7edf3]  flex flex-col gap-4 h-screen">
            <div className="flex items-center gap-3">
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10 border flex items-center justify-center"
                >
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
          <Link key={item.name} href={item.path}
           
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

            <div className="mt-auto">
                <button className="flex w-full h-10 px-4 bg-primary text-white rounded-lg font-bold">
                    Create New Assignment
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;

