
export default async function handler(req, res) {
  let { lat, lon } = req.query;

  const latitude = lat ? parseFloat(lat as string) : null;
  const longitude = lon ? parseFloat(lon as string) : null;

  
  const fallbackLat = 45.4215;
  const fallbackLon = -75.6972;

  const finalLat = latitude ?? fallbackLat;
  const finalLon = longitude ?? fallbackLon;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${finalLat}&longitude=${finalLon}&current_weather=true`
    );

    const data = await response.json();

    const weatherMap: Record<number, { desc: string; icon: string }> = {
      0: { desc: "Clear", icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" },
      1: { desc: "Mainly Clear", icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" },
      2: { desc: "Partly Cloudy", icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_cloudy.png" },
      3: { desc: "Overcast", icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_cloudy.png" },
    };

    const weatherCode = data.current_weather.weathercode;
    const weather = weatherMap[weatherCode] ?? { desc: "Unknown", icon: "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png" };

    res.status(200).json({
      location: { name: `Lat: ${finalLat.toFixed(2)}, Lon: ${finalLon.toFixed(2)}` },
      current: {
        temperature: data.current_weather.temperature,
        weather_descriptions: [weather.desc],
        weather_icons: [weather.icon],
      },
    });
  } catch (err) {
    res.status(500).json({
      location: { name: "Unknown Location" },
      current: {
        temperature: 0,
        weather_descriptions: ["Unknown"],
        weather_icons: [],
      },
    });
  }
}
