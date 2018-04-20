var cacheLib = require('/lib/cache');
var httpClient = require('/lib/http-client');

var LanguageUrls = {
    yoda: 'http://api.funtranslations.com/translate/yoda.json',
    shakespeare: 'http://api.funtranslations.com/translate/shakespeare.json',
    oldenglish: 'http://api.funtranslations.com/translate/oldenglish.json'
};

var translationCache = cacheLib.newCache({
    size: 100,
    expire: 86400
});

// 	POST  -H 'X-Funtranslations-Api-Secret: <api_key>' -d "text=Master Obiwan has lost a planet." http://api.funtranslations.com/translate/yoda.json
exports.translate = function (text, language) {
    language = language || 'oldenglish';
    var url = LanguageUrls[language];
    if (!url) {
        throw 'Unsupported translation language: ' + language;
    }

    var key = language + '|' + text;

    var translation = translationCache.get(key, function () {
        return doTranslate(text, url);
    });

    return translation;
};

var doTranslate = function (text, url) {
    var response = httpClient.request({
        url: url,
        method: 'POST',
        // headers: {
        //     'X-Funtranslations-Api-Secret': ''
        // },
        connectionTimeout: 20000,
        readTimeout: 5000,
        params: {
            text: text
        },
        contentType: 'application/json'
    });

    if ((response.status >= 200) && (response.status < 300)) {
        var body = JSON.parse(response.body);
        return body.contents ? body.contents.translated : '';
    } else {
        log.info('Translation request failed: ' + JSON.stringify(response, null, 2));
        return '';
    }
};