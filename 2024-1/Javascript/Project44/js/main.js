window.onload = function () {
	var pic = document.querySelector("img");
	document.addEventListener("mousemove", function (e) {
		var x = e.pageX;
		var y = e.pageY;
		pic.style.left = x - 50 + "px";
		pic.style.top = y - 40 + "px";
	});
};
