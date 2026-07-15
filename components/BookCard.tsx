import Link from "next/link";

export default function BookCard() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-lg">
    
      <div className="h-64 bg-slate-800 flex items-center justify-center">
        <span className="text-slate-500">Book Image</span>
      </div>

   
      <div className="p-4">
        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded mb-3">
          AVAILABLE
        </span>

        <p className="text-sm text-slate-400">
          Fiction • 2020
        </p>

        <h3 className="text-xl font-semibold mt-2">
          The Midnight Library
        </h3>

        <p className="text-slate-400 mt-1">
          Matt Haig
        </p>

        <Link
          href="/books/1"
          className="block text-center bg-slate-700 hover:bg-slate-600 rounded-lg py-2 mt-5"
        >
          Voir détails
        </Link>

        <div className="flex gap-2 mt-3">
          <button className="flex-1 border border-slate-600 rounded-lg py-2 hover:bg-slate-800">
            Modifier
          </button>

          <button className="flex-1 border border-red-500 text-red-400 rounded-lg py-2 hover:bg-red-950">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}