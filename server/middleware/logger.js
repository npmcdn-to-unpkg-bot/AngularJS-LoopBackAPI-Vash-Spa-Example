/*
 * Logger Pre-Processing Middleware 
 * 
 * 
 */

var colors = require('colors');

module.exports = function() {
    
    return function logger(req, res, next) {
        
        console.log(colors.green('LOGGER: Current Url page ! ' + req.url));
        next(); //Pre-processing middleware must call next() at the end of the handler function to pass control to the next middleware, otherwise the app will "freeze."
        
    };
    
};