import { useState } from "react";

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState("");

  const addEntry = () => {
    if (input.trim() === "") return;
    setEntries([...entries, { text: input, date: new Date().toLocaleString() }]);
    setInput("");
  };

  return (
    <div className="h-screen p-8 bg-emerald-50">
      <h1 className="text-3xl font-bold mb-4 text-slate-900">Journal</h1>
      <p className="mb-6 text-slate-700">
        Log your green energy behaviours here.
      </p>

      {/* Input area */}
      <div className="flex mb-6">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your action..."
          className="flex-1 p-3 rounded-l-xl border border-emerald-300 focus:outline-nonefocus:ring-2 focus:ring-emerald-500 text-slate-900"
        />
        <button
          onClick={addEntry}
          className="px-5 bg-emerald-600 text-white rounded-r-xl hover:bg-emerald-700 transition"
        >
          Add
        </button>
      </div>

      {/* Journal entries */}
      <ul className="space-y-3">
        {entries.map((entry, index) => (
          <li key={index} className="p-5 bg-white rounded-xl shadow-md">
            <p className="text-slate-900">{entry.text}</p>
            <span className="text-sm text-slate-500">{entry.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
