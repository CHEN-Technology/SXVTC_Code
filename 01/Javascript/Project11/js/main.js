window.onload = function () {
	const elementTable1 = document.getElementById("table1");
	for (let i = 9; i >= 1; i--) {
		const row = elementTable1.insertRow(); // 创建新行
		for (let j = 1; j <= i; j++) {
			const cell = row.insertCell(); // 创建新单元格
			cell.textContent = `${j} x ${i} = ${j * i}`; // 填充单元格内容
		}
	}

	const elementTable2 = document.getElementById("table2");
	for (let i = 1; i <= 9; i++) {
		const row = elementTable2.insertRow(); // 创建新行
		// 添加空单元格
		for (let k = 9; k > i; k--) {
			const emptyCell = row.insertCell(); // 插入空单元格
			emptyCell.classList.add("empty-cell"); // 添加空单元格类
		}
		// 插入实际的乘法单元格
		for (let j = 1; j <= i; j++) {
			const cell = row.insertCell();
			cell.textContent = `${j} x ${i} = ${j * i}`; // 填充单元格内容
		}
	}
};
