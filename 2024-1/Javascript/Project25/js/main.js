let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = prompt("请您输入第" + (i + 1) + "行第" + (j + 1) + "列的数字:");
	}
}

for (let i = 0; i < 3; i++) {
	document.write("|");
	for (let j = 0; j < 3; j++) {
		document.write(arr[i][j] + " ");
	}
	document.write("|<br>");
}

for (let i = 0; i < 3; i++) {
	let arr2 = [new Array(3), new Array(3), new Array(3)];
	arr2[0][i] = arr[0][i];
	arr[0][i] = arr[2][i];
	arr[2][i] = arr2[0][i];
}

document.write("<hr>");

for (let i = 0; i < 3; i++) {
	document.write("|");
	for (let j = 0; j < 3; j++) {
		document.write(arr[i][j] + " ");
	}
	document.write("|<br>");
}
