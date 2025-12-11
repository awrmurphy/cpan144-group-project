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
      fetch(`/api/weather?lat=${lat}&lon=${lon}`)
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

  if (!data) return <div className="tile">Loading...</div>;

  return (
    <div className="tile">
      <h3>Weather — {data.location.name}</h3>
      <p>{data.current.weather_descriptions[0]}</p>
      <p>{data.current.temperature}°C</p>
      <img src={data.current.weather_icons[0]} alt="weather icon" style={{ width: "60px" }} />
    </div>
  );
}
