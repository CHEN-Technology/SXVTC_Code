let balance = 1000;

window.onload = function start() {
	document.getElementById("balance").innerHTML = balance;
};

function deposit() {
	let money = parseFloat(document.getElementById("amount").value);
	if (isNaN(money) || money <= 0) {
		alert("请输入有效的存款金额");
		return;
	}
	balance += money;
	document.getElementById("balance").innerHTML = balance;
}

function withdrawal() {
	let money = parseFloat(document.getElementById("amount").value);
	if (isNaN(money) || money >= 0) {
		alert("请输入有效的取款金额");
		return;
	}
	if (balance + money < 0) {
		alert("余额不足");
		return;
	}
	balance += money;
	document.getElementById("balance").innerHTML = balance;
}
