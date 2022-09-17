// https://www.omnicalculator.com/conversion/gallons-to-cubic-feet

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const cubicFeetRadio = document.getElementById('cubicFeetRadio');
const gallonsRadio = document.getElementById('gallonsRadio');

let cubicFeet;
let gallons = v; 

// labels of the inpust
const variable = document.getElementById('variable');

cubicFeetRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Cubic Feet';
  cubicFeet = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(cubicFeetRadio.checked)
    result.textContent = `Cubic Feet = ${computecubicFeet().toFixed(5)}`;

  else if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;
})

// calculation

function computecubicFeet() {
  return Number(gallons.value) / 7.48;
}

function computegallons() {
  return Number(cubicFeet.value) * 7.48;
}