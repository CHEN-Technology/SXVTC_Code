var gender = prompt("请输入您的性别(男/女)");
var age = prompt("请输入您的年龄");
var weight = prompt("请输入您的体重(单位:kg)");
var height = prompt("请输入您的身高(单位:m)");
var BMI = weight / (height * height);
var sex = gender == "男" ? 1 : 0;
var BFR = (1.2 * BMI + 0.23 * age - 5.4 - 10.8 * sex).toFixed(2);
var result;
if (sex == 1) {
	if (BFR >= 15 && BFR <= 18) result = "正常";
	else result = "不在正常范围，请加强锻炼";
} else {
	if (BFR >= 25 && BFR <= 28) result = "正常";
	else result = "不在正常范围，请加强锻炼";
}
alert("您的体脂率是" + BFR + "%，" + result);
