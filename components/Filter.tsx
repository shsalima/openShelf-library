"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "All";

  function handleChange(value: string) {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    if (value !== "All") {
      params.set("status", value);
    }

    router.push(`/?${params.toString()}`);
  }

  return (
    <select
      value={status}
      onChange={(e) => handleChange(e.target.value)}
      className="w-full h-12 rounded-lg bg-slate-800 border border-slate-700 px-4 text-white outline-none focus:border-blue-500"
    >
      <option value="All">All Books</option>
      <option value="Available">Available</option>
      <option value="Borrowed">Borrowed</option>
    </select>
  );
}