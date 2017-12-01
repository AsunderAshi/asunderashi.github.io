window.onscroll = function() {
	var scrolled = document.documentElement.scrollTop;
	var menu_block = document.getElementById("side_menu");
	var page_wrapper = document.getElementById('page_wrapper');
	if(scrolled > page_wrapper.offsetHeight - menu_block.offsetHeight + 75) {
		menu_block.style.position = 'absolute';
		menu_block.style.top = (page_wrapper.offsetHeight - menu_block.offsetHeight + 75) + "px";
	} else {
		if (scrolled > 77) {		
			menu_block.style.position = 'fixed';
			menu_block.style.top = '0px';
		} else {
			menu_block.style.position = 'absolute';
			menu_block.style.top = "75px";
		}
	}
}

window.onload = function() {
	var thumbnails = document.getElementsByClassName('thumbnail');
	if(thumbnails.length > 0) {
		var pic_src = ['img/thumbnails/asia-background_tn.jpg', 'img/thumbnails/road-background_tn.jpg', 
					   'img/thumbnails/newyork-background_tn.jpg', 'img/thumbnails/pier-background_tn.jpg', 
					   'img/thumbnails/mountains-background_tn.jpg', 'img/thumbnails/city-background_tn.jpg'];
		for(var i = 0; i < 6; i++) {
			var img = thumbnails[i].children[0];
			img.setAttribute('alt', pic_src[i]);
			img.id = i;
			img.src = pic_src[i];
		}
	}
	if(document.cookie.length > 0) {
		var cookie = document.cookie;
		if(cookie.indexOf('background=') > -1) {
			var background = readCookie('background');
			document.getElementById('page_wrapper').style.backgroundImage = 'url('+ background +')';
		}
		if(cookie.indexOf('lastSlide=') > -1) {
			var pic_index = readCookie('lastSlide');
			if(pic_index > -1) {
				show_lightbox(pic_index);
			}
		}
	}
}

var pic_src = ['img/asia-background.jpg', 'img/road-background.jpg', 
			   'img/newyork-background.jpg', 'img/pier-background.jpg', 
			   'img/mountains-background.jpg', 'img/city-background.jpg'];

function show_lightbox(i) {
	var lightbox = document.getElementById('lightbox_wrapper');
	lightbox.style.display = 'block';
	var current = document.getElementById('current');
	current.setAttribute('src', pic_src[i]);
	document.getElementById('loading').style.display = 'none';
	document.getElementById('next').setAttribute('src', pic_src[(i + 1) % 6]);
	var prev_num = (i > 0) ? i - 1 : 5;
	document.getElementById('prev').setAttribute('src', pic_src[prev_num]);
}

function close_lighbox() {
	document.getElementById('lightbox_wrapper').style.display = 'none';
	document.getElementById('loading').style.display = 'block';
	document.getElementById('current').setAttribute('src', '');
	document.cookie = 'lastSlide=' + '-1';
}

function move_slide(next_slide_id) {
	document.getElementById('current').id = 'processing';
	document.getElementById(next_slide_id).id = 'current';
	document.getElementById('processing').id = next_slide_id;

	var img = document.getElementById('current').src.match(/img.+$/)[0];
	var index = pic_src.indexOf(img);

	document.getElementById('next').setAttribute('src', pic_src[(index + 1) % 6]);
	var prev_num = (index > 0) ? index - 1 : 5;
	document.getElementById('prev').setAttribute('src', pic_src[prev_num]);
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return null;
}
