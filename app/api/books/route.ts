import { connectDB } from "@/lib/db";
import { BookSchema } from "@/lib/validators";
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


export async function POST(request:Request){
    try{
        await connectDB()
        const body =await request.json()

        const result =BookSchema.safeParse(body)

        if(!result.success){
            return NextResponse.json(
                {
                    message:"Erreur de validation",
                    errors:result.error.flatten().fieldErrors,
                },
                {status:400}
            )
        }
        const book= await Book.create(result.data)
        return NextResponse.json(book,{status:201})
    }catch(error){
        console.error(error)
        return NextResponse.json(
            {message:"Erreur serveur"},
            {status:500}
        )
    }
}
