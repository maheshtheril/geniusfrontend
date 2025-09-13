"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { roleMenus } from "@/lib/rbac";

export default function Sidebar({ role }: { role: keyof typeof roleMenus }) {
  const pathname = usePathname();
  const items = roleMenus[role] || [];
  return (
    <aside className="w-64 shrink-0 bg-[var(--panel)]/80 border-r border-white/10 h-screen sticky top-0 p-3">
      <div className="text-lg font-semibold mb-4">GeniusGrid</div>
      <nav className="space-y-1">
        {items.map((i) => {
          const active = pathname === i.href || pathname?.startsWith(i.href + "/");
          return (
            <Link
              key={i.href}
              href={i.href}
              className={`block rounded-2xl px-3 py-2 transition hover:bg-white/5 ${active ? "bg-white/10" : ""}`}
            >
              {i.label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-6 text-xs text-[var(--muted)]">
        <p>Role-based menus. Replace with DB-driven tenant menus from /api/tenant/menus.</p>
      </div>
    </aside>
  );
}
