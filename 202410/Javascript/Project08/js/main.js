window.onload = function () {
	const zhaohongAge = 99;

	if (zhaohongAge > 0) {
		if (zhaohongAge <= 44) {
			console.log("您是青年人！");
		} else if (zhaohongAge > 44 && zhaohongAge <= 59) {
			console.log("您是中年人！");
		} else if (zhaohongAge > 59 && zhaohongAge <= 89) {
			console.log("您是老年人！");
		} else {
			console.log("您是长寿老年人！");
		}
	}
};
