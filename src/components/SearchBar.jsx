<<<<<<< HEAD
import { useState } from "react";

function SearchBar({
  onSearch,
  recentCities,
  onThemeToggle,
  darkMode,
  lastCity,
}) {
  const [city, setCity] = useState("malda");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 flex-wrap justify-center"
      >
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded shadow bg-white text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onThemeToggle}
          className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        {lastCity && (
          <button
            type="button"
            onClick={() => onSearch(lastCity)}
            className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500 transition"
          >
            🔄 Refresh {lastCity}
          </button>
        )}
      </form>
      {recentCities.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {recentCities.map((city, idx) => (
            <button
              key={idx}
              onClick={() => onSearch(city)}
              className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-300 transition"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
=======
import { useState } from "react";

function SearchBar({
  onSearch,
  recentCities,
  onThemeToggle,
  darkMode,
  lastCity,
}) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 flex-wrap justify-center"
      >
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-2 rounded shadow bg-white text-black focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onThemeToggle}
          className="bg-gray-800 text-white px-3 py-2 rounded hover:bg-gray-700 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        {lastCity && (
          <button
            type="button"
            onClick={() => onSearch(lastCity)}
            className="bg-yellow-400 text-black px-3 py-2 rounded hover:bg-yellow-500 transition"
          >
            🔄 Refresh {lastCity}
          </button>
        )}
      </form>
      {recentCities.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {recentCities.map((city, idx) => (
            <button
              key={idx}
              onClick={() => onSearch(city)}
              className="bg-white text-black px-3 py-1 rounded shadow hover:bg-gray-300 transition"
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
>>>>>>> 13aeb6fb28857f4f8c5f0c5d88ce23803d1cf93d
