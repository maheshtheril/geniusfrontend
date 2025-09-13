import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { getSession } from "@/lib/auth";

export default async function TenantDashboard({ params }:{ params:{ slug:string }}){
  const session = await getSession();
  if(!session) return null;

  return (
    <div className="flex">
      <Sidebar role={session.role} />
      <div className="flex-1">
        <Topbar tenant={params.slug} company={session.companyId} role={session.role} />
        <main className="p-6">
          <h1 className="text-xl font-semibold">Tenant {params.slug} Dashboard</h1>
          <p className="opacity-80">Scope all fetches by tenant slug.</p>
        </main>
      </div>
    </div>
  );
}
