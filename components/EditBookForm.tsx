"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateBook } from "@/services/book.service";

interface EditBookFormProps {
  book: any;
}

export default function EditBookForm({
  book,
}: EditBookFormProps) {

    const router = useRouter();
    
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [isbn, setIsbn] = useState(book.isbn);
    const [category, setCategory] = useState(book.category);
    const [publicationYear, setPublicationYear] = useState(
        book.publicationYear
    );
    const [description, setDescription] = useState(
        book.description
    );
    const [available, setAvailable] = useState(book.available);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    setLoading(true);

    await updateBook(book._id, {
      title,
      author,
      isbn,
      category,
      publicationYear,
      description,
      available,
    });

    router.push(`/books/${book._id}`);
    router.refresh();

  } catch (error) {
    console.error(error);
    alert("Erreur lors de la modification.");
  } finally {
    setLoading(false);
  }
};

  return (
    <form  onSubmit={handleSubmit} className="bg-[#122033] border border-[#2A3A4F] rounded-2xl p-10">

      <div className="grid md:grid-cols-2 gap-6">


        <div>

          <label className="block text-sm mb-2">
            Titre du livre
          </label>

          <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

        </div>


        <div>

          <label className="block text-sm mb-2">
            Auteur
          </label>

          <input
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

        </div>


        <div>

          <label className="block text-sm mb-2">
            ISBN-13
          </label>

          <input
            value={isbn}
            onChange={(e)=>setIsbn(e.target.value)}
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

        </div>


        <div>

          <label className="block text-sm mb-2">
            Catégorie
          </label>

          <select
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none"
          >

            <option>Roman</option>
            <option>Science</option>
            <option>Histoire</option>
            <option>Informatique</option>

          </select>

        </div>
        <div className="md:col-span-2">

          <label className="block text-sm mb-2">
            Description
          </label>

          <textarea
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none"
          />

        </div>

        <div>

          <label className="block text-sm mb-2">
            Année de publication
          </label>

          <input
            type="number"
            value={publicationYear}
            onChange={(e) =>
              setPublicationYear(Number(e.target.value))
            }
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

        <div>

          <label className="block text-sm mb-2">
            Statut
          </label>

          <select
            value={available ? "true" : "false"}
            onChange={(e) =>
              setAvailable(e.target.value === "true")
            }
            className="w-full bg-[#243447] border border-[#364A63] rounded-lg px-4 py-3 outline-none"
          >

            <option value="true">
              Disponible
            </option>

            <option value="false">
              Emprunté
            </option>

          </select>

        </div>

      </div>

      <div className="border-t border-[#2A3A4F] mt-10 pt-8 flex justify-end gap-4">

        <button
          type="button"
          onClick={() => router.back()}
          className="px-8 py-3 border border-[#F6C28B] text-[#F6C28B] rounded-lg hover:bg-[#F6C28B] hover:text-black transition"
        >
          Annuler
        </button>

        <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-[#D8E4F5] text-[#1A2230] rounded-lg hover:bg-white font-semibold transition disabled:opacity-50"
            >
            {loading
                ? "Enregistrement..."
                : "Enregistrer les modifications"}
        </button>

      </div>

    </form>
  );
}