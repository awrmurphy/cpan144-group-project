import { motion } from "framer-motion";

export default function Home() {
  const features = [
    { title: "Green Energy Tiles", desc: "Explore different types of green energy." },
    { title: "Journal", desc: "Log your green energy behaviours and track progress." },
    { title: "Resources", desc: "Learn tips and initiatives to live sustainably." },
  ];

  const developers = ["Attah Attah", "Anthony Murphy", "Adebisi Oyewole", "Hiryti Mebrahtu", "Turner Cortese"];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 12 }}
        className="container mx-auto px-4 py-8"
      >
        {/* Welcome Section */}
        <section className="text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Welcome to Green Energy Tracker
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            This site helps you explore green energy options, log your actions, and learn sustainable habits.
          </p>
        </section>

        {/* Features Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-slate-800 mb-6">
            Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((f, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-bold text-xl text-emerald-700 mb-2">
                  {f.title}
                </h3>
                <p className="text-base text-slate-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Developers Section */}
        <section className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 max-w-md mx-auto shadow">
            <h2 className="text-xl font-semibold text-slate-800 mb-3">
              Developers
            </h2>
            <ul className="text-sm text-slate-600 space-y-1">
              {developers.map((dev, index) => (
                <li key={index}>{dev}</li>
              ))}
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
