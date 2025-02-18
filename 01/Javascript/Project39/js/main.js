window.onload = function () {
	const p = document.getElementsByTagName("p");
	console.log("所有p标签");
	console.log(p);

	const p1 = document.getElementById("title");
	console.log("id为title的p标签");
	console.log(p1);

	const p2 = document.getElementsByClassName("title");
	console.log("class为title的p标签");
	console.log(p2);

	const p3 = document.getElementsByName("title");
	console.log("name为title的p标签");
	console.log(p3);

	const p4 = document.querySelector(".title");
	console.log("第一个p标签");
	console.log(p4);

	const p5 = document.querySelectorAll(".title");
	console.log("所有p标签");
	console.log(p5);
};
