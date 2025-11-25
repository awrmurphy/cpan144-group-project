export default function Home() {
  const features = [
    { title: "Green Energy Tiles", desc: "Explore different types of green energy." },
    { title: "Journal", desc: "Log your green energy behaviours and track progress." },
    { title: "Resources", desc: "Learn tips and initiatives to live sustainably." },
  ];

  const developers = ["Attah Attah", "Anthony Murphy", "Adebisi Oyewole", "Hiryti Mebrahtu", "Turner Cortese"];

  return (
    <div className="h-screen p-8 bg-green-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to Green Energy Tracker</h1>
      <p className="mb-6 text-gray-700">
        This site helps you explore green energy options, log your actions, and learn sustainable habits.
      </p>

      {/* Features */}
      <h2 className="text-2xl font-semibold mb-2">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {features.map((f, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-xl shadow hover:scale-105 transition transform cursor-pointer"
          >
            <h3 className="font-bold">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Developers */}
      <h2 className="text-2xl font-semibold mb-2">Developers</h2>
      <ul className="list-disc list-inside text-gray-700">
        {developers.map((dev, index) => (
          <li key={index}>{dev}</li>
        ))}
      </ul>
    </div>
  );
}
