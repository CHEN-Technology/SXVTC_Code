function countDown(n) {
	if (n > 0) {
		console.log(n);
		countDown(n - 1);
	}
}

countDown(5);
