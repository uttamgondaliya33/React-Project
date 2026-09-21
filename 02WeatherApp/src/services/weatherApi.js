
const GEOCODING_URL =
  "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast";

export const searchCities = async (city) => {
  const response = await fetch(
    `${GEOCODING_URL}?name=${encodeURIComponent(
      city
    )}&count=8&language=en&format=json`
  );

  if (!response.ok) {
    throw new Error("Unable to search cities");
  }

  const data = await response.json();

  if (!data.results) {
    return [];
  }

  return data.results.map((item) => ({
    name: item.name,
    country: item.country,
    admin1: item.admin1 || "",
    latitude: item.latitude,
    longitude: item.longitude,
    displayName: item.admin1
      ? `${item.name}, ${item.admin1}, ${item.country}`
      : `${item.name}, ${item.country}`,
  }));
};

export const getWeather = async (
  latitude,
  longitude,
  city,
  country
) => {
  const url =
    `${WEATHER_URL}?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,surface_pressure,visibility` +
    `&timezone=auto`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch weather data");
  }

  const data = await response.json();

  return {
    city,
    country,
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    pressure: data.current.surface_pressure,
    visibility: data.current.visibility,
    weatherCode: data.current.weather_code,
    condition: getWeatherCondition(
      data.current.weather_code
    ),
    icon: getWeatherIcon(
      data.current.weather_code
    ),
  };
};

const getWeatherCondition = (code) => {
  if (code === 0) return "Clear Sky";

  if (code === 1 || code === 2) {
    return "Partly Cloudy";
  }

  if (code === 3) {
    return "Overcast";
  }

  if ([45, 48].includes(code)) {
    return "Foggy";
  }

  if ([51, 53, 55].includes(code)) {
    return "Drizzle";
  }

  if ([61, 63, 65].includes(code)) {
    return "Rainy";
  }

  if ([71, 73, 75, 77].includes(code)) {
    return "Snowy";
  }

  if ([80, 81, 82].includes(code)) {
    return "Rain Showers";
  }

  if ([95, 96, 99].includes(code)) {
    return "Thunderstorm";
  }

  return "Unknown";
};

const getWeatherIcon = (code) => {
  if (code === 0) return "☀️";

  if (code === 1 || code === 2) {
    return "🌤️";
  }

  if (code === 3) {
    return "☁️";
  }

  if ([45, 48].includes(code)) {
    return "🌫️";
  }

  if ([51, 53, 55].includes(code)) {
    return "🌦️";
  }

  if ([61, 63, 65].includes(code)) {
    return "🌧️";
  }

  if ([71, 73, 75, 77].includes(code)) {
    return "❄️";
  }

  if ([80, 81, 82].includes(code)) {
    return "🌦️";
  }

  if ([95, 96, 99].includes(code)) {
    return "⛈️";
  }

  return "🌤️";
};

