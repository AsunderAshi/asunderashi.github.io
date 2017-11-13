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