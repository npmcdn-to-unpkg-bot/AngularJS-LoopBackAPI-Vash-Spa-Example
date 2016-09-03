var loopback = require('loopback');
var boot = require('loopback-boot');
var routes = require('../client/js/routes');

var app = module.exports = loopback();

//-- Mount static files here--
//All static middleware should be registered at the end, as all requests
//passing the static middleware are hitting the file system
//Example:
var path = require('path');
var newpath = path.resolve(__dirname, '../client');

console.log(__dirname.replace('server', 'client') + '/views');

app.set('views', __dirname.replace('server', 'client') + '/views');
app.set('view engine', 'vash');

app.use(loopback.static(newpath));


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');

    //app.get('/', routes.index);  //Puts us on the home page

    var baseUrl = app.get('url').replace(/\/$/, '').replace('server', 'client');
    console.log('Web server listening at: %s', baseUrl);
    
    app.get('/', function (req, res) {
	    
	    res.render('index', {
		  title: 'AngularJS, NodeJS, LoopBack with Vash Templates',
		  software: 'AngularJS, NodeJS, LoopBack, Express, and Vash Templates, uses MongoDB, MySQL, Built with Grunt and Gulp, uses Docular',
		  mainPageHeader: 'Coffee shop reviews',
		  developedby: '(c) devtro-uk',
		  credits: 'https://github.com/strongloop/loopback-getting-started-intermediate/wiki'
		      });
	});

    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});


