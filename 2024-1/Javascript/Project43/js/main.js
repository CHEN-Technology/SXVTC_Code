window.onload = function () {
	const h1 = document.querySelector("h1");

	h1.addEventListener("mouseover", function () {
		h1.style.backgroundColor = "red";
	});

	h1.addEventListener("mouseout", function () {
		h1.style.backgroundColor = "transparent";
	});
};
