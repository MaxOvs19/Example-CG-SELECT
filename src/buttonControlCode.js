const copy1 = document.getElementById("cp1");
const copy2 = document.getElementById("cp2");
const copy3 = document.getElementById("cp3");
const copy4 = document.getElementById("cp4");
const copy5 = document.getElementById("cp5");
const copy6 = document.getElementById("cp6");
const copy7 = document.getElementById("cp7");
const copy8 = document.getElementById("cp8");

const firstBtn = document.getElementById("first");
const codeFirst = document.getElementById("codeFirst"); // cp1

copyCode(copy1, codeFirst);

const secondBtn = document.getElementById("second");
const codeSecond = document.getElementById("codeSecond"); // cp4

copyCode(copy4, codeSecond);

const thirdBtn = document.getElementById("third");
const codeThird = document.getElementById("codeThird"); // cp5

copyCode(copy5, codeThird);

const fourthBtn = document.getElementById("fourth");
const codeFourth = document.getElementById("codeFourth"); // cp7

copyCode(copy7, codeFourth);

const fifthBtn = document.getElementById("fifth");
const codeFifth = document.getElementById("codeFifth"); // cp8

copyCode(copy8, codeFifth);

const six = document.getElementById("six");
const codeSix = document.getElementById("codeSix"); // cp3

copyCode(copy3, codeSix);

const Native = document.getElementById("Native");
const codeNative = document.getElementById("codeNative"); // cp2

copyCode(copy2, codeNative);

const callback = document.getElementById("callback");
const codeCallback = document.getElementById("codeCallback"); // cp6

copyCode(copy6, codeCallback);

toggleCode(firstBtn, codeFirst);
toggleCode(secondBtn, codeSecond);
toggleCode(thirdBtn, codeThird);
toggleCode(fourthBtn, codeFourth);
toggleCode(fifthBtn, codeFifth);
toggleCode(six, codeSix);
toggleCode(Native, codeNative);
toggleCode(callback, codeCallback);

function copyCode(button, elementCopy) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(elementCopy.textContent);
  });
}

function toggleCode(button, elementCopy) {
  button.addEventListener("click", () => {
    elementCopy.classList.toggle("active");
  });
}
