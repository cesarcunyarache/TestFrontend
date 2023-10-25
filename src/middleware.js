import { NextResponse } from "next/server";

export async function middleware(request) {

  const jwt = request.cookies.get("token");

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const response = await fetch(`http://localhost/api/clienteAuth/verify`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await response.json();
    if (data?.status === "ok") {
      return NextResponse.next();
    } else {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
