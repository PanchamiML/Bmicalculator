function displaybmi() {
    try {
        let height = document.querySelector("#height").value;
        let weight = document.querySelector("#weight").value;
        let display = document.querySelector("#display");
        let wunit = document.querySelector("#wunit").value;
        let hunit = document.querySelector("#hunit").value;
        let heightinch = document.querySelector("#heightinch").value;

        let newweight;
        let newheight;
        let feetheight;


        if (wunit === "Kilograms") {
            newweight = weight

        } else {
            newweight = weight * 0.453592
        }

        if (hunit === "centimeters") {
            newheight = height / 100;

        } else {
            feetheight = Number(height + "." + heightinch);


            newheight = feetheight * 0.3048;

        }

        const result = newweight / (newheight * newheight);
        display.value = "BMI=" + result;

    } catch (e) {
        console.log("an error accured:", e.message);
        display.value = "Please enter valid numbers";


    }

}

function clearbmi() {
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
    document.querySelector("#display").value = "";

}





const calcbtn = document.querySelector("#calcbtn");
calcbtn.onclick = displaybmi;

const clrbtn = document.querySelector("#clrbtn");
clrbtn.onclick = clearbmi;


