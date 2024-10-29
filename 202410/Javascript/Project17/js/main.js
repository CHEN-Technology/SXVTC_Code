for (let num = 100; num < 1000; num++) {
	let a = Math.floor(num / 100);
	let b = Math.floor((num % 100) / 10);
	let c = num % 10;

	if (a ** 3 + b ** 3 + c ** 3 === num) {
		console.log(num);
	}
}
