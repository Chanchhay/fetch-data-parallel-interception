import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    // app ng tor dak accessToken knong cookie ban access kert
    const accessToken = request.cookies.get("access-token")?.value;

    if (accessToken) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/dashboard/:path*"],
};
