import InfoCityView from "./InfoCityView";
import CurrentWeatherView from "./currentWeatherView";
import ForecastWeatherView from "./forecastWeatherView";

export default class weatherModelView {
  appendInfoCity(InfoCity) {
    const element = document.getElementById("Info-City");
    new InfoCityView(element, InfoCity);
  }

  appendCurrentWeather(currentWeather) {
    const element = document.getElementById("current-weather");
    new CurrentWeatherView(element, currentWeather);
  }

  appendForecastWeather(forecastWeather) {
    const element = document.getElementById("forecast");
    new ForecastWeatherView(element, forecastWeather);
  }

  changeUnitTemp(unit) {
    if (unit === "imperial") {
      document.querySelector(".unitC").style.color = "white";
      document.querySelector(".unitF").style.color = "black";
    } else {
      document.querySelector(".unitF").style.color = "white";
      document.querySelector(".unitC").style.color = "black";
    }
  }
}
