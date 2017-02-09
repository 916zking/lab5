var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log("It worked");
	var name = req.query.name;
	var description = req.query.description;
	//var newFriend = '"name":'+name+', "description":'+description+', "imageURL: "lorempixel.com/400/400/people";';
	var newFriend = {
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people"			
		};
	data.friends.push(newFriend);
	console.log(newFriend);
	console.log(data);
	res.render('index', 
		data);

 }