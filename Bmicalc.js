const display = document.getElementById("display");
const weight = parseFloat(document.getElementById("weight").value);
const height = parseFloat(document.getElementById("height").value);
const calculate=document.getElementById("calcbtn");
const clear=document.getElementById("clrbtn");



// function displaybmi(){
//     //const display = document.getElementById("display");
//     //const weight = parseFloat(document.getElementById("weight").value);
//     //const height = parseFloat(document.getElementById("height").value);
//     const result  = (weight/(height*height)) * 10000;
//     console.log(weight);
//     console.log(height);
//     //display.value = result;
    
    
//     }

function clearbmi(){
        display.value="";
        weight = 0;
        height =0;
    }





calculate.addEventListener("click",()=>{
    console.log("hello");
})


clear.onclick = clearbmi;

