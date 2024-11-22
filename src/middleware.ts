import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    logger.info({
        attributes: {
            url: {
                href: req.nextUrl.href,
                pathname: req.nextUrl.pathname,
                host: req.nextUrl.host,
            }
        },
        message: "incoming request"
    });

    return NextResponse.next();
}