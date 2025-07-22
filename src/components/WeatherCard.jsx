function WeatherCard({ data }) {
  const { name, main, weather, wind } = data;
  return (
    <div className="mt-6 bg-white text-black p-6 rounded-xl shadow-lg text-center w-80">
      <h2 className="text-xl font-semibold">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg">{weather[0].main}</p>
      <p>🌡️ Temp: {main.temp} °C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind: {wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
