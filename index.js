/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const amount = document.getElementById("amount");
console.log(amount);

const form = document.querySelector(".calculate");

const answer = document.getElementById("answer");

function convertMetersFeet(number) {
    return number * 3.281;
}

function showOption() {
    let selectedOption = document.getElementById("input");
    let output = selectedOption.value;
    //answer.innerHTML = output;

    let amountValue = amount.value;

    if (output === "meters to feet") {
        console.log(amountValue);
        let metersFeetAnswer = convertMetersFeet(amountValue);
        answer.innerHTML = metersFeetAnswer.toFixed(3);

    }
}




form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello");
    showOption();
    amount.value = "";












});