import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import crypto from "crypto";

const PORTAL_SESSION_COOKIE = "nm_portal_device";

function randomToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request });

  const existingPortalCookie = request.cookies.get(PORTAL_SESSION_COOKIE)?.value;

  if (!existingPortalCookie) {
    response.cookies.set(PORTAL_SESSION_COOKIE, randomToken(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  await supabase.auth.getUser();

  return response;
}

export const config = {
  matcher: [
    "/login",
    "/create-account",
    "/forgot-password",
    "/reset-password",
    "/premium/:path*",
    "/account",
  ],
};

