window.onscroll = function() {
	var scrolled = document.documentElement.scrollTop;
	var menu_block = document.getElementById("side_menu");
	if(scrolled > document.getElementById('page_wrapper').offsetHeight - menu_block.offsetHeight + 75) {
		menu_block.style.position = 'absolute';
		menu_block.style.top = (document.getElementById('page_wrapper').offsetHeight - menu_block.offsetHeight + 75) + "px";
	} else {
		if (scrolled > 77) {		
			menu_block.style.position = 'fixed';
			menu_block.style.top = '0px';
		} else {
			menu_block.style.position = 'absolute';
			menu_block.style.top = "78px";
		}
	}
}