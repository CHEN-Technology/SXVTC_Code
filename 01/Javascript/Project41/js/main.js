window.onload = function () {
	function changeAttributes() {
		div.style.color = "red";
		div.style.fontWeight = "bold";
	}

	function restAttributes() {
		div.style.color = "black";
		div.style.fontWeight = "normal";
	}

	const div = document.getElementById("title");
	div.addEventListener("mouseover", changeAttributes);
	div.addEventListener("mouseout", restAttributes);

	const button = document.getElementById("btnBind");
	button.addEventListener("click", () => {
		console.log("Button clicked!");
		div.removeEventListener("mouseover", changeAttributes);
		div.removeEventListener("mouseout", restAttributes);
	});
};
