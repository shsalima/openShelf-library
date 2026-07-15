import { connectDB } from "@/lib/db";
import Book from "@/models/Book";
import {  NextResponse } from "next/server";

export async function GET() {
  try {
    // console.log("trigger");

    await connectDB();
    const books=await Book.find()
    return NextResponse.json(books,{status:200});
  } catch(error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Erreur serveur ",
        error
      },
      { status: 500 },
    );
  }
}
