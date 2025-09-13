import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { getSession } from "@/lib/auth";

export default async function DashboardPage(){
  const session = await getSession();
  if(!session) return null; // guarded by middleware

  return (
    <div className="flex">
      <Sidebar role={session.role} />
      <div className="flex-1">
        <Topbar tenant={session.tenantId} company={session.companyId} role={session.role} />
        <main className="p-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 p-4 bg-[var(--panel)]/70">
            <h2 className="font-semibold mb-2">AI Insights</h2>
            <p className="text-sm opacity-80">Hook your assistant or summary here.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4 bg-[var(--panel)]/70">
            <h2 className="font-semibold mb-2">Today&apos;s Follow-ups</h2>
            <p className="text-sm opacity-80">Fetch from /api/leads/followups</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4 bg-[var(--panel)]/70">
            <h2 className="font-semibold mb-2">Notifications</h2>
            <p className="text-sm opacity-80">Real-time via WebSocket</p>
          </div>
        </main>
      </div>
    </div>
  );
}
