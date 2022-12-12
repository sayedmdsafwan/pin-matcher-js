function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4) {
        return pin;
    } else {
        console.log(
            `Got less than 4 num and return getPin function. The pin is ${pin}`
        );
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

// left section done

document.getElementById("key-pad").addEventListener("click", function (e) {
    const number = e.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }
    } else {
        const prevNum = calcInput.value;
        const newNum = prevNum + number;
        calcInput.value = newNum;
    }
});
// input taking complete
