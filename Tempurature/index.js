//FAHRENHEIT PART
const fahrenheit2 = document.querySelector(".fahrenheit2");
const calculatebutton = document.querySelector("#calculatebutton");
const result = document.querySelector(".result");
var CON, fahrenheit;

//CELSIUS PART
const celsius2 = document.querySelector(".celsius2");
const calculate1 = document.querySelector("#calculate1");
const result1 = document.querySelector(".result1");
var CON1, celsius;

//KELVIN PART
const Kelvin2 = document.querySelector(".Kelvin2");
const calculate2 = document.querySelector("#calculate2");
const result2 = document.querySelector(".result2");
const result3 = document.querySelector(".result3");
var CON2, CON3, Kelvin;

//
//CON is convert
//.toFixed(2) is to rond off the 2 decimals only
//

//The formula for Fahrenheit to Celsius
calculatebutton.addEventListener("click", () => {
  fahrenheit = fahrenheit2.value;
  CON = (((fahrenheit - 32) * 5) / 9).toFixed(2);
  result.innerText = CON;
});

//  The formula for Celsius to Fahrenheit
calculate1.addEventListener("click", () => {
  celsius = celsius2.value;
  CON1 = ((celsius * 9) / 5 + 32).toFixed(2);
  result1.innerText = CON1;
});

// The formula for Kelvin= Celsius/Fahrenheit
calculate2.addEventListener("click", () => {
  Kelvin = Kelvin2.value;
  CON2 = (Kelvin - 273.15).toFixed(2);
  CON3 = (((Kelvin - 273.15) * 9) / 5 + 32).toFixed(2);
  result2.innerText = CON2;
  result3.innerText = CON3;
});
