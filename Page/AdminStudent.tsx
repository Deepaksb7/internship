
import AdminStudentTable from "@/components/AdminStudentTable";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import assignments from "@/data";


export default function AdminStudent() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-6 lg:p-10 bg-background-light dark:bg-background-dark">

          <AdminStudentTable assignments={assignments} />
        </main>
      </div>
    </div>
  );
}


