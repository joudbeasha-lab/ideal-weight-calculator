function calculateWeight() {

    let height = document.getElementById("height").value;

    let selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );


    if (height === "") {
        document.getElementById("result").innerHTML =
        "Please enter your height 🌸";
        return;
    }


    if (selectedGender === null) {
        document.getElementById("result").innerHTML =
        "Please select your sex 🌸";
        return;
    }


    let gender = selectedGender.value;

    let idealWeight;


    if (gender === "Female") {

        idealWeight = Number(height) - 105;

    } 
    
    else if (gender === "Male") {

        idealWeight = Number(height) - 100;

    }


    document.getElementById("result").innerHTML =
    "Estimated ideal weight: " + idealWeight.toFixed(1) + " kg 🌿";

}