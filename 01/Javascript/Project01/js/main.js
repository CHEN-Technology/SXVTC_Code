// 处理火箭飞行的函数
function fly() {
	self.setInterval("fly_do()", 10); // 每隔10毫秒调用一次fly_do()函数
}

// 控制火箭向上移动的具体实现函数
function fly_do() {
	var rocket = document.getElementById("rockets"); // 获取ID为rocket的元素
	var bottomf = rocket.style.bottom; // 获取rocket元素的bottom样式属性值
	bottomf = parseInt(bottomf); // 将bottomf中的整数提取重新赋值给bottomf
	if (!bottomf) {
		// 如果bottomf不存在，则将bottomf设置为0
		bottomf = 0;
	}
	bottomf++; // 将bottomf加1
	rocket.style.bottom = bottomf + "px"; // 设置rocket元素的bottom样式属性值为最终的bottomf值加上"px"单位
}
