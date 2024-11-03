let arr = new Array(10);
let sum = 0;

function inputScore(i) {
	if (i >= 10) {
		// console.log("每个人的成绩：" + arr.join(", "));
		console.log("平均分：" + (sum / 10).toFixed(2));
		console.log("最高分：" + Math.max(...arr).toFixed(2));
		console.log("最低分：" + Math.min(...arr).toFixed(2));
		return;
	}

	let score = parseFloat(prompt("请输入第" + (i + 1) + "个人的成绩:"));
	if (score >= 0 && score <= 100) {
		arr[i] = score;
		sum += arr[i];
		inputScore(i + 1);
	} else {
		alert("输入的成绩有误，请重新输入！");
		inputScore(i);
	}
}

inputScore(0);
