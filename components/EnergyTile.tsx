import { motion } from "framer-motion";
import Image from "next/image";

interface EnergyType {
  id: string;
  name: string;
  description: string;
  blurb: string;
  image: string;
  detailedDescription: string;
  initiatives: Array<{
    name: string;
    url: string;
    description: string;
  }>;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

interface EnergyTileProps {
  energy: EnergyType;
  onSelect: (energy: EnergyType) => void;
  isSelected: boolean;
}

export default function EnergyTile({ energy, onSelect, isSelected }: EnergyTileProps) {
  return (
    <motion.div
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
        isSelected ? 'ring-4 ring-emerald-400 shadow-2xl' : 'hover:shadow-xl hover:scale-105'
      }`}
      onClick={() => onSelect(energy)}
      whileHover={{ scale: isSelected ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-48 w-full">
        <Image
          src={energy.image}
          alt={energy.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white mb-1">{energy.name}</h3>
          <p className="text-emerald-200 text-sm">{energy.description}</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          {energy.blurb}
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          {energy.stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="text-center p-2 bg-emerald-50 rounded-lg">
              <div className="text-lg font-bold text-emerald-700">{stat.value}</div>
              <div className="text-xs text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export type { EnergyType };