import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    logger.info('handled request', {
        request: {
            url: req.nextUrl.href,
            method: req.method,
        },
        response: {
            status: 200,
        },
        duration: performance.now(),
    });

    return NextResponse.next();
}
