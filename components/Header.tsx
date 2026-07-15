import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen size={20} className="text-slate-200" />
          <span className="text-xl font-bold text-slate-100">
            OpenShelf
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className="text-white border-b-2 border-white pb-1"
          >
            Home
          </Link>

          <Link
            href="/"
            className="text-slate-400 hover:text-white transition"
          >
            Catalog
          </Link>

          <Link
            href="/"
            className="text-slate-400 hover:text-white transition"
          >
            Collections
          </Link>
        </nav>

        <Link
          href="/books/create"
          className="bg-slate-200 text-slate-900 px-5 py-2 rounded font-medium hover:bg-white transition"
        >
          Add a Book
        </Link>
      </div>
    </header>
  );
}