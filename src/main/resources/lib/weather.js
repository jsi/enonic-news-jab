var cacheLib = require('/lib/cache');
var httpClient = require('/lib/http-client');

var YahooWeatherURl = 'https://query.yahooapis.com/v1/public/yql';

var weatherCache = cacheLib.newCache({
    size: 10,
    expire: 60
});

exports.getWeatherForecast = function () {
    var key = new Date().toISOString().substring(0, 10);

    var weatherResponse = weatherCache.get(key, function () {
        return fetchWeatherForecast();
    });
    if (!weatherResponse) {
        weatherCache.clear();
        return null;
    }

    return weatherResponse;
};

var fetchWeatherForecast = function () {
    var query = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="oslo, norway")';
    var response = httpClient.request({
        url: YahooWeatherURl,
        method: 'GET',
        connectionTimeout: 20000,
        readTimeout: 5000,
        params: {
            q: query,
            format: 'json',
            env: 'store://datatables.org/alltableswithkeys'
        },
        contentType: 'application/json'
    });

    if ((response.status >= 200) && (response.status < 300)) {
        var body = JSON.parse(response.body);
        log.info('Translation request success: ' + JSON.stringify(response, null, 2));

        if (body.query && body.query.results && body.query.results.channel) {
            var channel = body.query.results.channel;
            var data = channel.item.forecast[0];
            data.atmosphere = channel.atmosphere;
            data.wind = channel.wind;
            return data;
        } else {
            return false;
        }
    } else {
        log.info('Translation request failed: ' + JSON.stringify(response, null, 2));
        return false;
    }

    /*
    Weatherforcast for the next 24 hours: Plenty of Sunshine
Wind: 7km/h SSE; Ther: 21Â°C; Hum: 82%
     */
};