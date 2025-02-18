const fruits = [
	{
		name: "香蕉",
		price: 3.5,
		isDiscounted: false,
	},
	{
		name: "苹果",
		price: 15.8,
		isDiscounted: true,
	},
	{
		name: "甘蔗",
		price: 9.9,
		isDiscounted: false,
	},
];

fruits.forEach((fruit) => {
	console.log(fruit.name + "  " + fruit.price + "  " + fruit.isDiscounted);
});
