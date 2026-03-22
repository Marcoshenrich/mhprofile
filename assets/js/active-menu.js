(function() {
	var path = window.location.pathname.split('/').pop() || 'index.html';
	var links = document.querySelectorAll('#menu > ul > li > a');
	for (var i = 0; i < links.length; i++) {
		var href = links[i].getAttribute('href');
		if (href && href === path) {
			links[i].parentElement.classList.add('active');
		}
	}
})();
