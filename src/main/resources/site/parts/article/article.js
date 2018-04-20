var contentLib = require('/lib/xp/content');
var portal = require('/lib/xp/portal');
var thymeleaf = require('/lib/xp/thymeleaf');

exports.get = function (req) {

    var component = portal.getComponent();
    var contentId = component.config.articleContent;
    var content;
    if (contentId) {
        content = contentLib.get({
            key: contentId
        });
    }
    var view = resolve('article.html');

    var body = thymeleaf.render(view, {
        article: content.data
    });

    return {
        body: body
    }
};
