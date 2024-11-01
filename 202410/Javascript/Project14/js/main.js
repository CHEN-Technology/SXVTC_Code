score = prompt("请输入您的成绩: ");

if (score >= 0 && score <= 100) {
	switch (Math.floor(score / 10)) {
		case 10:
		case 9:
			alert("您的成绩分为优秀！");
			break;
		case 8:
			alert("您的成绩分为良好！");
			break;
		case 7:
			alert("您的成绩分为中等！");
			break;
		case 6:
			alert("您的成绩分为及格！");
			break;
		default:
			alert("您的成绩分为不及格！");
			break;
	}
} else {
	alert("您的成绩输入有误！");
}
