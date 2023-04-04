const copy1 = document.getElementById("cp1");
const copy2 = document.getElementById("cp2");
const copy3 = document.getElementById("cp3");
const copy4 = document.getElementById("cp4");
const copy5 = document.getElementById("cp5");
const copy6 = document.getElementById("cp6");
const copy7 = document.getElementById("cp7");
const copy8 = document.getElementById("cp8");

const firstBtn = document.getElementById("first");
const codeFirst = document.getElementById("codeFirst");

copyCode(copy1, codeFirst);

const secondBtn = document.getElementById("second");
const codeSecond = document.getElementById("codeSecond");

copyCode(copy2, codeSecond);

const thirdBtn = document.getElementById("third");
const codeThird = document.getElementById("codeThird");

const fourthBtn = document.getElementById("fourth");
const codeFourth = document.getElementById("codeFourth");

const fifthBtn = document.getElementById("fifth");
const codeFifth = document.getElementById("codeFifth");

const six = document.getElementById("six");
const codeSix = document.getElementById("codeSix");

const Native = document.getElementById("Native");
const codeNative = document.getElementById("codeNative");

const callback = document.getElementById("callback");
const codeCallback = document.getElementById("codeCallback");

firstBtn.addEventListener("click", () => {
  codeFirst.classList.toggle("active");
});

secondBtn.addEventListener("click", () => {
  codeSecond.classList.toggle("active");
});

thirdBtn.addEventListener("click", () => {
  codeThird.classList.toggle("active");
});

fourthBtn.addEventListener("click", () => {
  codeFourth.classList.toggle("active");
});

fifthBtn.addEventListener("click", () => {
  codeFifth.classList.toggle("active");
});

six.addEventListener("click", () => {
  codeSix.classList.toggle("active");
});

Native.addEventListener("click", () => {
  codeNative.classList.toggle("active");
});

callback.addEventListener("click", () => {
  codeCallback.classList.toggle("active");
});

function copyCode(button, elementCopy) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(elementCopy.textContent);
  });
}
