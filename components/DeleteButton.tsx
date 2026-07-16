"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteBook } from "@/services/book.service";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      "Voulez-vous vraiment supprimer ce livre ?"
    );

    if (!confirmed) return;

    try {
      await deleteBook(id);

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Erreur lors de la suppression.");
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="flex justify-center items-center gap-2 border border-slate-600 text-red-400 hover:bg-slate-800 transition rounded-xl py-3 font-medium"
    >
      <Trash2 size={18} />
      Supprimer
    </button>
  );
}