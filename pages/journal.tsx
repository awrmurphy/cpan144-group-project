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
    <div className="h-screen p-8 bg-green-50">
      <h1 className="text-3xl font-bold mb-4">Journal</h1>
      <p className="mb-6">
        Log your green energy behaviours here.
      </p>

      {/* Input area */}
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your action..."
          className="flex-1 p-2 rounded-l-xl border border-green-300 focus:outline-none"
        />
        <button
          onClick={addEntry}
          className="px-4 bg-green-600 text-white rounded-r-xl hover:bg-green-700 transition"
        >
          Add
        </button>
      </div>

      {/* Journal entries */}
      <ul className="space-y-2">
        {entries.map((entry, index) => (
          <li key={index} className="p-4 bg-white rounded-xl shadow">
            <p>{entry.text}</p>
            <span className="text-sm text-gray-500">{entry.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
