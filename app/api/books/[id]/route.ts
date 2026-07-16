import { connectDB } from "@/lib/db";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: RouteProps
) {
  try {
    await connectDB();

    const { id } = await params;

    const book = await Book.findById(id);

    if (!book) {
      return NextResponse.json(
        { message: "Livre introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(book);

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}