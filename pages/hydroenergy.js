"use client";
import Link from "next/link";

export default function HydroEnergy() {
return (
<div className="p-6 bg-emerald-50 min-h-screen  text-left space-y-4">
<h1 className="text-4xl font-bold text-cyan-600">Hydro Energy</h1>


<h2 className="text-2xl font-semibold text-slate-900 mt-4">How Hydroelectric Power Works</h2>
<p className="text-slate-700">
Hydropower converts the energy of moving water into electricity. Most commonly, water stored
in dams flows through turbines, spinning them to generate power. This process is highly efficient
and has been used for over a century.
</p>

<h2 className="text-2xl font-semibold text-slate-900 mt-4">Environmental Benefits</h2>
<p className="text-slate-700">
Hydropower is a clean and renewable energy source that produces no direct greenhouse gas emissions.
It also provides consistent and reliable baseload power.
</p>
<ul className="list-disc ml-6 text-slate-700">
<li>Highly reliable energy source</li>
<li>Supports water management and flood control</li>
<li>No air pollution</li>
</ul>

<h2 className="text-2xl font-semibold text-slate-900 mt-4">How Individuals Can Contribute</h2>
<p className="text-slate-700">
While individuals cannot build hydro plants, they can still promote renewable hydropower through
energy choices, conservation, and advocacy.
</p>


<ul className="list-disc ml-6 text-slate-700">
<li>Choose energy plans powered by renewables</li>
<li>Support environmental protection policies</li>
<li>Conserve water and electricity</li>
</ul>
<h2 className="text-2xl font-semibold text-slate-900 mt-4">Learn More</h2>
<a
href="https://www.energy.gov/eere/water/how-hydropower-works"
target="_blank"
className="text-cyan-700 underline"
>
U.S. Department of Energy – How Hydropower Works
</a>

<br/>
<Link
href="/green"
className="inline-block mt-6 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
>
Go Back
</Link>
</div>
);
}