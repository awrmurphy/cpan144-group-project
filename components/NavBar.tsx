import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-md border-b border-slate-200 w-full">
      <div className="flex flex-row justify-center h-12 items-center space-x-8">
        {[
          { href: "/", label: "Home" },
          { href: "/green", label: "Green Energy" },
          { href: "/journal", label: "Journal" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative group text-slate-700 hover:text-emerald-600 py-2 px-2 text-center transition-colors duration-200 ease-in-out"
          >
            <span className="transition-transform duration-200 group-hover:scale-105">
              {item.label}
            </span>
            <span className="pointer-events-none absolute left-0 -bottom-0.5 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>
    </nav>
  );
}