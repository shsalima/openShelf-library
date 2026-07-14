import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
    
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold">
            Modern Library Management
          </h1>

          <p className="mt-5 text-slate-400 text-lg leading-8">
            Discover, manage and organize your library with a modern and
            intuitive interface.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition">
              Browse Collection
            </button>

            <Link
              href="/books/create"
              className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium transition"
            >
              Add New Book
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
          <h2 className="text-sm font-semibold text-slate-300 mb-4">
            Find a book
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <SearchBar />
            </div>

            <div className="w-full md:w-60">
              <Filter />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}