// middleware.js
import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  try {
    // Token verify karo
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    // Agar route /admin hai aur user ka role 'user' hai → redirect
    if (
      request.nextUrl.pathname.startsWith('/admin') &&
      payload.role !== 'ADMIN'
    ) {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }

    // Else continue
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // only apply to admin paths
};
