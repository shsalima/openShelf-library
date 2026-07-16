import { getBook } from "@/services/book.service";
import Link from "next/link";
import {
  ArrowLeft,
  Pencil,
  Trash2,
  Calendar,
  BookOpen,
  Hash,
  CheckCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const book = await getBook(id);

  return (
    <main className="min-h-screen bg-[#081421] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#F6C28B] hover:text-white mb-8 text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back to Catalog
        </Link>

        <div className="bg-[#122033] border border-[#2A3A4F] rounded-2xl p-10">

          <h1 className="text-4xl font-serif">
            {book.title}
          </h1>

          <p className="text-xl text-[#F6C28B] mt-2">
            By {book.author}
          </p>

          <div className="flex flex-wrap gap-3 mt-6">

            <span className="px-4 py-1 rounded-full bg-[#223247] text-sm text-slate-200">
              {book.category}
            </span>

            <span className="px-4 py-1 rounded-full bg-[#223247] text-sm text-slate-200">
              {book.publicationYear}
            </span>

            <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                book.available
                  ? "bg-green-700/20 text-green-400"
                  : "bg-orange-700/20 text-orange-400"
              }`}
            >
              {book.available ? "Available" : "Borrowed"}
            </span>

          </div>

          <div className="border-t border-[#2A3A4F] mt-10 pt-8">

            <h2 className="uppercase tracking-[3px] text-blue-400 text-sm mb-5">
              Description
            </h2>

            <p className="text-slate-300 leading-8">
              {book.description}
            </p>

          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <div className="bg-[#122033] border border-[#2A3A4F] rounded-xl p-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-lg bg-[#1A2A3F] flex items-center justify-center">
              <Hash className="text-[#3B82F6]" size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                ISBN-13
              </p>

              <p className="mt-1 text-white font-medium">
                {book.isbn}
              </p>
            </div>

          </div>

          {/* Year */}
          <div className="bg-[#122033] border border-[#2A3A4F] rounded-xl p-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-lg bg-[#1A2A3F] flex items-center justify-center">
              <Calendar className="text-[#3B82F6]" size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                Published Year
              </p>

              <p className="mt-1 text-white font-medium">
                {book.publicationYear}
              </p>
            </div>

          </div>

          <div className="bg-[#122033] border border-[#2A3A4F] rounded-xl p-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-lg bg-[#1A2A3F] flex items-center justify-center">
              <BookOpen className="text-[#3B82F6]" size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                Library Category
              </p>

              <p className="mt-1 text-white font-medium">
                {book.category}
              </p>
            </div>

          </div>

          <div className="bg-[#122033] border border-[#2A3A4F] rounded-xl p-5 flex items-center gap-4">

            <div className="w-12 h-12 rounded-lg bg-[#1A2A3F] flex items-center justify-center">
              <CheckCircle className="text-[#3B82F6]" size={22} />
            </div>

            <div>
              <p className="text-xs text-slate-400 uppercase tracking-wide">
                Current Status
              </p>

              <p
                className={`mt-1 font-semibold ${
                  book.available
                    ? "text-green-400"
                    : "text-orange-400"
                }`}
              >
                {book.available ? "Available" : "Borrowed"}
              </p>
            </div>

          </div>

        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-8">

          <Link
            href={`/books/edit/${book._id}`}
            className="flex justify-center items-center gap-2 border border-slate-600 py-2 rounded text-yellow-400 hover:bg-slate-800 transition rounded-xl py-3 text-white font-medium"
          >
            <Pencil size={18} />
            Modifier ce livre
          </Link>

          <button
            className="flex justify-center items-center gap-2 border border-slate-600 text-red-400  hover:bg-slate-800 transition rounded-xl py-3 font-medium"
          >
            <Trash2 size={18} />
            Supprimer
          </button>

        </div>

      </div>
    </main>
  );
}