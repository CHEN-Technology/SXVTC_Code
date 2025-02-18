const users = [
	["Alice", 25],
	["Bob", 30],
	["Charlie", 35],
	["David", 40],
	["Eve", 45],
];

console.log("原数组: " + JSON.stringify(users));

let newArr = [];
let num = 0;

for (let i = 0; i < users.length; i++) {
	const age = users[i][1];
	if (age > 30) {
		num++;
		newArr.push(users[i]);
	}
}

console.log("新数组: " + JSON.stringify(newArr));

let max = (min = newArr[0][1]);

if (newArr.length > 0) {
	for (let i = 1; i < newArr.length; i++) {
		for (let j = 0; j < newArr.length - i; j++) {
			// console.log(newArr[j][1]);
			if (newArr[j][1] < newArr[j + 1][1]) {
				let tempName = newArr[j][0];
				let temp = newArr[j][1];
				newArr[j][0] = newArr[j + 1][0];
				newArr[j][1] = newArr[j + 1][1];
				newArr[j + 1][0] = tempName;
				newArr[j + 1][1] = temp;
			}
		}
	}
}
console.log("排序后数组: " + JSON.stringify(newArr));

if (newArr.length > 0) {
	for (let i = 0; i < newArr.length; i++) {
		newArr[i] = newArr[i].join(";");
	}
}
console.log("排序后数组(字符串): " + JSON.stringify(newArr));
