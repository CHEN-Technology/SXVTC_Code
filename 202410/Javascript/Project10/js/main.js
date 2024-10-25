window.onload = function () {
	const day = new Date().getDay();
	// console.log(day);

	const number = prompt("请输入机动车号牌的最后一位数字：");

	if (number == "" || number == null || isNaN(number)) {
		alert("您未输入车牌号码，请重新输入！");
	} else {
		getRestrictions(day, number);
	}

	const isZheA = prompt("您是否是浙A车？（Y/N）");

	if (isZheA == "Y" || isZheA == "y") {
		// 浙A车的限制
	} else {
		// 非浙A车的限制
	}
};

function getRestrictions(day, number) {
	let restrictions;
	switch (day) {
		case 1:
			restrictions = "今天是周一，禁止行驶的车牌号码为：1,9";
			restrictions = checkRestrictions("1", "9", number, restrictions);
			break;
		case 2:
			restrictions = "今天是周二，禁止行驶的车牌号码为：2,8";
			restrictions = checkRestrictions("2", "8", number, restrictions);
			break;
		case 3:
			restrictions = "今天是周三，禁止行驶的车牌号码为：3,7";
			restrictions = checkRestrictions("3", "7", number, restrictions);
			break;
		case 4:
			restrictions = "今天是周四，禁止行驶的车牌号码为：4,6";
			restrictions = checkRestrictions("4", "6", number, restrictions);
			break;
		case 5:
			restrictions = "今天是周五，禁止行驶的车牌号码为：5,0";
			restrictions = checkRestrictions("5", "0", number, restrictions);
			break;
		default:
			restrictions = "今天是周末，没有禁止行驶的车牌号码";
			break;
	}
	alert(restrictions);
}

function checkRestrictions(x, y, number, restrictions) {
	if (number == x || number == y) {
		restrictions = restrictions + "\n您输入的车牌号码已被禁止行驶！";
	} else {
		restrictions = restrictions + "\n您输入的车牌号码没有被禁止行驶！";
	}
	return restrictions;
}
