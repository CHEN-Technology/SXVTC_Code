function student(studentId, name) {
	this.studentId = studentId;
	this.name = name;
}

const clazz = {
	className: "班级",
	teacher: "张老师",
	students: [new student(241010101, "王五"), new student(241010102, "赵六")],
	launchMeeting: function (time, place) {
		const studentList = this.students
			.map((student) => student.studentId + student.name)
			.join(" ");
		console.log(
			`班主任${this.teacher}在${time}，${place}给学生[${studentList}]开班会`
		);
	},
};

clazz.launchMeeting("2024年1月1日", "图新楼407");
