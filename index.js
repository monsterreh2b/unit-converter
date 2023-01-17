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

function convertFeetMeters(number) {
    return number / 3.281;
}

function convertLitersGallons(number) {
    return number * 0.264172;
}

function convertGallonsLiters(number) {
    return number * 3.78541;
}

function convertKilosPounds(number) {
    return number * 2.20462;
}

function convertPoundsKilos(number) {
    return number / 2.20462;
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

    else if (output === "feet to meters") {
        let feetMetersAnswer = convertFeetMeters(amountValue);
        answer.innerHTML = feetMetersAnswer.toFixed(3);
    }

    else if (output === "liters to gallons") {
        let litersGallonsAnswer = convertLitersGallons(amountValue);
        answer.innerHTML = litersGallonsAnswer.toFixed(3);
    }

    else if (output === "gallons to liters") {
        let gallonsLitersAnswer = convertGallonsLiters(amountValue);
        answer.innerHTML = gallonsLitersAnswer.toFixed(3);
    }

    else if (output === "kilos to pounds") {
        let kilosPoundsAnswer = convertKilosPounds(amountValue);
        answer.innerHTML = kilosPoundsAnswer.toFixed(3);
    }

    else if (output === "pounds to kilos") {
        let poundsKilosAnswer = convertPoundsKilos(amountValue);
        answer.innerHTML = poundsKilosAnswer.toFixed(3);
    }
}




form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("hello");
    showOption();
    amount.value = "";












});