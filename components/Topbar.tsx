export default function Topbar({ tenant, company, role }:{ tenant:string; company?:string|null; role:string }){
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[var(--panel)]/60 backdrop-blur px-4 py-3 flex items-center justify-between">
      <div className="font-medium">Tenant: {tenant} {company ? `• Company: ${company}` : ""}</div>
      <div className="text-sm opacity-80">Role: {role}</div>
    </header>
  )
}
