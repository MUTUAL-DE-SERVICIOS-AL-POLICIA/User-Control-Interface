import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("msp")?.value;
  const module = cookieStore.get(`mod_${process.env.ID_MODULE}`)?.value;
  const currentRol = cookieStore.get("currentRol")?.value;

  const roles = (() => {
    try {
      return JSON.parse(module || "{}").roles || [];
    } catch {
      return [];
    }
  })();

  const RolValid = roles.some(
    (rol: { id: number }) => rol.id === Number(currentRol),
  );

  const host = process.env.NEXT_PUBLIC_SERVER_FRONTEND || "";
  const port = process.env.NEXT_PUBLIC_SERVER_FRONTEND_PORT || "";
  const portLogin = process.env.LOGIN_FRONTEND_PORT || "";

  const protocol = request.headers.get("x-forwarded-proto") || "http";
  const url = `${protocol}://${host}:${port}/`;
  const urlLogin = `${protocol}://${host}:${portLogin}/login`;

  try {
    if (!token) return NextResponse.redirect(urlLogin);

    if (!module) return NextResponse.redirect(urlLogin);

    if (!RolValid && currentRol) {
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (e) {
    console.error("Error verificando token en middleware", e);

    return NextResponse.redirect(urlLogin);
  }
};

export const config = {
  matcher: [
    "/((?!_next/|favicon.ico|static/|images/|fonts/|api/|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.webp|.*\\.gif|.*\\.ico).*)",
  ],
};
