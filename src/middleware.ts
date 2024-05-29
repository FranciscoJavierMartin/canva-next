import { NextRequest, NextResponse } from 'next/server';
import { authRoutes, publicRoutes } from './lib/routes';
import { JWT } from './lib/constants';

export function middleware(request: NextRequest) {
  let response: NextResponse;
  const { nextUrl } = request;

  const isPublic = publicRoutes.some(
    (route) => route.match(nextUrl.pathname)?.length,
  );
  const isAuthRoute = authRoutes.some(
    (route) => route.match(nextUrl.pathname)?.length,
  );
  const isLoggedIn: boolean = !!request.cookies.get(JWT)?.value;

  console.log({ cookie: request.cookies.get(JWT), isPublic, isAuthRoute });

  if (isPublic) {
    response = NextResponse.next();
  } else if (isAuthRoute) {
    if (isLoggedIn) {
      response = NextResponse.next();
    } else {
      response = NextResponse.redirect(new URL('/home', request.url));
      // response = NextResponse.next();
    }
  } else if (!isPublic && isLoggedIn) {
    response = NextResponse.redirect(new URL('/?show=true&form=login'));
  } else {
    response = NextResponse.next();
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
