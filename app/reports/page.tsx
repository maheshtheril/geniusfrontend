import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { getSession } from "@/lib/auth";

export default async function ReportsPage(){
  const session = await getSession();
  if(!session) return null;

  return (
    <div className="flex">
      <Sidebar role={session.role} />
      <div className="flex-1">
        <Topbar tenant={session.tenantId} company={session.companyId} role={session.role} />
        <main className="p-6">
          <h1 className="text-xl font-semibold mb-4">Reports</h1>
          <p className="opacity-80">Add charts and exports here.</p>
        </main>
      </div>
    </div>
  );
}
