window.onload = function() {
	var partials = ['header.html', 'footer.html', 'side_menu.html'];
	render_paricles(partials);
}

//Формат имени паршиала *id элемента для вставки*.html
function render_paricles(partials) {
	partials.forEach(function(partial) {
		var xhr= new XMLHttpRequest();
		xhr.open('GET', partial, true);
		xhr.onreadystatechange= function() {
		    if (this.readyState!==4) return;
		    if (this.status!==200) return; 
		    document.getElementById(partial.slice(0, -5)).innerHTML= this.responseText;
		};
		xhr.send();	
	})
}

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