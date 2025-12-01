import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/:path*",
}

interface MiddlewareRequest extends NextRequest {}
interface MiddlewareResponse extends NextResponse {}

export function middleware(req: MiddlewareRequest): MiddlewareResponse {
    const res: MiddlewareResponse = NextResponse.next();
    res.headers.set(
        "Content-Security-Policy",
        "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapisapis.com https://www.google-analytics.com blob:;"
    );
    return res;
}
