document.onkeydown = function(evt) {
    evt = evt || window.event;

    if (evt.keyCode == 27) {
        close_lighbox();
        document.getElementById('help_window').style.display = 'none';
    }
    if(evt.keyCode == 39) {
    	move_slide('next');
    }
    if(evt.keyCode == 37) {
    	move_slide('prev');
    }
    if(evt.keyCode == 112) {
    	evt.preventDefault();
    	document.getElementById('help_window').style.display = 'block';
    }
    if(evt.keyCode == 32 && document.getElementById('lightbox_wrapper').style.display == 'block') {
    	evt.preventDefault();
    	var img = document.getElementById('current').src.match(/img.+$/)[0];
    	document.getElementById('page_wrapper').style.backgroundImage = 'url(' + img + ')';
    	document.cookie = 'background=' + img;
    }
};

window.onbeforeunload = function() {
	if(document.getElementById('lightbox_wrapper').style.display == 'block') {
		var pic_index = pic_src.indexOf(document.getElementById('current').src.match(/img.+$/)[0]);
		document.cookie = 'lastSlide=' + pic_index;
	}
}