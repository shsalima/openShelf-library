import { connectDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("trigger");

    await connectDB();
    return NextResponse.json({
      message: "MongoDB Connected Successfully ",
    });
  } catch {
    return NextResponse.json(
      {
        message: "Connection Failed ",
      },
      { status: 500 },
    );
  }
}
