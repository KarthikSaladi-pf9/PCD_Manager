import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
