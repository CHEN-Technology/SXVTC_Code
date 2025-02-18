const fruitPrice = {
	apple: 3.5,
	pear: 3,
	durian: 5.5,
	mangosteen: 12,
	kiwifruit: 8.5,
};

function getFruitPrice() {
	const fruitName = document.getElementById("fruitName").value;
	const price = document.getElementById("price");
	switch (fruitName) {
		case "苹果":
			price.innerHTML = fruitPrice.apple + "元/斤";
			break;
		case "香梨":
			price.innerHTML = fruitPrice.pear + "元/斤";
			break;
		case "榴莲":
			price.innerHTML = fruitPrice.durian + "元/斤";
			break;
		case "山竹":
			price.innerHTML = fruitPrice.mangosteen + "元/斤";
			break;
		case "猕猴桃":
			price.innerHTML = fruitPrice.kiwifruit + "元/斤";
			break;
		case "":
			alert("请选择商品!");
			break;
		default:
			price.innerHTML = "暂无该商品!";
			break;
	}
}
