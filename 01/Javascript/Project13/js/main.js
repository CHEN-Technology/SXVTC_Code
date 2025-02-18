window.onload = function atmSimulation() {
	const correctPassword = "123456"; // 设置正确的密码
	let attempts = 3; // 允许的尝试次数

	while (attempts > 0) {
		let password = prompt("请输入密码：");

		if (password == correctPassword) {
			alert("密码正确，欢迎使用ATM");

			// 进入操作选择
			chooseOperation();
			return; // 正确后退出函数
		} else {
			attempts--;
			if (attempts == 0) {
				alert("您已输入错误密码三次，程序结束。");
			}
			alert(`您还有 ${attempts} 次机会.`);
		}
	}

	alert("您已输入错误密码三次，程序结束。");
};

function chooseOperation() {
	let userInput = prompt(
		"请选择操作编号：\n1-查询\n2-存款\n3-取款\n4-转账\n5-退卡"
	);

	switch (userInput) {
		case "1":
			alert("进行查询操作");
			break;
		case "2":
			alert("进行存款操作");
			break;
		case "3":
			alert("进行取款操作");
			break;
		case "4":
			alert("进行转账操作");
			break;
		case "5":
			alert("退卡，感谢使用");
			break;
		default:
			alert("输入无效，请重新输入");
			chooseOperation(); // 递归调用，直到用户输入有效操作
			break;
	}
}
