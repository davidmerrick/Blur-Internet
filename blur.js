function blurImages(){
	$('img').css({"-webkit-filter":"blur(5px)"});
}

$('body').bind("DOMSubtreeModified", function() {
    blurImages();
});
