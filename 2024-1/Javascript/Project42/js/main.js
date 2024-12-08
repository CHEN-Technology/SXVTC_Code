window.onload = function () {
	const loginInput = document.getElementById("loginInput");
	let password = "";

	loginInput.addEventListener("input", () => {
		const currentLength = loginInput.value.length;

		if (currentLength > password.length) {
			const newChar = loginInput.value.charAt(currentLength - 1);
			password += newChar;
		} else {
			password = password.slice(0, -1);
		}

		console.log(password);
		loginInput.value = "*".repeat(currentLength);
	});

	loginInput.addEventListener("mouseover", () => {
		loginInput.value = password;
	});

	loginInput.addEventListener("mouseout", () => {
		loginInput.value = "*".repeat(password.length);
	});
};
