import { useState } from "react";

export default function Green() {
  const [selected, setSelected] = useState(null);

  const energyTypes = [
    { name: "Solar", description: "Uses sunlight to generate power" },
    { name: "Wind", description: "Uses wind turbines to generate power" },
    { name: "Hydro", description: "Uses water flow to generate power" },
  ];

  return (
    <div className="p-8 bg-emerald-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">Green Energy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {energyTypes.map((item) => (
          <div
            key={item.name}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer text-slate-900"
            onClick={() => setSelected(item)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white p-8 rounded-xl max-w-md shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-emerald-700 mb-4">{selected.name}</h2>
            <p className="text-slate-700">{selected.description}</p>
            <button
              className="mt-6 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition"
              onClick={() => setSelected(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
