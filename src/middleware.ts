import { NextRequest, NextResponse } from 'next/server';
import logger from './logger';

export async function middleware(req: NextRequest) {
    logger.info("\u001b[32m\u001b[1m✓\u001b[22m\u001b[39m Compiled in 51ms (76 modules)");

    return NextResponse.next();
}
