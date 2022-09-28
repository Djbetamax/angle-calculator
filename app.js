const sin = angle => Math.sin(angle).toFixed(2);
const cos = angle => Math.cos(angle).toFixed(2);
const tan = angle => Math.tan(angle).toFixed(2);

const input = document.querySelector('.inputValue');

const btn = document.querySelector('.btn-submit')
btn.addEventListener('click', function (angle) {
  const sinBtn = document.querySelector('.sinAngle');
  const cosBtn = document.querySelector('.cosAngle');
  const tanBtn = document.querySelector('.tanAngle');
  const allBtn = document.querySelector('.allAngle');
  angle = input.value;
  
  if (sinBtn.checked == true) {
    console.log(sin(angle));
    input.value = '';
  } else if (cosBtn.checked == true) {
      console.log(cos(angle));
    } else if (tanBtn.checked == true) {
        console.log(tan(angle));
      } else if (allBtn.checked == true) {
          console.log(sin(angle));
          console.log(cos(angle));
          console.log(tan(angle));
        } else { 
            alert('CHOOSE AN ANGLE OPTION!')
          }
})

