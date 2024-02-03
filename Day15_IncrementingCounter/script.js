const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
	counter.innerText = "0";
	const updateCounter = () => {
		const target = +counter.getAttribute("data-target"); // getAttribute 是 JavaScript 中的方法，用於獲取指定 HTML 元素的特定屬性的值
		// console.log(typeof target, target);
		const c = +counter.innerText; // 獲取當前計數器的數值， + 會將資料型態從string 轉為 number
		const increment = target / 200; // 計算每次更新的增量，這將影響計數器更新速度
		// console.log(increment);
		if (c < target) {
			counter.innerText = `${Math.ceil(c + increment)}`; // 在更新中，每次將數值增加 increment，使用 Math.ceil() 進行四捨五入取整數，並將新的數值賦予 counter.innerText。
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = target;
		}
	};
	updateCounter();
});
