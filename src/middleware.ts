import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    console.log(req)
    return NextResponse.next();
}
