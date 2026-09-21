
function WeatherCard({ weather }) {
  return (
    <div className="w-full max-w-2xl mx-auto">

      <div className="bg-white rounded-3xl shadow-xl border border-white p-8">

        <div className="text-center">

          <p className="text-slate-500 font-medium">
            {weather.city}, {weather.country}
          </p>

          <div className="text-7xl mt-5">
            {weather.icon}
          </div>

          <h2 className="text-6xl font-bold text-slate-800 mt-4">
            {Math.round(weather.temperature)}°C
          </h2>

          <p className="text-xl font-semibold text-slate-600 mt-3">
            {weather.condition}
          </p>

          <p className="text-slate-500 mt-2">
            Feels like {Math.round(weather.feelsLike)}°C
          </p>

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;

