import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-slate-900 border-b border-slate-700">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-white">OpenShelf</h1>
                <nav className="flex gap-8">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/" className="text-gray-300 hover:text-white">Catalog</Link>
                    <Link href="/" className="text-gray-300 hover:text-white">Collections</Link>
                </nav>
                <Link 
                     href="/books/create"
                     className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                >
                   Add a Book
                </Link>
            </div>
        </header>

    )
}