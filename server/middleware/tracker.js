/*
 * Tracker middleware displaying the time it takes to process the incoming HTTP requests on application routes!!!
 * 
 */
var colors = require('colors');

module.exports = function() {
	return function tracker(req, res, next) {

		console.log(colors.yellow('TRACKER: Request tracking middleware triggered on %s', req.url));

		var start = process.hrtime();

		res.once('finish', function() {
			var diff = process.hrtime(start);
			var ms = diff[0] * 1e3 + diff[1] * 1e-6;
			console.log(colors.yellow('The request processing time is %d ms.', ms));
		});

		next();
	};
};