import { NextRequest, NextResponse } from 'next/server';

function log(obj: Object, msg: string) {
    console.log({ ...obj, msg });
  }
  

export async function middleware(req: NextRequest) {
  log({ 
    method: req.method, 
    url: req.url, 
    body: req.body, 
    headers: Object.fromEntries(req.headers.entries()), 
    cookies: req.cookies.getAll()
  }, `${req.method} ${req.nextUrl.pathname}`);
  // log({ losos: "karas" }, `${req.method} ${req.nextUrl.pathname}`);

  return NextResponse.next();
}
