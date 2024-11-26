function getPrize(randomNum) {
	if (randomNum < 0.01) {
		return "特等奖";
	} else if (randomNum < 0.05) {
		return "一等奖";
	} else if (randomNum < 0.1) {
		return "二等奖";
	} else if (randomNum < 0.2) {
		return "三等奖";
	} else if (randomNum < 0.3) {
		return "鼓励奖";
	} else {
		return "下次努力";
	}
}

function abc() {
	randomNum = Math.random();
	const prize = getPrize(randomNum);

	document.write(`上次抽得奖项：${prize}`);
}
