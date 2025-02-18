window.onload = function () {
	const imgBox = document.querySelector(".imgBox");
	const imgFullBox = document.querySelector(".imgFullBox");
	imgBox.addEventListener("mouseover", function () {
		let imgSrc = this.querySelector("img").src;
		imgFullBox.innerHTML = `<img src="${imgSrc}" alt="Full Image">`;
		imgFullBox.style.display = "block";
		imgFullBox.children.item(0).style.width = "100%";
	});
	imgBox.addEventListener("mouseout", function () {
		imgFullBox.style.display = "none";
	});
};
