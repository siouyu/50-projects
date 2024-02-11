const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
	code.addEventListener("keydown", (e) => {
		if (e.key >= 0 && e.key <= 9) {
			codes[idx].value = "";
			setTimeout(() => codes[idx + 1].focus(), 10); // 確保按鍵事件和輸入框的值已經同步
		} else if (e.key === "Backspace") {
			setTimeout(() => codes[idx - 1].focus(), 10);
		}
	});
});
