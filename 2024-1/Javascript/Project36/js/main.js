function newYear(year) {
	setInterval(() => {
		const date = new Date();
		const newYear = new Date(`${year}-01-01 00:00:00`);
		const timeDiff = newYear - date;
		const daysDiff = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
		const hoursDiff = Math.floor((timeDiff / 1000 / 60 / 60) % 24);
		const minutesDiff = Math.floor((timeDiff / 1000 / 60) % 60);
		const secondsDiff = Math.floor((timeDiff / 1000) % 60);

		document.write(
			`距离新年${year}年，还有${daysDiff}天${hoursDiff}小时${minutesDiff}分钟${secondsDiff}秒:<br />`
		);
	}, 1000);
}

newYear(2025);
