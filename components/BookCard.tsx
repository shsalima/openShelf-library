import Link from "next/link";
import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

interface BookCardProps {
  _id: string;
  title: string;
  author: string;
  category: string;
  publicationYear: number;
  available: boolean;
}

export default function BookCard({
  _id,
  title,
  author,
  category,
  publicationYear,
  available,
}: BookCardProps) {
  return (
    <div className="bg-[#162335] border border-slate-700 rounded-lg shadow-md hover:shadow-xl transition">

  <div className="flex justify-end p-4 pb-0">
    <span
      className={`text-[10px] px-3 py-1 rounded font-semibold uppercase ${
        available
          ? "bg-green-200 text-green-900"
          : "bg-orange-200 text-orange-900"
      }`}
    >
      {available ? "AVAILABLE" : "BORROWED"}
    </span>
  </div>

  <div className="p-4 pt-3">
    <p className="text-xs text-slate-400">
      {category} • {publicationYear}
    </p>

    <h2 className="text-xl mt-2 font-semibold text-white">
      {title}
    </h2>

    <p className="text-slate-400 italic mt-1">
      {author}
    </p>

    <Link
      href={`/books/${_id}`}
      className="block w-full mt-5 text-center bg-slate-200 text-slate-900 py-2 rounded hover:bg-white transition"
    >
      Voir détails
    </Link>

    <div className="grid grid-cols-2 gap-2 mt-3">
      <Link
        href={`/books/edit/${_id}`}
        className="flex items-center justify-center gap-2 border border-slate-600 py-2 rounded text-yellow-400 hover:bg-slate-800 transition"
      >
        <Pencil size={15} />
        Modifier
      </Link>

      <button
        className="flex items-center justify-center gap-2 border border-slate-600 py-2 rounded text-red-400 hover:bg-slate-800 transition"
      >
        <Trash2 size={15} />
        Supprimer
      </button>
    </div>
  </div>

</div>
  );
}