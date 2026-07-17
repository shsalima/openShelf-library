import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import BookCard from "@/components/BookCard";
import { getBooks } from "@/services/book.service";

interface HomeProps {
  searchParams: Promise<{
    search?: string;
     status?: string;
  }>;
}

export default async function Home({
  searchParams,
}: HomeProps) {
const { search = "", status = "All" } = await searchParams;

const books = await getBooks(search, status);
 

  return (
    <main className="min-h-screen bg-[#071321] text-white">


      <section className="max-w-7xl mx-auto px-6 pt-12">

        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-slate-200">
            Modern Library Management
          </h1>

          <p className="mt-4 text-lg text-slate-400 leading-8">
            Organize your literary world with ease. Explore our curated
            collection, manage your borrowings, and keep track of your reading
            progress in one focused environment.
          </p>
        </div>

      </section>

     
      <section className="max-w-7xl mx-auto px-6 mt-10">

        <div className="bg-[#0D1B2A] border border-slate-700 rounded-lg p-6">

          <div className="flex flex-col lg:flex-row justify-between gap-6">

            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-3">
                Find a book
              </h3>

              <SearchBar />
            </div>

            <div className="w-full lg:w-52">
              <h3 className="text-sm font-semibold mb-3">
                Availability
              </h3>

              <Filter />
            </div>

          </div>

        </div>

      </section>
      <section className="max-w-7xl mx-auto px-6 py-10">

        {books.length === 0 ? (
          <div className="bg-[#0D1B2A] border border-slate-700 rounded-lg p-10 text-center">

            <h2 className="text-2xl font-semibold">
              No books available
            </h2>

            <p className="text-slate-400 mt-3">
              Add your first book to start your collection.
            </p>

            <Link
              href="/books/create"
              className="inline-block mt-6 bg-slate-200 text-slate-900 px-6 py-3 rounded hover:bg-white transition"
            >
              Add a Book
            </Link>

          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {books.map((book: any) => (

              <BookCard
                key={book._id}
                _id={book._id}
                title={book.title}
                author={book.author}
                category={book.category}
                publicationYear={book.publicationYear}
                available={book.available}
              />

            ))}

          </div>

        )}

      </section>

    </main>
  );
}