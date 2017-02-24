var chrome = require("combistack-chrome")("~/.config/google-chrome/Default");

chrome.cookies.site.getCookies("badoo.com").then(function(cookies){
	var badoo = require("./badoo")(cookies);

	var locations = [];

	badoo.getUsers1().then(function(users){
		users.forEach(function(user){
			if(user.location.latitude_precise != undefined){
				locations.push({
					id: user.user_id,
					name: user.name,
					location: user.location,
					picture: user.profile_photo.large_url
				});
			}
		});

		
	});
});

