import { connectDB } from "@/lib/db";
import { BookSchema } from "@/lib/validators";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);

    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";

    const query: any = {};

   
    if (search) {
      query.$or = [
        {
          title: new RegExp(search, "i"),
        },
        {
          author: new RegExp(search, "i"),
        },
      ];
    }

   
    if (status === "Available") {
      query.available = true;
    }

    if (status === "Borrowed") {
      query.available = false;
    }

    const books = await Book.find(query);

    return NextResponse.json(books, { status: 200 });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erreur serveur",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const result = BookSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          message: "Erreur de validation",
          errors: result.error.flatten().fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const book = await Book.create(result.data);

    return NextResponse.json(book, {
      status: 201,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Erreur serveur",
      },
      {
        status: 500,
      }
    );
  }
}