/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {
	  title: 'AngularJS, NodeJS, LoopBack with Vash Templates',
	  channel: 'Express',
	  mainPageHeader: 'Coffee shop reviews',
	  developedby: 'devtro-uk sample code'
  });
};