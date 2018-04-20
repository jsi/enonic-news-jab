var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf library
var weatherLib = require('/lib/weather');

// Handle the GET request
exports.get = function (req) {
    var weatherData = weatherLib.getWeatherForecast();

    // Specify the view file to use
    var view = resolve('default.html');

    // Render HTML from the view file
    var body = thymeleaf.render(view, {
        weatherDesc: weatherData.text,
        weatherWind: formatWind(weatherData.wind),
        weatherTemp: formatTemp(weatherData),
        weatherHum: formatHumidity(weatherData)
    });

    // Return the response object
    return {
        body: body
    }
};

var formatWind = function (wind) {
    var speedkmh = Math.round((wind.speed * 18) / 5);
    var text = speedkmh + ' km/h';
    return text;
};

var formatTemp = function (weatherData) {
    var tempCelsius = Math.round(((weatherData.high - 32) * 5) / 9);
    var text = tempCelsius + ' °C';
    return text;
};

var formatHumidity = function (weatherData) {
    return weatherData.atmosphere.humidity + '%';
};