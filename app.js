const container = document.querySelector(".result-container");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn-submit");
const p = document.createElement("p");
container.appendChild(p);

const sin = document.querySelector(".sinAngle");
const cos = document.querySelector(".cosAngle");
const tan = document.querySelector(".tanAngle");

btn.addEventListener("click", (angle) => {
  angle = input.value;
  
	const sinCalc = () => {
    p.innerHTML = `The Sin of <span>${angle}º</span> is <span>${Math.sin(angle).toFixed(2)}</span>`
    sin.checked = false
  }
  const cosCalc = () => {
    p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${Math.cos(angle).toFixed(2)}</span>`
    cos.checked = false
  }
  const tanCalc = () => {
    p.innerHTML = `The Tan of <span>${angle}º</span> is <span>${Math.tan(angle).toFixed(2)}</span>`
		tan.checked = false
  }

	if (angle !== "") {
		if (sin.checked == true) {
      sinCalc();
		} else if (cos.checked == true) {
      cosCalc();
		} else if (tan.checked == true) {
      tanCalc();
		} else {
			alert("CHOOSE AN ANGLE OPTION!")
		}
	} else {
		alert("PUT A NUMBER ON INPUT!")
  }
  input.value = ""
})
