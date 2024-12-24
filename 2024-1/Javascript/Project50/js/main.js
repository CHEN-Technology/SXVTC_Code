window.onload = function () {
	const smallBox = document.getElementById("smallBox");
	const bigBox = document.getElementById("bigBox");
	const zoom = document.getElementById("zoom");

	const imgUrl = "https://bing.chentech.asia/api/getimage";

	smallBox.style.backgroundImage = `url(${imgUrl})`;
	bigBox.style.backgroundImage = `url(${imgUrl})`;

	smallBox.style.backgroundSize = "100% 100%";
	bigBox.style.backgroundSize = "200% 200%";

	smallBox.addEventListener("mouseover", () => {
		bigBox.style.display = "block";
		zoom.style.display = "block";
	});

	smallBox.addEventListener("mouseout", () => {
		bigBox.style.display = "none";
		zoom.style.display = "none";
	});

	smallBox.addEventListener("mousemove", (e) => {
		let x = e.clientX - smallBox.offsetLeft;
		let y = e.clientY - smallBox.offsetTop;
		let zoomX = x - zoom.offsetWidth / 2;
		let zoomY = y - zoom.offsetHeight / 2;

		if (zoomX < 0) {
			zoomX = 0;
		} else if (zoomX + zoom.offsetWidth > smallBox.offsetWidth) {
			zoomX = smallBox.offsetWidth - zoom.offsetWidth;
		}

		if (zoomY < 0) {
			zoomY = 0;
		} else if (zoomY + zoom.offsetHeight > smallBox.offsetHeight) {
			zoomY = smallBox.offsetHeight - zoom.offsetHeight;
		}

		zoom.style.left = zoomX + "px";
		zoom.style.top = zoomY + "px";

		let bgX = (zoomX / (smallBox.offsetWidth - zoom.offsetWidth)) * 100;
		let bgY = (zoomY / (smallBox.offsetHeight - zoom.offsetHeight)) * 100;

		bigBox.style.backgroundPosition = `${bgX}% ${bgY}%`;
	});
};
