import { NextRequest, NextResponse } from "next/server";

function log(obj: Object, msg: string) {
  console.log({ ...obj, msg });
}

export async function middleware(req: NextRequest) {
  log(
    {
      body: req.body,
      headers: Object.fromEntries(req.headers.entries()),
      cookies: Object.fromEntries(
        req.cookies.getAll().map((c) => [c.name, c.value])
      ),
    },
    `${req.method} ${req.nextUrl.pathname}`
  );

  return NextResponse.next();
}
