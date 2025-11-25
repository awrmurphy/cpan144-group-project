import { useState } from "react";

export default function Green() {
  const [selected, setSelected] = useState(null);

  const energyTypes = [
    { name: "Solar", description: "Uses sunlight to generate power" },
    { name: "Wind", description: "Uses wind turbines to generate power" },
    { name: "Hydro", description: "Uses water flow to generate power" },
  ];

  return (
    <div className="p-8">
      <h1>Green Energy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {energyTypes.map((item) => (
          <div
            key={item.name}
            className="p-6 bg-green-100 rounded-xl cursor-pointer hover:bg-green-200"
            onClick={() => setSelected(item)}
          >
            {item.name}
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white p-8 rounded-xl max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold">{selected.name}</h2>
            <p>{selected.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-xl"
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
