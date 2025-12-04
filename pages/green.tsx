"use client";

import Link from "next/link";

export default function Green() {
  const energyTypes = [
    { name: "Solar", link: "/solarenergy" },
    { name: "Wind", link: "/windenergy" },
    { name: "Hydro", link: "/hydroenergy" },
  ];

  return (
    <div className="p-8 bg-emerald-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Green Energy</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {energyTypes.map((item) => (
          <Link
            key={item.name}
            href={item.link}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition cursor-pointer text-slate-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
