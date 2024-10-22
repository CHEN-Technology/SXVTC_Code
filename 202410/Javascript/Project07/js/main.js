function calculateBFR() {
	var elementAge = document.getElementById("age"); //获取年龄输入框
	var elementWeight = document.getElementById("weight"); //获取体重输入框
	var elementHeight = document.getElementById("height"); //获取身高输入框
	if (elementAge.value && elementWeight.value && elementHeight.value) {
		var elementGender = document.getElementById("select-gender"); //获取性别选择框
		var gender = elementGender.options[elementGender.selectedIndex].text; //获取选择的性别
		// console.log(gender); //打印选择的性别
		var age = parseInt(document.getElementById("age").value); //获取年龄
		// console.log(age); //打印年龄
		var weight = parseInt(document.getElementById("weight").value); //获取体重
		// console.log(weight); //打印体重
		var height = parseInt(document.getElementById("height").value) / 100; //获取身高
		// console.log(height); //打印身高
		var BMI = weight / (height * height); //计算BMI
		var sex = gender == "男" ? 1 : 0; //判断性别
		var BFR = 1.2 * BMI + 0.23 * age - 5.4 - 10.8 * sex; //计算BFR
		document.getElementById("bfr").innerHTML = BFR.toFixed(2) + "%"; //显示BFR
		document.getElementById("bfr").style.color =
			BFR < 18.5 ? "red" : BFR < 25 ? "green" : "blue"; //显示BFR颜色
	} else {
		alert("请填写所有信息");
	}
}
