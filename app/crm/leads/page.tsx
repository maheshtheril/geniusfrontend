import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { getSession } from "@/lib/auth";

async function getLeads(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/crm/leads?limit=10`, { cache: "no-store", credentials: "include" as any });
  // In dev, the proxy handles credentials; in prod ensure same-site cookies.
  if(!res.ok) return [];
  return res.json();
}

export default async function LeadsPage(){
  const session = await getSession();
  if(!session) return null;

  const leads = await getLeads();

  return (
    <div className="flex">
      <Sidebar role={session.role} />
      <div className="flex-1">
        <Topbar tenant={session.tenantId} company={session.companyId} role={session.role} />
        <main className="p-6">
          <h1 className="text-xl font-semibold mb-4">Leads</h1>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {leads.map((l:any) => (
              <div key={l.id} className="rounded-2xl border border-white/10 p-4 bg-[var(--panel)]/70">
                <div className="font-medium">{l.title || l.name || "Untitled Lead"}</div>
                <div className="text-sm opacity-80">Status: {l.status || "new"}</div>
                <div className="text-xs opacity-60 mt-1">Next follow-up: {l.next_follow_up || "—"}</div>
              </div>
            ))}
            {!leads.length && <div className="opacity-60">No leads yet.</div>}
          </div>
        </main>
      </div>
    </div>
  );
}
