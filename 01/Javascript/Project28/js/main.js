const arr = [2, 2, 4, 5, 6, 6, 7, 7, 7, 10, 11, 12, 12];
let resArr = [];

for (let i = 0; i < arr.length; i++) {
	let flag = false;
	for (let j = i + 1; j < arr.length; j++) {
		if (arr[i] === arr[j]) {
			flag = true;
			break;
		}
	}
	if (!flag) {
		resArr.push(arr[i]);
	}
}

console.log(resArr);
