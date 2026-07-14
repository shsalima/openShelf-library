import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">
          Modern Library Management
        </h1>
        <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Discover, manage and organize your library with a modern and intuitive interface.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium">
            Browse Collection
          </button>
          <button className="border border-slate-600 hover:bg-slate-800 px-6 py-3 rounded-lg font-medium">
            Add New Book
          </button>

        </div>

      </section>

    </main>
  );
}
