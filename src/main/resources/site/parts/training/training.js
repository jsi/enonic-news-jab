var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function (req) {
    var data = getData();

    var view = resolve('training.html');

    var body = thymeleaf.render(view, {
        data: data
    });

    return {
        body: body
    }
};

var getData = function () {
    return [
        {
            "date": "2018-05-08",
            "title": "XP: Content 101",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/xp-content-101-oslo-2018-05-08"
        },
        {
            "date": "2018-05-15",
            "title": "XP: Developer 101",
            "city": "London, UK",
            "address": "1 Fore Street, Moorgate, London",
            "url": "/learn/training-events/xp-developer-101-london-2018-05-15"
        },
        {
            "date": "2018-05-29",
            "title": "XP:Developer 101",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/xp-developer-101-oslo-2018-05-29"
        },
        {
            "date": "2018-05-30",
            "title": "XP:Developer 201",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/xp-developer-201-oslo-2018-05-30"
        },
        {
            "date": "2018-08-01",
            "title": "XP: Developer 101",
            "city": "London, UK",
            "address": "1 Fore Street, Moorgate, London",
            "url": "/learn/training-events/xp-developer-101-london-2018-08-01"
        },
        {
            "date": "2018-08-21",
            "title": "XP:Developer 101",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/xp-developer-101-oslo-2018-08-21"
        },
        {
            "date": "2018-08-22",
            "title": "XP:Developer 201",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/xp-developer-201-oslo-2018-08-22"
        },
        {
            "date": "2018-08-30",
            "title": "XP: Content 101",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/xp-content-101-oslo-2018-08-30"
        },
        {
            "date": "2018-09-04",
            "title": "Workshop - PWA 101",
            "city": "Oslo, Norway",
            "address": "Kirkegata 1-3, Oslo",
            "url": "/learn/training-events/buildpwa-101-oslo-2018-09-04"
        }
    ]
};