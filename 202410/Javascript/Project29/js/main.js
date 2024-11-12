const arr1 = [3, 6, 9, 2, 5, 7];
const arr2 = [0, 2, 6, 8, 10];
const mergedArr = arr1.concat(arr2);
let resArr = [];

for (let i = 0; i < mergedArr.length; i++) {
	let flag = false;
	for (let j = i + 1; j < mergedArr.length; j++) {
		if (mergedArr[i] === mergedArr[j]) {
			flag = true;
			break;
		}
	}
	if (!flag) {
		resArr.push(mergedArr[i]);
	}
}

for (let i = 1; i < resArr.length; i++) {
	for (let j = 0; j < resArr.length - i; j++) {
		if (resArr[j] > resArr[j + 1]) {
			let temp = resArr[j];
			resArr[j] = resArr[j + 1];
			resArr[j + 1] = temp;
		}
	}
}

console.log(resArr);
