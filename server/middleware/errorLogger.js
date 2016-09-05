/*
 * 
 * Custom Error Logger Middleware
 * 
 */
var colors = require('colors');

module.exports = function() { 
   return function logError(err, req, res, next) { 
	   		if(err instanceof Error){
	   			//res.send("An Error occured: @" + req.url + ", details:", + JSON.stringify(err));

	   			if(err.status==404){
		   			res.render('errors/_404.vash', {title: '404: Page Not Found: ', error: err});
	   			};
	   			
	   			if(err.status==500){
		   			res.render('errors/_500.vash', {title: '500: Internal Server Error: ', error: err});
	   			};

	   			console.log(colors.red('ERROR: ', req.url, err)); 

	   			res.status(err.status).end();
	   		}
          };
};