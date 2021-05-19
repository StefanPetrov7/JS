function subtract() {

    const numOne = Number(document.getElementById('firstNumber').value);
    const numTwo = Number(document.getElementById('secondNumber').value);
    const result = numOne - numTwo;
    document.getElementById('result').textContent = result;
}