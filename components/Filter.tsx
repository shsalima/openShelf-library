export default function Filter() {
  return (
    <select className="w-full h-12 rounded-lg bg-slate-800 border border-slate-700 px-4 text-white outline-none focus:border-blue-500">
      <option>All Books</option>
      <option>Available</option>
      <option>Borrowed</option>
    </select>
  );
}