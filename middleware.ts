import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const TOKEN_KEY = "kbs_admin_token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/admin/dashboard")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(TOKEN_KEY)?.value ||
    (typeof request.headers.get("cookie") === "string"
      ? parseCookie(request.headers.get("cookie") || "", TOKEN_KEY)
      : null);

  if (!token) {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    url.searchParams.set("redirect", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

function parseCookie(cookie: string, name: string): string | null {
  const match = cookie.match(new RegExp("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"));
  return match ? match[2] : null;
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
