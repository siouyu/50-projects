const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallCups.forEach((cup, index) => {
	// console.log(index);
	cup.addEventListener("click", () => highLightCups(index));
});

function highLightCups(index) {
	// console.log(index);
	// 先檢查給定索引處的小杯子元素是否已擁有 "full" 這個 CSS 類別，並且該小杯子的下一個兄弟元素沒有 "full" 這個類別。
	if (
		smallCups[index].classList.contains("full") &&
		!smallCups[index].nextElementSibling.classList.contains("full")
	) {
		index--;
	}

	smallCups.forEach((cup, index2) => {
		if (index2 <= index) {
			cup.classList.add("full");
		} else {
			cup.classList.remove("full");
		}
	});
	updateBigCup();
}

function updateBigCup() {
	const fullCups = document.querySelectorAll(".cup-small.full").length;
	// console.log(fullCups);
	const totalCups = smallCups.length;
	// console.log(totalCups);
	if (fullCups === 0) {
		percentage.style.visibility = "hidden";
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = "visible";
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}
	if (fullCups === totalCups) {
		remained.style.visibility = "hidden";
		remained.style.height = 0;
	} else {
		remained.style.visibility = "visible";
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
