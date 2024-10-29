// for循环
let money = 10000;
let year = 1;

for (year = 1; year <= 5; year++) {
	money *= 1 + 0.03;
}

console.log("五年后小明能拿到" + money.toFixed(2) + "元");

// while循环
money = 10000;
year = 1;

while (year <= 5) {
	money *= 1 + 0.03;
	year++;
}

console.log("五年后小明能拿到" + money.toFixed(2) + "元");

// do-while循环
money = 10000;
year = 1;

do {
	money *= 1 + 0.03;
	year++;
} while (year <= 5);

console.log("五年后小明能拿到" + money.toFixed(2) + "元");
