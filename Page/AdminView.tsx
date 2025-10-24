
import AdminAssignmentTable from "@/components/AdminAssignmentTable";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";


export default function AdminView() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 lg:p-10 bg-background-light dark:bg-background-dark">
          <h1 className="text-4xl font-black text-[#0d141b] dark:text-white">
            Assignments
          </h1>
          <AdminAssignmentTable />
        </main>
      </div>
    </div>
  );
}


