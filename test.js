require("combistack-chrome")("~/.config/google-chrome/Default").cookies.site.getCookies("badoo.com").then(function(data){
	console.log(data);
});

