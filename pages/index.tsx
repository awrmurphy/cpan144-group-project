export default function Home() {
  const features = [
    { title: "Green Energy Tiles", desc: "Explore different types of green energy." },
    { title: "Journal", desc: "Log your green energy behaviours and track progress." },
    { title: "Resources", desc: "Learn tips and initiatives to live sustainably." },
  ];

  const developers = ["Attah Attah", "Anthony Murphy", "Adebisi Oyewole", "Hiryti Mebrahtu", "Turner Cortese"];

  return (
    <div className="min-h-screen p-8 pt-6 bg-emerald-50 flex flex-col justify-around">
      {/*Welcome Section */}
      <section>
        <h1 className="text-4xl font-bold mb-4 text-slate-900">Welcome to Green Energy Tracker</h1>
        <p className="mb-6 text-slate-700">
          This site helps you explore green energy options, log your actions, and learn sustainable habits.
        </p>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {features.map((f, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h3 className="font-bold text-emerald-700 mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Developers Section*/}
      <section>
        <h2 className="text-2xl font-semibold mb-2 text-slate-900">Developers</h2>
        <ul className="list-disc list-inside text-slate-700">
          {developers.map((dev, index) => (
            <li key={index}>{dev}</li>
          ))}
        </ul>
      </section>
    </div>
      
  );
}
