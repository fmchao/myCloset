var viewo = require("../viewoutfits.json");
var models = require('../models');

exports.view = function(req, res){
  res.render("viewoutfits");
};

exports.getviewoutfits = function(req, res){
	var email = req.params.user;

	models.Outfit
	.find({"user": email})
	.exec(findOutfit);

	console.log("hello shame shame shame");
	function findOutfit(err, outfits) {
		console.log(outfits);
		res.render( 'viewoutfits', { "outfits_list" : outfits });
	}
};


