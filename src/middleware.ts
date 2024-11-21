import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    logger.info({
        url: req.nextUrl.href,
        method: req.method,
        headers: req.headers,
    }, req.method);
    return NextResponse.next();
}
