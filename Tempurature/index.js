const fahrenheit2 = document.querySelector(".fahrenheit2");
const celsius2 = document.querySelector(".celsius2");
const calculatebutton = document.querySelector(".calculatebutton");
const calculate= document.querySelector(".calculate");
const result = document.querySelector(".result");
const result1 = document.querySelector(".result1");
var CON , fahrenheit;
var CON1 , celsius;


//The formula for Fahrenheit to Celsius
calculatebutton.addEventListener("click", ()=> {

    fahrenheit = fahrenheit2.value ;
    CON = ((fahrenheit - 32) / 1.8);
    result.innerText = CON ;

   
});
//  The formula for Celsius to Fahrenheit
calculate.addEventListener("click", ()=> {
   
       celsius = celsius2.value ;
       CON11 = ((celsius * 1.8) + 32);
       result1.innerText = CON1 ;

});