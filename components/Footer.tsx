import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#142235] border-t border-slate-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">


        <div>
          <h2 className="text-2xl font-serif font-bold text-white">
            OpenShelf
          </h2>

          <p className="text-sm text-slate-400 mt-2">
            © 2024 OpenShelf. All rights reserved.
          </p>
        </div>

    
        <div className="flex items-center gap-8 mt-6 md:mt-0 text-sm text-slate-400">

          <Link
            href="#"
            className="hover:text-white transition"
          >
            Privacy Policy
          </Link>

          <Link
            href="#"
            className="hover:text-white transition"
          >
            Terms of Service
          </Link>

          <Link
            href="#"
            className="hover:text-white transition"
          >
            Contact Library
          </Link>

        </div>

      </div>
    </footer>
  );
}