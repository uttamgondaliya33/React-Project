
function SearchBar({
  city,
  suggestions,
  searching,
  onChange,
  onSearch,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">

      <div className="flex gap-3">

        <div className="relative flex-1">

          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">
            🔍
          </span>

          <input
            type="text"
            value={city}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search city..."
            className="w-full h-14 rounded-2xl bg-white border border-slate-200 pl-12 pr-12 text-slate-800 placeholder-slate-400 outline-none shadow-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
          />

          {searching && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

        </div>

        <button
          onClick={() => onSearch()}
          className="h-14 px-6 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 active:scale-95 transition cursor-pointer"
        >
          Search
        </button>

      </div>

      {suggestions.length > 0 && (
        <div className="absolute z-50 left-0 right-20 mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">

          {suggestions.map((item, index) => (
            <button
              key={`${item.latitude}-${item.longitude}-${index}`}
              onClick={() => onSearch(item)}
              className="w-full text-left px-5 py-4 hover:bg-blue-50 transition border-b border-slate-100 last:border-none cursor-pointer"
            >
              <div className="flex items-center gap-4">

                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  📍
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    {item.name}
                  </p>

                  <p className="text-sm text-slate-500 mt-0.5">
                    {item.admin1
                      ? `${item.admin1}, ${item.country}`
                      : item.country}
                  </p>
                </div>

              </div>
            </button>
          ))}

        </div>
      )}

    </div>
  );
}

export default SearchBar;

