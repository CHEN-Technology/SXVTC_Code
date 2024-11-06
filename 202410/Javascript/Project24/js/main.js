let arr1 = ["张三", "李四", "王五", "赵六", "田七"];
console.log("参加学校朗诵诗会的同学有：" + arr1);
let arr2 = ["张三", "钱二", "蒋一", "田七", "刘六"];
console.log("参加学校合唱比赛的同学有：" + arr2);

for (i = 0; i < arr1.length; i++) {
	for (j = 0; j < arr2.length; j++) {
		if (arr1[i] == arr2[j]) {
			arr1.splice(i, 1);
		}
	}
}

let arr3 = arr1.concat(arr2);
console.log("所有参加的同学有：" + arr3);
