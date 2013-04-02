document.addEventListener('DOMContentLoaded', function() {
	var button_left = document.getElementById('slideLeft');
	var button_right = document.getElementById('slideRight');
	button_left.onclick = function() {
		document.getElementById('container').scrollLeft += 161;
		};
	button_right.onclick = function() {
		document.getElementById('container').scrollLeft -= 161;
		};
		}, false);


var sourceTags = function() {
var elements = document.getElementsByTagName('img');
var tmp = document.querySelector('.full_size');
for (i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', function() {
		var x = this.src;
		tmp.innerHTML = "<img src='"  + x.replace("300x294_ac", "original") + "' alt='' />"
	}, false);
}
};

