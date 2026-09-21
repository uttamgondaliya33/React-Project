
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import {searchCities,getWeather} from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState("");


  const handleCityChange = async (value) => {
    setCity(value);
    setError("");
    setWeather(null);

    if (value.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    setSearching(true);

    try {
      const cities = await searchCities(value);
      setSuggestions(cities);
    } catch {
      setSuggestions([]);
    } finally {
      setSearching(false);
    }
  };

  const handleSearch = async (selectedCity = null) => {
    const selected = selectedCity || suggestions[0];

    if (!selected) {
      setError("Please select a city from the suggestions.");
      return;
    }

    setCity(selected.displayName);
    setSuggestions([]);
    setError("");
    setLoading(true);

    try {
      const data = await getWeather(
        selected.latitude,
        selected.longitude,
        selected.name,
        selected.country
      );

      setWeather(data);
    } catch (err) {
      setError(err.message || "Unable to fetch weather data.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-100 via-blue-50 to-indigo-100 px-4 py-10">

      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-3xl shadow-lg mb-5">
            🌤️
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Weather App
          </h1>

          <p className="text-slate-500 mt-3">
            Search any city and check the current weather
          </p>
        </div>

        <SearchBar
          city={city}
          suggestions={suggestions}
          searching={searching}
          onChange={handleCityChange}
          onSearch={handleSearch}
        />
        
        {loading && <Loading />}

        {error && !loading && (
          <ErrorMessage message={error} />
        )}

        {weather && !loading && !error && (
          <div className="mt-8 space-y-6">
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </div>
        )}

      </div>
    </div>
  );
}
export default App;

