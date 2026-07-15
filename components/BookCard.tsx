import Link from "next/link";


interface BookCardProps{
  _id:string;
  title:string;
  author:string;
  category:string;
  publicationYear:number;
  available:boolean
}


export default function BookCard({_id,title,author,category,publicationYear,available}:BookCardProps) {
  return (
    <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="text-gray-400 mt-2">
        Auteur : {author}
      </p>

      <p className="text-gray-400">
        Catégorie : {category}
      </p>

      <p className="text-gray-400">
        Année : {publicationYear}
      </p>

      <span
        className={`inline-block mt-4 px-3 py-1 rounded-full text-sm ${
          available
            ? "bg-green-600"
            : "bg-red-600"
        }`}
      >
        {available ? "Disponible" : "Emprunté"}
      </span>

      <div className="mt-5">
        <Link
          href={`/books/${_id}`}
          className="bg-blue-600 px-4 py-2 rounded-lg"
        >
          Voir détails
        </Link>
      </div>
    </div>
  );
}