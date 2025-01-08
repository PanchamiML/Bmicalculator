function displaybmi() {
    try {
        let height = document.querySelector("#height").value;
        let weight = document.querySelector("#weight").value;
        let display = document.querySelector("#display");
        const wunit = document.querySelector("#wunit").value;
        const hunit = document.querySelector("#hunit").value;






        const newheight = height / 100
        const result = weight / (newheight * newheight);
        display.value = "BMI="+result;

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


