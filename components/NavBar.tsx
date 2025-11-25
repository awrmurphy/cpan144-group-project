import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md border-b border-slate-200 w-full">
      <div className="flex flex-row justify-center h-12 items-center space-x-8">
        <Link
          href="/"
          className="text-slate-700 hover:text-emerald-600 focus:text-emerald-600 focus:font-semibold focus:border-b-2 focus:border-emerald-500 py-2 px-4 transition-colors duration-200 ease-in-out text-center"
        >
          Home
        </Link>
        <Link
          href="/green"
          className= "text-slate-700 hover:text-emerald-600 focus:text-emerald-600 focus:font-semibold focus:border-b-2 focus:border-emerald-500 py-2 px-4 transition-colors duration-200 ease-in-out text-center"
        >
          Green Energy
        </Link>
        <Link
          href="/journal"
          className="text-slate-700 hover:text-emerald-600 focus:text-emerald-600 focus:font-semibold focus:border-b-2 focus:border-emerald-500 py-2 px-4 transition-colors duration-200 ease-in-out text-center"
        >
          Journal
        </Link>
      </div>
    </nav>
  );
}