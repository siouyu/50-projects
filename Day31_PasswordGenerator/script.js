// Math.floor() 會對所有小數進行無條件捨去到比自身小的最大整數
// Math.random() 會隨機產生 0~1 之間的小數
// 所以 Math.floor(Math.random()) 永遠會得到 0
const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const getRandomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
	const textArea = document.createElement("textArea");
	const password = resultEl.innerText;

	if (!password) {
		return;
	}

	textArea.value = password;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand("copy");
	textArea.remove();
	alert("Password copied to clipboard!");
});

generateEl.addEventListener("click", () => {
	const length = +lengthEl.value; // + 將字串轉換為數字
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	// console.log(length, hasLower, hasUpper, hasNumber, hasSymbol);
	resultEl.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatePassword = "";
	const typesCount = lower + upper + number + symbol;
	// 創建一個物件陣列，並使用 filter 函式篩選出值為 true 的密碼類型
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);
	// console.log(typesArr);
	if (typesCount === 0) {
		return "";
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			// console.log(type);
			const funcName = Object.keys(type)[0];
			// console.log(funcName);
			generatePassword += getRandomFunc[funcName]();
		});
	}

	// 取得最終生成的密碼，並確保長度不會超過指定的長度
	const finalPassword = generatePassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// console.log(getRandomLower());

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// console.log(getRandomUpper());

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// console.log(getRandomNumber());

function getRandomSymbol() {
	const symbols = "!@#$%^&*(){}[]=<>/,.";
	return symbols[Math.floor(Math.random() * symbols.length)];
}
// console.log(getRandomSymbol());
