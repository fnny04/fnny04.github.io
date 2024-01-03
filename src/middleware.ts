import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const auth = req.nextUrl.clone();
  auth.pathname = "/auth/login";
  const afterAuth = req.nextUrl.clone();
  afterAuth.pathname = "/dashboard";

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (!session) return NextResponse.redirect(auth);
  }

  if (req.nextUrl.pathname.startsWith("/auth")) {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    if (session) return NextResponse.redirect(afterAuth);
  }
}
