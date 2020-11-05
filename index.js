let gVal = 0;
let default_composer = (x) => x;
let composer = default_composer;


const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

const getVal = () => Number(display.textContent);
const setVal = (val) => display.textContent = val;

const clear = () => {
	console.log('cleared');
	display.textContent = "0";
}

const reset = (_) => {
	clear();
	composer = default_composer;
}

setVal("0");

const perform = {
	"number": (n) => {
		gVal = Number(display.textContent + n);
		setVal(String(gVal));
	},
	"operator": (o) => {
		console.log(o);
		const newVal = composer(getVal());
		composer = (number) => operations[o](newVal, number);
		gVal = newVal;
		clear();
	},
	"clear": reset,
	"equals": function (_) {
		c = getVal();
		console.log(composer);
		n = composer(c);
		setVal(n);
		gVal = 0;
		composer = default_composer;
		console.log(`c = ${c}, n = ${n}`);
	},
};

const operations = {
	"+": (a, b) => a + b,
	"−": (a, b) => a - b,
	"×": (a, b) => a * b,
	"÷": (a, b) => a / b,
}

buttons.addEventListener("click", (e) => {
	const target = e.target;
	const type = target.classList[0];
	const inner = target.textContent;

	try {
		perform[type](inner);
	} catch (e) {
		console.log('don\'t press on the gaps.');
	}

	console.log(composer)
});
