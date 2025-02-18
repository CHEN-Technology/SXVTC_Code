let i = 0;
let n = 0;
while (i < 5) {
	i++;

	if (i == 3) {
		continue;
	}
	n += i;
	console.log(n); // 前两次循环正常输出，第三次i=3时，continue语句跳过输出回到循环开头，执行i++进行第四次循环，输出7，循环结束，程序结束
}

console.log("----------------我是分割线--------------");

i = 0;
n = 0;

while (i < 5) {
	i++;

	if (i == 3) {
		break;
	}
	n += i;
	console.log(n); // 前两次循环正常输出，第三次i=3时，break语句跳出循环,程序结束
}

console.log("----------------我是分割线--------------");

i = 0;
n = 0;
for (i = 0; i < 5; i++) {
	if (i == 3) {
		continue;
	}
	n += i;
	console.log(n); // 前两次循环正常输出，第三次i=3时，continue语句跳过输出回到循环更新语句，更新i后进行第四次循环，输出7，循环结束，程序结束
}

console.log("----------------我是分割线--------------");

i = 0;
n = 0;
for (i = 0; i < 5; i++) {
	if (i == 3) {
		break;
	}
	n += i;
	console.log(n); // 前两次循环正常输出，第三次i=3时，break语句跳出循环,程序结束
}
