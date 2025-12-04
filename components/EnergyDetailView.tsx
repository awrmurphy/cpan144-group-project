import { motion } from "framer-motion";
import Image from "next/image";
import { EnergyType } from "./EnergyTile";

interface EnergyDetailViewProps {
  energy: EnergyType;
  onClose: () => void;
}

export default function EnergyDetailView({ energy, onClose }: EnergyDetailViewProps) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-64 w-full">
          <Image
            src={energy.image}
            alt={energy.name}
            fill
            className="object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-6 left-6">
            <h2 className="text-4xl font-bold text-white mb-2">{energy.name} Energy</h2>
            <p className="text-emerald-200 text-lg">{energy.description}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {energy.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-emerald-50 rounded-xl">
                <div className="text-2xl font-bold text-emerald-700 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">About {energy.name} Energy</h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              {energy.detailedDescription}
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Supporting Initiatives</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {energy.initiatives.map((initiative, index) => (
                <motion.a
                  key={index}
                  href={initiative.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h4 className="font-semibold text-emerald-700 group-hover:text-emerald-800 mb-2">
                    {initiative.name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                  <div className="mt-2 text-emerald-600 text-sm font-medium">
                    Learn more →
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}