window.onload = function () {
	let num = prompt("请输入一个数字:");
	draw(num);

	function draw(num) {
		const elementTable = document.getElementById("table");
		for (let i = 1; i <= num; i++) {
			// 控制台输出
			console.log(" ".repeat(num - i) + "*".repeat(i));

			// 页面输出
			// 创建新行
			const row = elementTable.insertRow(); // 创建新行
			// 添加空单元格
			for (let j = num; j > i; j--) {
				const emptyCell = row.insertCell(); // 插入空单元格
			}
			for (let j = 1; j <= i; j++) {
				const cell = row.insertCell(); // 插入单元格
				cell.innerHTML = "*"; // 单元格内容为*
			}
		}
	}
};
