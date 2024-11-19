window.onload = function () {
	let list1 = document.getElementById("list1");

	for (let i = 1; i < list1.children.length; i++) {
		for (let j = 0; j < list1.children.length - i; j++) {
			if (
				parseInt(list1.children.item(j).innerHTML) >
				parseInt(list1.children.item(j + 1).innerHTML)
			) {
				let temp = list1.children.item(j).innerHTML;
				list1.children.item(j).innerHTML = list1.children.item(j + 1).innerHTML;
				list1.children.item(j + 1).innerHTML = temp;
			}
		}
	}

	let list2 = document.getElementById("list2");

	for (let i = 1; i < list2.children.length; i++) {
		for (let j = 0; j < list2.children.length - i; j++) {
			if (
				list2.children.item(j).innerHTML > list2.children.item(j + 1).innerHTML
			) {
				let temp = list2.children.item(j).innerHTML;
				list2.children.item(j).innerHTML = list2.children.item(j + 1).innerHTML;
				list2.children.item(j + 1).innerHTML = temp;
			}
		}
	}
};
