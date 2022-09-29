const sinCalc = angle => Math.sin(angle).toFixed(2);
const cosCalc = angle => Math.cos(angle).toFixed(2);
const tanCalc = angle => Math.tan(angle).toFixed(2);

const input = document.querySelector('.inputValue');
const container = document.querySelector('.result-container');
const p = document.createElement('p');
container.appendChild(p);

const btn = document.querySelector('.btn-submit')
btn.addEventListener('click', (angle, func)=> {
  angle = input.value;
  
  if ( document.querySelector('.sinAngle' ).checked == true) {
    p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${sinCalc(angle)}</span>`;
    document.querySelector('.sinAngle' ).checked = false
    input.value = '';
  } 
  else if ( document.querySelector('.cosAngle' ).checked == true) {
    p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${cosCalc(angle)}</span>`;
    document.querySelector('.cosAngle' ).checked = false
    input.value = '';
  } 
  else if (document.querySelector( '.tanAngle').checked == true ) {
    p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${tanCalc(angle)}</span>`;
    document.querySelector( '.tanAngle').checked = false
    input.value = '';
  } 
  else if ( document.querySelector('.allAngle').checked == true ) {
    p.innerHTML = `The angle <span>${angle}º</span> respectivily have: <span>${sinCalc(angle)}</span>, <span>${cosCalc(angle)}</span>, <span>${tanCalc(angle)}</span>`;
    document.querySelector('.allAngle').checked = false 
    input.value = '';
  } else { 
      alert('CHOOSE AN ANGLE OPTION!')
    }
})

