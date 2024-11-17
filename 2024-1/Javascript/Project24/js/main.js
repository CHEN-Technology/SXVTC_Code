let arr1 = ["张三", "李四", "王五", "赵六", "田七"];
console.log("参加学校朗诵诗会的同学有：" + arr1.join(", "));
let arr2 = ["张三", "钱二", "蒋一", "田七", "刘六"];
console.log("参加学校合唱比赛的同学有：" + arr2.join(", "));
let arr3 = arr1.concat(arr2);
let resArr = [];

for (let i = 0; i < arr3.length; i++) {
	let flag = false;
	for (let j = i + 1; j < arr3.length; j++) {
		if (arr3[i] === arr3[j]) {
			flag = true;
			break;
		}
	}
	if (!flag) {
		resArr.push(arr3[i]);
	}
}

console.log("所有参加的同学有：" + resArr.join(", "));
