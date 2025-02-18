function simpleCalculator(operation, num1, num2) {
	if (
		operation == "+" ||
		operation == "-" ||
		operation == "*" ||
		operation == "/" ||
		operation == "%"
	) {
		switch (operation) {
			case "+":
				return num1 + num2;
			case "-":
				return num1 - num2;
			case "*":
				return num1 * num2;
			case "/":
				if (num2 === 0) {
					return "除数不能为0";
				} else {
					return num1 / num2;
				}
			case "%":
				return num1 % num2;
			default:
				return "计算错误";
		}
	} else {
		return "请输入正确的运算符号";
	}
}

window.onload = function calculate() {
	let userInput = {};

	userInput.operation = prompt("请输入运算符号（+-*/%）：", "");

	userInput.num1 = parseFloat(prompt("请输入第一个数字：", ""));
	userInput.num2 = parseFloat(prompt("请输入第二个数字：", ""));

	if (!isNaN(userInput.num1) && !isNaN(userInput.num2)) {
		const result = simpleCalculator(
			userInput.operation,
			userInput.num1,
			userInput.num2
		);

		alert(
			userInput.num1 +
				" " +
				userInput.operation +
				" " +
				userInput.num2 +
				" = " +
				result
		);

		if (
			result === "除数不能为0" ||
			result === "计算错误" ||
			result === "请输入正确的运算符号"
		) {
			calculate();
		}

		let go_on = confirm("是否继续计算？");
		if (go_on) {
			calculate();
		}
	} else {
		alert("请输入正确的数字！");
		calculate();
	}
};
