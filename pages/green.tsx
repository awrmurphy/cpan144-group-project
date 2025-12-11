import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnergyTile, { EnergyType } from "../components/EnergyTile";
import EnergyDetailView from "../components/EnergyDetailView";

export default function Green() {
  const [selectedEnergy, setSelectedEnergy] = useState<EnergyType | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detailed'>('grid');

  const energyTypes: EnergyType[] = [
    {
      id: "solar",
      name: "Solar",
      description: "Harnesses sunlight to generate clean electricity",
      blurb: "Solar energy is the most abundant energy resource on Earth. It can be captured and converted into electricity through photovoltaic panels or concentrated solar power systems.",
      image: "/solar.png",
      detailedDescription:
        "Solar energy works by converting sunlight directly into electricity using photovoltaic (PV) cells. These cells are made of semiconductor materials that generate electrical current when exposed to light. Solar power is renewable, sustainable, and produces no greenhouse gas emissions during operation. It's becoming increasingly cost-effective and is one of the fastest-growing energy sources worldwide.",
      initiatives: [
        {
          name: "Solar Power World Initiative",
          url: "https://www.solarpowerworldonline.com/",
          description: "Leading publication covering solar energy industry news, technology advances, and market trends."
        },
        {
          name: "International Solar Alliance",
          url: "https://isolaralliance.org/",
          description: "Global coalition of 100+ countries working together to increase solar energy adoption and reduce costs."
        },
        {
          name: "Solar Energy Industries Association",
          url: "https://www.seia.org/",
          description: "Trade association advocating for solar energy policies and promoting solar market growth in the United States."
        },
        {
          name: "Global Solar Council",
          url: "https://www.globalsolarcouncil.org/",
          description: "International organization representing the solar industry to accelerate solar energy deployment worldwide."
        }
      ],
      stats: [
        { label: "Global Capacity", value: "1,177 GW" },
        { label: "Annual Growth", value: "22%" },
        { label: "Cost Reduction", value: "90%" },
        { label: "Jobs Created", value: "4.9M" }
      ]
    },

    {
      id: "wind",
      name: "Wind",
      description: "Converts wind movement into renewable electricity",
      blurb: "Wind energy captures the kinetic energy of moving air through wind turbines. It's one of the most cost-effective renewable energy sources and can be deployed both onshore and offshore.",
      image: "/wind.png",
      detailedDescription:
        "Wind energy is generated when moving air turns the blades of a wind turbine, which spins a generator to produce electricity. Modern wind turbines are highly efficient and can operate in various wind conditions. Wind power is completely renewable, produces no air pollution, and has one of the lowest carbon footprints of any energy source. It's particularly effective in areas with consistent wind patterns.",
      initiatives: [
        {
          name: "Global Wind Energy Council",
          url: "https://gwec.net/",
          description: "International trade association promoting wind power development and representing the global wind industry."
        },
        {
          name: "American Wind Energy Association",
          url: "https://www.awea.org/",
          description: "National trade association for the U.S. wind energy industry, advocating for policies supporting wind power."
        },
        {
          name: "Wind Europe",
          url: "https://windeurope.org/",
          description: "Voice of the wind industry, actively promoting wind power in Europe and advocating for supportive policies."
        },
        {
          name: "Offshore Wind Research Consortium",
          url: "https://www.energy.gov/eere/wind/offshore-wind-research-and-development",
          description: "Research initiative focused on advancing offshore wind technology and reducing deployment costs."
        }
      ],
      stats: [
        { label: "Global Capacity", value: "906 GW" },
        { label: "Annual Growth", value: "77 GW" },
        { label: "Capacity Factor", value: "35-45%" },
        { label: "Jobs Worldwide", value: "1.3M" }
      ]
    },

    {
      id: "hydro",
      name: "Hydroelectric",
      description: "Generates power from flowing water sources",
      blurb: "Hydroelectric power uses the energy of flowing water to generate electricity. It's one of the oldest and most reliable renewable energy sources, providing consistent power output.",
      image: "/water.png",
      detailedDescription:
        "Hydroelectric power plants generate electricity by using the force of flowing water to turn turbines connected to generators. This can be achieved through dams that create reservoirs, run-of-river systems, or pumped storage facilities. Hydroelectric power is highly reliable, can respond quickly to electricity demand changes, and often provides additional benefits like flood control and water supply. It's the world's largest source of renewable electricity.",
      initiatives: [
        {
          name: "International Hydropower Association",
          url: "https://www.hydropower.org/",
          description: "Global organization advancing sustainable hydropower development and promoting best practices worldwide."
        },
        {
          name: "Hydropower Research Foundation",
          url: "https://hydrofoundation.org/",
          description: "Non-profit organization funding research to advance hydropower technology and environmental compatibility."
        },
        {
          name: "World Small Hydropower Development Organization",
          url: "https://www.unido.org/our-focus/safeguarding-environment/clean-energy-access/world-small-hydropower-development-organization",
          description: "UNIDO initiative promoting small hydropower development for sustainable energy access."
        },
        {
          name: "Hydro Equipment Association",
          url: "https://www.hydro-equipment.org/",
          description: "Trade association representing manufacturers of hydroelectric equipment and promoting industry standards."
        }
      ],
      stats: [
        { label: "Global Capacity", value: "1,308 GW" },
        { label: "Annual Generation", value: "4,306 TWh" },
        { label: "Efficiency Rate", value: "90%" },
        { label: "Plant Lifespan", value: "50–100 yrs" }
      ]
    },

    /* ------------------ NEW TILES BELOW ------------------ */

    {
      id: "geothermal",
      name: "Geothermal",
      description: "Uses heat from beneath Earth's surface",
      blurb: "Geothermal energy taps into the Earth's internal heat to generate electricity or provide direct heating.",
      image: "/green-energy-logo.png",
      detailedDescription:
        "Geothermal energy works by accessing heat stored beneath the Earth's crust. Power plants convert steam or hot water from underground reservoirs into electricity. It's one of the most reliable renewable sources due to its constant availability, unaffected by weather or season.",
      initiatives: [
        {
          name: "International Geothermal Association",
          url: "https://www.geothermal-energy.org/",
          description: "Global organization supporting geothermal research and deployment."
        },
        {
          name: "U.S. Department of Energy Geothermal Office",
          url: "https://www.energy.gov/eere/geothermal",
          description: "Federal agency funding geothermal innovation and technology."
        },
        {
          name: "GeoHeat Center",
          url: "https://geothermal.org/",
          description: "Research group advancing direct-use and industrial geothermal applications."
        },
        {
          name: "EGS International Project",
          url: "https://www.iea.org/",
          description: "International initiative developing enhanced geothermal systems."
        }
      ],
      stats: [
        { label: "Global Capacity", value: "16 GW" },
        { label: "Plant Availability", value: "90%+" },
        { label: "Heat Lifespan", value: "100+ years" },
        { label: "Emissions", value: "Low" }
      ]
    },

    {
      id: "biomass",
      name: "Biomass",
      description: "Converts organic material into usable energy",
      blurb: "Biomass energy uses plant or animal material to produce heat, electricity, or biofuels.",
      image: "/green-energy-logo.png",
      detailedDescription:
        "Biomass energy involves burning or processing organic materials such as wood, agricultural waste, or algae. It can generate electricity, produce heat, or create renewable fuels like bioethanol and biodiesel. When sourced sustainably, biomass can be carbon-neutral because new plant growth absorbs the CO₂ released during energy production.",
      initiatives: [
        {
          name: "Bioenergy Europe",
          url: "https://bioenergyeurope.org/",
          description: "European association promoting sustainable biomass energy."
        },
        {
          name: "US Biomass Power Association",
          url: "https://www.usabiomass.org/",
          description: "Trade group supporting biomass electricity across the U.S."
        },
        {
          name: "Global Bioenergy Partnership",
          url: "https://www.globalbioenergy.org/",
          description: "International initiative to promote sustainable bioenergy worldwide."
        },
        {
          name: "International Renewable Energy Agency – Bioenergy",
          url: "https://www.irena.org/",
          description: "Supports global research and policy on bioenergy development."
        }
      ],
      stats: [
        { label: "Global Bioenergy Share", value: "10% of primary energy" },
        { label: "Carbon Neutrality", value: "Possible if sustainably managed" },
        { label: "Fuel Types", value: "Wood, waste, biofuels" },
        { label: "Applications", value: "Heating, electricity, fuel" }
      ]
    },

    {
      id: "tidal",
      name: "Tidal & Wave",
      description: "Harnesses the power of ocean tides and waves",
      blurb: "Tidal and wave energy capture the natural movement of oceans, offering predictable renewable power.",
      image: "/green-energy-logo.png",
      detailedDescription:
        "Tidal and wave energy systems generate power by using underwater turbines or surface oscillation devices. Because ocean tides follow predictable patterns, tidal energy is one of the most reliable renewable sources. Wave energy, powered by wind-driven ocean surface motion, also offers massive global potential.",
      initiatives: [
        {
          name: "Ocean Energy Europe",
          url: "https://www.oceanenergy-europe.eu/",
          description: "Largest network promoting ocean energy technologies."
        },
        {
          name: "Marine Energy Council",
          url: "https://www.marineenergycouncil.org/",
          description: "Industry group supporting tidal and wave development."
        },
        {
          name: "European Marine Energy Centre",
          url: "https://emec.org.uk/",
          description: "Leading test facility for tidal and wave prototypes."
        },
        {
          name: "NREL Marine Energy Program",
          url: "https://www.nrel.gov/",
          description: "U.S. research institution studying marine energy innovation."
        }
      ],
      stats: [
        { label: "Global Potential", value: "≈ 29,500 TWh/year" },
        { label: "Predictability", value: "Very high" },
        { label: "Technology Stage", value: "Emerging" },
        { label: "Environmental Impact", value: "Low" }
      ]
    }
  ];

  const handleEnergySelect = (energy: EnergyType) => {
    setSelectedEnergy(energy);
    setViewMode("detailed");
  };

  const handleCloseDetail = () => {
    setSelectedEnergy(null);
    setViewMode("grid");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Renewable Energy Sources
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore the clean energy technologies powering our sustainable
            future. Click on any energy type to learn more about its benefits
            and supporting initiatives.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {energyTypes.map((energy, index) => (
                <motion.div
                  key={energy.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <EnergyTile
                    energy={energy}
                    onSelect={handleEnergySelect}
                    isSelected={selectedEnergy?.id === energy.id}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            selectedEnergy && (
              <EnergyDetailView
                key="detail"
                energy={selectedEnergy}
                onClose={handleCloseDetail}
              />
            )
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              The Future is Renewable
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Renewable energy sources are essential for combating climate
              change and ensuring energy security. These technologies are
              becoming more efficient and cost-effective each year, making them
              increasingly competitive with traditional fossil fuels. By
              supporting renewable energy initiatives, we can build a cleaner,
              more sustainable world for future generations.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
