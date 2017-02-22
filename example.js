var chrome = require("combistack-chrome")("~/.config/google-chrome/Default");

chrome.cookies.site.getCookies("badoo.com").then(function(cookies){
	var badoo = require("./badoo")(cookies);

	badoo.getUser("227562224").then(function(user){console.log(user.location)});
	badoo.massLike();
});

