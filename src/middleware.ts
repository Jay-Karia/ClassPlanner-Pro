import { auth } from "@/../auth"

import { publicRoutes, authRoutes, authPrefix, DEFAULT_LOGIN_REDIRECT } from "@/../routes"
 
export default auth((req) => {
  const { nextUrl } = req
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(authPrefix)
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)

    if (isApiAuthRoute)
        return;

    if (isAuthRoute) {
        if (isLoggedIn)
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        return
    }

    if (!isLoggedIn && !isPublicRoute)
        return Response.redirect(new URL("/login", nextUrl))

    return;
})
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}