import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row flex-auto justify-center">
      <Link
        href="/"
        className="border-b-emerald-200 bg-emerald-700 p5 transition hover:bg-emerald-400 focus:bg-emerald-400 w-full text-black text-center "
      >
        Home
      </Link>
      <Link
        href="/green"
        className="border-b-emerald-200 bg-emerald-700 p5 transition hover:bg-emerald-400 focus:bg-emerald-400 w-full text-black text-center"
      >
        Green Energy
      </Link>
      <Link
        href="/journal"
        className="border-b-emerald-200 bg-emerald-700 p5 transition hover:bg-emerald-400 focus:bg-emerald-400 w-full text-black text-center"
      >
        Journal
      </Link>
    </div>
  );
}
