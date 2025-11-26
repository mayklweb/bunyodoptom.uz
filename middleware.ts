import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest): NextResponse {
    const res: NextResponse = NextResponse.next();

    res.headers.set(
        "Content-Security-Policy",
        `
            script-src 'self' 'unsafe-inline' blob: https://my.click.uz https://click.uz https://www.googletagmanager.com https://maps.googleapis.com https://www.google-analytics.com;
            script-src-elem 'self' 'unsafe-inline' blob: https://my.click.uz https://click.uz https://www.googletagmanager.com https://maps.googleapis.com https://www.google-analytics.com;
            object-src 'none';
            base-uri 'self';
        `.replace(/\s{2,}/g, " ")
    );

    return res;
}

export interface MiddlewareConfig {
    matcher: string;
}

export const config: MiddlewareConfig = {
    matcher: "/:path*",
};
