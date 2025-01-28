import { NextResponse } from 'next/server';

import { updateSession } from '@/utils/supabase/middleware';

import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  try {
    const { response } = await updateSession(request);

    return response;

    // if (request.nextUrl.pathname.startsWith('/protected') && user.error) {
    //   return NextResponse.redirect(new URL('/sign-in', request.url));
    // }

    // if (request.nextUrl.pathname === '/' && !user.error) {
    //   return NextResponse.redirect(new URL('/protected', request.url));
    // }
  } catch (err) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }

  // protected routes
}

export const config = {
  /*
   * Match all request paths except:
   * - _next/static (static files)
   * - api (API routes)
   * - _next/image (image optimization files)
   * - favicon.ico, sitemap.xml, robots.txt (metadata files)
   * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
   * Feel free to modify this pattern to include more paths.
   */
  matcher: [
    {
      source:
        '/((?!_next/static|api|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
