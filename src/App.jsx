import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recentCities, setRecentCities] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [lastCity, setLastCity] = useState("");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  // Load recent cities from localStorage
  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem("recentCities")) || [];
    setRecentCities(storedCities);
  }, []);

  // Save recent cities to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("recentCities", JSON.stringify(recentCities));
  }, [recentCities]);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    setLastCity(city);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        addToRecentCities(city);
        fetchForecast(city);
      } else {
        setError(data.message || "City not found");
      }
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const fetchForecast = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      if (res.ok) {
        const filtered = data.list.filter((item, index) => index % 8 === 0);
        setForecastData(filtered);
      } else {
        setForecastData([]);
      }
    } catch {
      setForecastData([]);
    }
  };

  const addToRecentCities = (city) => {
    setRecentCities((prev) =>
      [city, ...prev.filter((c) => c !== city)].slice(0, 5)
    );
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`min-h-screen p-4 flex flex-col items-center transition duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-b from-sky-200 to-sky-500 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">🌤️ Weather Dashboard</h1>
      <SearchBar
        onSearch={fetchWeather}
        recentCities={recentCities}
        onThemeToggle={toggleTheme}
        darkMode={darkMode}
        lastCity={lastCity}
      />
      {loading && (
        <div className="mt-4 border-4 border-white border-t-transparent w-10 h-10 rounded-full animate-spin"></div>
      )}
      {error && <p className="mt-4 text-red-300">{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {forecastData.map((item, index) => (
            <ForecastCard key={index} data={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
