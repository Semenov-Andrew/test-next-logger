import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    const requestLogger = logger.child({
        url: {
            href: req.nextUrl.href,
            pathname: req.nextUrl.pathname,
            host: req.nextUrl.host,
        }
    });

    requestLogger.info("incoming request");

    return NextResponse.next();
}