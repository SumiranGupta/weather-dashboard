function ForecastCard({ data }) {
  const date = new Date(data.dt_txt).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white text-black p-4 rounded-xl shadow text-center w-48 transform transition duration-300 hover:scale-105">
      <h3 className="font-semibold">{date}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
        className="mx-auto"
      />
      <p>{data.weather[0].main}</p>
      <p>🌡️ {data.main.temp}°C</p>
      <p>💧 {data.main.humidity}%</p>
    </div>
  );
}

export default ForecastCard;
