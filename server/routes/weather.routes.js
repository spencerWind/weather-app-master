const WeatherController = require('../controllers/weather.controller');

module.exports = (app) => {
    app.get('/api', WeatherController.index);
    app.get('/api/weather', WeatherController.findAllWeather);
    app.post('/api/weather', WeatherController.createWeather);
    app.get('/api/weather/:id', WeatherController.getWeather);
    app.patch('/api/weather/:id', WeatherController.updateWeather);
    app.delete('/api/weather/:id', WeatherController.deleteWeather);

}