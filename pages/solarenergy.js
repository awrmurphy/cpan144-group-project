"use client";

import Link from "next/link";

export default function SolarEnergy() {
    return (
<div className="p-6 bg-emerald-50 min-h-screen  text-left space-y-4">
<h1 className="text-4xl font-bold text-amber-600">Solar Energy</h1>


<h2 className="text-2xl font-semibold text-slate-900 mt-4">How Solar Energy Works</h2>
<p className="text-slate-700">
Solar energy is produced when sunlight is captured and converted into usable electrical power.
The most common method is through <strong>photovoltaic (PV) cells</strong>, which absorb photons from sunlight
and release electrons, generating an electric current. Another method is <strong>solar thermal energy</strong>,
which concentrates sunlight to produce heat for power plants.
</p>
<h2 className="text-2xl font-semibold text-slate-900 mt-4">Why Solar Energy Is Good for the Planet</h2>
<p className="text-slate-700">
Solar energy reduces dependence on fossil fuels, lowers greenhouse gas emissions, and minimizes air pollution.
It is one of the cleanest and most abundant renewable sources available.
</p>


<ul className="list-disc ml-6 text-slate-700">
<li>Reduces carbon footprint</li>
<li>Provides energy independence</li>
<li>Works even in remote areas</li>
<li>Technology continues to become cheaper</li>
</ul>


<h2 className="text-2xl font-semibold text-slate-900 mt-4">How Individuals Can Contribute</h2>
<p className="text-slate-700">
Individuals can support solar energy by installing rooftop panels, choosing green energy plans, purchasing solar-powered
devices, or advocating for clean energy policies.
</p>


<ul className="list-disc ml-6 text-slate-700">
<li>Install rooftop solar (if possible)</li>
<li>Use solar-powered chargers or lights</li>
<li>Support community solar projects</li>
<li>Choose utility plans powered by renewables</li>
</ul>
<h2 className="text-2xl font-semibold text-slate-900 mt-4">Learn More</h2>
<a
href="https://www.energy.gov/eere/solar/how-does-solar-work"
target="_blank"
className="text-amber-700 underline"
>
U.S. Department of Energy – How Solar Works
</a>
<br />


<Link
href="/green"
className="inline-block mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
>
Go Back
</Link>
</div>
);
}