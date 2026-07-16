import { connectDB } from "@/lib/db";
import { BookSchema } from "@/lib/validators";
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



export async function PUT(request:Request, {params}:{params:Promise<{id:string}>}){

    try{
        await connectDB()

        const {id} =await params

        const body=await request.json()
        const result=BookSchema.safeParse(body)

        if(!result.success){
            return NextResponse.json(
                {
                  message: "Erreur de validation",
                  errors: result.error.flatten().fieldErrors,

                },
                {
                    status:400
                }

            )
        }

        const updatedBook=await Book.findByIdAndUpdate(
            id,
            result.data,
            {
                new:true,
                runValidators:true,
            }
        )

        if(!updatedBook){
            return NextResponse.json(
                { message: "Livre introuvable" },
                { status: 404 }

            )
        }
        return NextResponse.json(updatedBook,{status:200})
    }catch(error){
        console.error(error);

        return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );

    }

}


export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return NextResponse.json(
        { message: "Livre introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Livre supprimé avec succès" },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}