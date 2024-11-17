function game() {
	let x = Math.floor(Math.random() * 100);
	let y = Math.floor(Math.random() * 100);
	const answer = x + y;
	let result = parseInt(prompt(x + "+" + y + "="));
	if (answer == result) {
		let go_on = confirm("答对！继续测试吗？");
		if (go_on == true) {
			game();
		} else {
			return;
		}
	} else {
		alert("错误！正确答案为" + answer);
		game();
	}
}
game();
