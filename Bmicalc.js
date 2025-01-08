const display = document.getElementById("display");
const weight = parseFloat(document.getElementById("weight").value);
const height = parseFloat(document.getElementById("height").value);
const calculate=document.getElementById("calcbtn");
const clear=document.getElementById("clrbtn");

calculate.onclick =  displaybmi;
function displaybmi(){
//const display = document.getElementById("display");
//const weight = parseFloat(document.getElementById("weight").value);
//const height = parseFloat(document.getElementById("height").value);
//const result  = (weight/(height*height)) * 10000;
display.value = result;


}

