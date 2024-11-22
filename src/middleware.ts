import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    console.log(JSON.stringify({karas: "losos", sudak: "lin"}))
    return NextResponse.next();
}