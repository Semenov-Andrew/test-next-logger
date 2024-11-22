import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    logger.info(req.nextUrl, "losos", {karas: 322, sudak: 228})
    console.log({losos: "karas"})

    return NextResponse.next();
}
