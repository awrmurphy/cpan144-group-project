import { useEffect, useState } from "react";

interface WeatherData {
  location: { name: string };
  current: {
    weather_descriptions: string[];
    temperature: number;
    weather_icons: string[];
  };
}

export default function WeatherTile() {
  const [data, setData] = useState<WeatherData | null>(null);
  useEffect(() => {
    const fetchWeather = (lat: number, lon: number) => {
      const url = `http://api.weatherstack.com/current?access_key=ceed63b7ededaff8cf715b5afed890f9&query=${lat},${lon}`;
      const options = { method: "GET" };
      fetch(url, options)
        .then((res) => res.json())
        .then((json) => setData(json));
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          fetchWeather(45.4215, -75.6972);
        }
      );
    } else {
      fetchWeather(45.4215, -75.6972);
    }
  }, []);

  if (!data) return <div className="glass-card font-bold text-slate-700 p-2.5 w-24 h-24 fixed top-2 right-3 z-50 rounded-3xl shadow-lg hover:shadow-xl transition-shadow animate-none flex flex-col items-center justify-center bg-white/70">Loading Weather...</div>;

  return (
    <div className="glass-card p-2.5 w-24 h-24 fixed bottom-4 right-4 lg:top-2 lg:right-3 z-50 rounded-3xl shadow-lg hover:shadow-xl transition-shadow animate-none flex flex-col items-center justify-center bg-white/70">
      <h3 className="text-sm font-bold text-slate-700 mb-0.5 text-center leading-tight">
        {data.location?.name}
      </h3>
      <div className="text-center space-y-0.5 flex flex-col items-center">
        <p className="text-lg font-black text-emerald-700 leading-none">{data.current?.temperature}°C</p>
        <div className="flex items-center justify-center">
          <img
            src={data.current?.weather_icons[0]}
            alt="weather icon"
            className="w-8 h-8 rounded-lg drop-shadow-sm mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
