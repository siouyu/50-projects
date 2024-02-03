const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const x = e.clientX;
		const y = e.clientY;
		// console.log(x, y); // 抓取滑鼠在按鈕上的點擊位置

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;
		// console.log(buttonTop, buttonLeft); // 得到按鈕本身的位置

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;
		// console.log(xInside, yInside);

		const circle = document.createElement("span");
		circle.classList.add("circle");
		circle.style.top = yInside + "px";
		circle.style.left = xInside + "px";
		this.appendChild(circle); // this 不可以用箭頭函數

		setTimeout(() => circle.remove(), 500);
	});
});
