function blurPage(){
	$('img').css({"-webkit-filter" : "blur(5px)"});
	$('i').css({"-webkit-filter" : "blur(5px)"});
	$('body').css({"color" : "rgba(255,255,255,0)"});
	$('body').css({"text-shadow" : "0 0 8px rgba(0,0,0,0.5)"});
	$('a').css({"color" : "rgba(255,255,255,0)"});
	$('a').css({"text-shadow" : "0 0 8px rgba(0,0,0,0.5)"});
	$('span').css({"color" : "rgba(255,255,255,0)"});
	$('span').css({"text-shadow" : "0 0 8px rgba(0,0,0,0.5)"});
	$('textarea').css({"color" : "rgba(255,255,255,0)"});
	$('textarea').css({"text-shadow" : "0 0 8px rgba(0,0,0,0.5)"});
	$('abbr').css({"color" : "rgba(255,255,255,0)"});
	$('abbr').css({"text-shadow" : "0 0 8px rgba(0,0,0,0.5)"});
	$('div').css({"color" : "rgba(255,255,255,0)"});
	$('div').css({"text-shadow" : "0 0 8px rgba(0,0,0,0.5)"});
}

$('body').bind("DOMSubtreeModified", function() {
    blurPage();
});
