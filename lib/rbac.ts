export type Role = "Administrator" | "Manager" | "Agent" | "Viewer";

export const roleMenus: Record<Role, Array<{ label: string; href: string }>> = {
  Administrator: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Admin Settings", href: "/admin" },
    { label: "CRM / Leads", href: "/crm/leads" },
    { label: "Companies", href: "/crm/companies" },
    { label: "Contacts", href: "/crm/contacts" },
    { label: "Calls", href: "/crm/calls" },
    { label: "Reports", href: "/reports" }
  ],
  Manager: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "CRM / Leads", href: "/crm/leads" },
    { label: "Reports", href: "/reports" }
  ],
  Agent: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "CRM / Leads", href: "/crm/leads" },
    { label: "Calls", href: "/crm/calls" }
  ],
  Viewer: [{ label: "Dashboard", href: "/dashboard" }]
};
