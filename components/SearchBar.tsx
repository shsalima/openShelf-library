export default function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search by title, author or ISBN..."
      className="w-full h-12 rounded-lg bg-slate-800 border border-slate-700 px-4 text-white outline-none focus:border-blue-500"
    />
  );
}