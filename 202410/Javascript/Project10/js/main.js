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
			if (number == "1" || number == "9") {
				restrictions = restrictions + "\n您输入的车牌号码已被禁止行驶！";
			} else {
				restrictions = restrictions + "\n您输入的车牌号码没有被禁止行驶！";
			}
			break;
		case 2:
			restrictions = "今天是周二，禁止行驶的车牌号码为：2,8";
			if (number == "2" || number == "8") {
				restrictions = restrictions + "\n您输入的车牌号码已被禁止行驶！";
			} else {
				restrictions = restrictions + "\n您输入的车牌号码没有被禁止行驶！";
			}
			break;
		case 3:
			restrictions = "今天是周三，禁止行驶的车牌号码为：3,7";
			if (number == "3" || number == "7") {
				restrictions = restrictions + "\n您输入的车牌号码已被禁止行驶！";
			} else {
				restrictions = restrictions + "\n您输入的车牌号码没有被禁止行驶！";
			}
			break;
		case 4:
			restrictions = "今天是周四，禁止行驶的车牌号码为：4,6";
			if (number == "4" || number == "6") {
				restrictions = restrictions + "\n您输入的车牌号码已被禁止行驶！";
			} else {
				restrictions = restrictions + "\n您输入的车牌号码没有被禁止行驶！";
			}
			break;
		case 5:
			restrictions = "今天是周五，禁止行驶的车牌号码为：5,0";
			if (number == "5" || number == "0") {
				restrictions = restrictions + "\n您输入的车牌号码已被禁止行驶！";
			} else {
				restrictions = restrictions + "\n您输入的车牌号码没有被禁止行驶！";
			}
			break;
		default:
			restrictions = "今天是周末，没有禁止行驶的车牌号码";
			break;
	}
	alert(restrictions);
}
