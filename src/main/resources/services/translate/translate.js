var translateLib = require('/lib/funtranslations');

exports.get = function (req) {

    var text = 'Enonic\'s innovative platform provides a faster way to create and deliver powerful digital experiences. We solve everyday problems in all stages of the digital delivery process. Our simplified architecture reduces the number of moving parts, and enables delivery of content, services and applications from a single, scalable platform.';
    var translated = translateLib.translate(text);

    return {
        contentType: 'application/json',
        status: 200,
        body: {
            ok: true,
            text: text,
            translated: translated
        }
    }
};
