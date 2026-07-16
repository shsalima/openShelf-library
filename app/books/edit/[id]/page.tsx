import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBook } from "@/services/book.service";
import EditBookForm from "@/components/EditBookForm";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditBookPage({ params }: PageProps) {
  const { id } = await params;

  const book = await getBook(id);

  return (
    <main className="min-h-screen bg-[#081421] text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

       
        <Link
          href={`/books/${book._id}`}
          className="inline-flex items-center gap-2 text-[#F6C28B] hover:text-white mb-8"
        >
          <ArrowLeft size={18} />
          Retour aux détails
        </Link>

       
        <div className="mb-10">

          <h1 className="text-5xl font-serif">
            Modifier {book.title}
          </h1>

          <p className="text-slate-400 mt-3">
            Mettez à jour les informations du livre.
          </p>

        </div>

        
        <EditBookForm book={book} />

      </div>

    </main>
  );
}