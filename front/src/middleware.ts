import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest) {

    const { pathname, origin } = request.nextUrl;

    console.log(pathname);
    

    if((pathname === "/dashboard" || pathname === "/cart") && !request.cookies.get("userData")?.value) {

        const LoginUrl = new NextURL("/login", origin)
        return NextResponse.redirect(LoginUrl)
    } else {
        return NextResponse.next();
    }
}