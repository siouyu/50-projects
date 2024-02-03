// const toggles = document.querySelectorAll(".faq-toggle");

// toggles.forEach((toggle) => {
// 	toggle.addEventListener("click", () => {
// 		toggle.parentNode.classList.toggle("active");
// 	});
// });

const toggles = document.querySelectorAll("faq-toggle");

toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		toggle.parentNode.classList.toggle("active");
		// classList.toggle() 方法用於在元素的類別列表中添加或刪除指定的類別
	});
});
