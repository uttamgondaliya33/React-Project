
function WeatherDetails({ weather }) {
  const details = [
    {
      icon: "💧",
      title: "Humidity",
      value: `${weather.humidity}%`,
    },
    {
      icon: "💨",
      title: "Wind Speed",
      value: `${weather.windSpeed} km/h`,
    },
    {
      icon: "🌡️",
      title: "Pressure",
      value: `${Math.round(weather.pressure)} hPa`,
    },
    {
      icon: "👁️",
      title: "Visibility",
      value: `${(weather.visibility / 1000).toFixed(1)} km`,
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {details.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-5 text-center shadow-lg border border-white"
          >
            <div className="text-2xl">
              {item.icon}
            </div>

            <p className="text-sm text-slate-500 mt-3">
              {item.title}
            </p>

            <p className="text-lg font-bold text-slate-800 mt-1">
              {item.value}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default WeatherDetails;
