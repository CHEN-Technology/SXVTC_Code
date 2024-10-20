let seats1A = "小明";
let seats2A = "小红";
let seatsTemp = "临时座位";

function rearrangeSeats() {
	console.log("开始调整座位");

	console.log(`${seats1A}起立，去seatsTemp`);
	seatsTemp = seats1A;

	console.log(`${seats2A}起立，去seats1A`);
	seats1A = seats2A;

	console.log(`${seatsTemp}起立，去seats2A`);
	seats2A = seatsTemp;
	seatsTemp = "";

	console.log("调整结束");
	console.log(
		`当前座位：seats1A=${seats1A}, seats2A=${seats2A}, seatsTemp=${seatsTemp}`
	);
}

rearrangeSeats();
