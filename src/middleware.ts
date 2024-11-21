import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    logger.info(req.nextUrl, "incoming request");

    return NextResponse.next();
}
