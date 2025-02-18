let num = 0;

for (let i = 1; i <= 20; i++) {
	for (let j = 1; j <= 20; j++) {
		if (50 * i + 80 * j == 1360) {
			num++;
			console.log(
				"可能" + num + "：\n50分邮票" + i + "张，80分邮票" + j + "张"
			);
		}
	}
}
