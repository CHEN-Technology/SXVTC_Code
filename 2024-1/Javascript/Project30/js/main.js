function getMAX(x, y) {
	if (x > y) {
		return x;
	} else {
		return y;
	}
}

let userInput = {};

for (let i = 0; i < 2; i++) {
	userInput[i] = prompt("请输入两个数字：");
}

document.write("您输入的第一个数字为：" + userInput[0] + "<br />");
document.write("您输入的第二个数字为：" + userInput[1] + "<br />");
document.write("较大值为：" + getMAX(userInput[0], userInput[1]));
