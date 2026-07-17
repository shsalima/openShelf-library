"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(
    searchParams.get("search") || ""
  );

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (value.trim()) {
      router.push(`/?search=${value}`);
    } else {
      router.push("/");
    }
  }

  return (
    <form onSubmit={handleSearch} className="relative">

      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        size={18}
      />

      <input
        type="text"
        placeholder="Search books..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-[#162335] border border-slate-700 rounded-lg pl-11 pr-4 py-3 text-white outline-none focus:border-blue-500"
      />

    </form>
  );
}