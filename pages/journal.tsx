import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WeatherTile from "@/components/Weather";

async function getJournalEntries(): Promise<
  Array<{ id: number; text: string; date: string }>
> {
  return [
    {
      id: 1,
      text: "Switched to LED lighting",
      date: new Date().toLocaleString(),
    },
    { id: 2, text: "Used public transport", date: new Date().toLocaleString() },
  ];
}

async function addJournalEntry(entry: {
  text: string;
  date: string;
}): Promise<{ id: number; text: string; date: string }> {
  return { id: Date.now(), ...entry };
}

export default function Journal() {
  const [entries, setEntries] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    getJournalEntries().then((data) => {
      setEntries(data);
      setLoading(false);
    });
  }, []);

  const handleAdd = async () => {
    if (input.trim() === "") return;

    const newEntry = await addJournalEntry({
      text: input,
      date: new Date().toLocaleString(),
    });

    setEntries([...entries, newEntry]);
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 12,
      }}
      className="container mx-auto px-4 py-8"
    >
      {/* Header */}
      <section className="text-center mb-8">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">Journal</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Log your green energy behaviours and track your progress over time.
        </p>
      </section>

      {/* Input */}
      <section className="max-w-3xl mx-auto mb-10">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your action..."
            className="flex-1 p-3 rounded-l-xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 bg-white"
          />
          <button
            onClick={handleAdd}
            className="px-6 bg-emerald-600 text-white rounded-r-xl hover:bg-emerald-700 transition"
          >
            Add
          </button>
        </div>
      </section>

      {/* Entries */}
      <section className="max-w-3xl mx-auto">
        {loading ? (
          <p className="text-slate-600">Loading entries...</p>
        ) : entries.length === 0 ? (
          <p className="text-slate-600">No entries yet.</p>
        ) : (
          <ul className="space-y-4">
            {entries.map((entry) => (
              <li key={entry.id} className="p-5 bg-white rounded-xl shadow-md">
                <p className="text-slate-900 text-base mb-1">{entry.text}</p>
                <span className="text-sm text-slate-500">{entry.date}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <WeatherTile />
    </motion.div>
  );
}
