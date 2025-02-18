function downloadFile(url, procedureCallback, successCallback) {
	let isDownload = confirm("需要从" + url + "下载文件吗？");
	if (isDownload) {
		let downloadProgress = 0;
		const intervalId = setInterval(() => {
			downloadProgress += 5;
			procedureCallback(downloadProgress);
			if (downloadProgress == 100) {
				clearInterval(intervalId);
				successCallback();
			}
		}, 100);
	}
}

const url = "https://www.example.com/file.zip";

downloadFile(
	url,
	(progress) => {
		document.write(`下载进度：${progress}% <br />`);
	},
	() => {
		document.write(`文件下载完成`);
	}
);
