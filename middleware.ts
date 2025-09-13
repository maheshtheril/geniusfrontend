import { NextResponse, NextRequest } from "next/server";

const SESSION_COOKIE_NAME = process.env.SESSION_COOKIE_NAME || "gg_session";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE_NAME)?.value;
  const url = req.nextUrl;

  const isProtected = url.pathname.startsWith("/dashboard") ||
                      url.pathname.startsWith("/crm") ||
                      url.pathname.startsWith("/admin") ||
                      url.pathname.startsWith("/reports");

  if (isProtected && !token) {
    const loginUrl = new URL("/login", url.origin);
    loginUrl.searchParams.set("next", url.pathname);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/crm/:path*", "/admin/:path*", "/reports/:path*", "/tenant/:slug/:path*"]
};
