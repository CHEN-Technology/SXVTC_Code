let arr = new Array(10);
let sum = 0;

function compare(arr) {
	let max = (min = arr[0]);
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	let result = { max, min };
	return result;
}

function inputScore(i) {
	if (i >= 10) {
		// console.log("每个人的成绩：" + arr.join(", "));
		console.log("平均分：" + (sum / 10).toFixed(2));
		// console.log("最高分：" + Math.max(...arr));
		console.log("最高分：" + compare(arr).max);
		// console.log("最低分：" + Math.min(...arr));
		console.log("最低分：" + compare(arr).min);
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
