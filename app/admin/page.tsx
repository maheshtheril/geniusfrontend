import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { getSession } from "@/lib/auth";

export default async function AdminPage(){
  const session = await getSession();
  if(!session) return null;

  return (
    <div className="flex">
      <Sidebar role={session.role} />
      <div className="flex-1">
        <Topbar tenant={session.tenantId} company={session.companyId} role={session.role} />
        <main className="p-6">
          <h1 className="text-xl font-semibold mb-4">Admin Settings</h1>
          <ul className="space-y-2 text-sm">
            <li>• Menus: fetched from <code>/api/tenant/menus</code></li>
            <li>• Dynamic Forms: Admin-defined fields</li>
            <li>• RBAC: Roles & permissions</li>
            <li>• Billing & Subscriptions</li>
            <li>• Audit Logs</li>
          </ul>
        </main>
      </div>
    </div>
  );
}
