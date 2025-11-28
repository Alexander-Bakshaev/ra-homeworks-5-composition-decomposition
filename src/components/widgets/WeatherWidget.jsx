/** Виджет погоды с текущей температурой и прогнозом */
const WeatherWidget = ({ data }) => (
  <div className="weather-widget">
    <h3>Погода</h3>
    <div className="current-temp">+{data.current}°</div>
    <div className="forecast">
      Утром +{data.morning}, днём +{data.day}
    </div>
  </div>
);

export default WeatherWidget;
