var weatherLib = require('/lib/weather');

exports.get = function (req) {

    return {
        contentType: 'application/json',
        status: 200,
        body: {
            ok: true,
            weather: weatherLib.getWeatherForecast()
        }
    }
};
