import BookForm from "@/components/BookForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateBookPage() {
  return (
   <main className="min-h-screen bg-[#081421] text-white">
  <div className="max-w-4xl mx-auto px-6 py-12">

    <Link
      href="/"
      className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-8"
    >
      <ArrowLeft size={18} />
      <span>Back to Home</span>
    </Link>

    <div className="mb-10 text-center">
      <h1 className="text-5xl font-bold">
        Add New Book
      </h1>

      <p className="text-slate-400 mt-3">
        Complete the form below to add a new book to your library.
      </p>
    </div>

    <BookForm />

  </div>
</main>
  );
}