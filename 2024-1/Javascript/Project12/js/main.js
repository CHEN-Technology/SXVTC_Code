window.onload = function atmOperations() {
	let userInput = prompt(
		"请输入操作编号：\n1-查询\n2-存款\n3-取款\n4-转账\n5-退卡"
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
			atmOperations(); // 递归调用，直到用户输入有效操作
			break;
	}
};
