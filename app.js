const sinCalc = num => Math.sin(num).toFixed(2);
const cosCalc = num => Math.cos(num).toFixed(2);
const tanCalc = num => Math.tan(num).toFixed(2);

const input = document.querySelector('.input');
const container = document.querySelector('.result-container');
const p = document.createElement('p');
container.appendChild(p);

const btn = document.querySelector('.btn-submit')
btn.addEventListener('click', angle => {
  angle = input.value;

  if (angle !== '') {
    if ( document.querySelector('.sinAngle' ).checked == true ) {
      p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${sinCalc(angle)}</span>`;
      document.querySelector('.sinAngle' ).checked = false;
    } 
    else if ( document.querySelector('.cosAngle' ).checked == true ) {
      p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${cosCalc(angle)}</span>`;
      document.querySelector('.cosAngle' ).checked = false;
    } 
    else if (document.querySelector( '.tanAngle').checked == true ) {
      p.innerHTML = `The Cos of <span>${angle}º</span> is <span>${tanCalc(angle)}</span>`;
      document.querySelector('.tanAngle').checked = false;
    } 
    else if ( document.querySelector('.allAngle').checked == true ) {
      p.innerHTML = `The angle <span>${angle}º</span> respectivily is: <span>${sinCalc(angle)}</span>, <span>${cosCalc(angle)}</span>, <span>${tanCalc(angle)}</span>`;
      document.querySelector('.allAngle').checked = false ;
    } else { 
        alert('CHOOSE AN ANGLE OPTION!');
      }
  } else {
      alert('PUT A NUMBER ON INPUT!')
  }
  input.value = '';
})

