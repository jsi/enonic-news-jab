var portal = require('/lib/xp/portal'); // Import the portal library
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf library

// Handle the GET request
exports.get = function(req) {

    // Prepare the model object with the needed data from the content
    var model = {
        
    };

    // Specify the view file to use
    var view = resolve('five-column-filler.html');

    // Return the merged view and model in the response object
    return {
        body: thymeleaf.render(view, model)
    }
};
