import { cookies } from "next/headers";

export type Session = {
  userId: string;
  tenantId: string;
  companyId?: string | null;
  role: "Administrator" | "Manager" | "Agent" | "Viewer";
};

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || "gg_session";

/**
 * getSession: reads a signed session token cookie (issued by your backend),
 * calls your backend session introspection endpoint, and returns minimal claims.
 * Here we stub with cookie presence to keep the starter portable.
 */
export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;

  // In production: call your backend /api/auth/session to verify token
  // const res = await fetch(`${process.env.BACKEND_URL}/api/auth/session`, { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" });
  // if (!res.ok) return null;
  // return await res.json();

  // Stub (replace with real validation above)
  return {
    userId: "demo-user",
    tenantId: "demo-tenant",
    companyId: "af3b367a-d61c-4748-9536-3fe94fe2d247",
    role: "Administrator"
  };
}
