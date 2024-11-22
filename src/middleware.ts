import { NextRequest, NextResponse } from 'next/server';

function log(obj: Object, msg: string) {
    console.log({ ...obj, msg });
  }
  

export async function middleware(req: NextRequest) {
    log({ losos: 'karas' }, 'request');


  return NextResponse.next();
}
