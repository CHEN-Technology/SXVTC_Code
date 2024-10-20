function calculate() {
	let num = parseInt(document.getElementById("num").value);
	num % 2 == 0
		? (document.getElementById("result").innerHTML = "True")
		: (document.getElementById("result").innerHTML = "False");
}
