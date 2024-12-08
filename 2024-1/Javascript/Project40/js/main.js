window.onload = function () {
	const img = document.getElementById("imgBox").children.item(0);
	const btnSwitch = document.getElementById("btns").children.item(0);
	const btnChange1 = document.getElementById("btns").children.item(1);
	const btnChange2 = document.getElementById("btns").children.item(2);

	btnSwitch.addEventListener("click", () => {
		img.getAttribute("src") === "img/dingding.png"
			? img.setAttribute("src", "img/dingding1.png")
			: img.setAttribute("src", "img/dingding.png");
		console.log(img);
	});

	btnChange1.addEventListener("click", () => {
		img.setAttribute("src", "img/dingding.png");
		console.log(img);
	});

	btnChange2.addEventListener("click", () => {
		img.setAttribute("src", "img/dingding1.png");
		console.log(img);
	});
};
