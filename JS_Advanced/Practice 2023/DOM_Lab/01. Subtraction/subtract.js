function subtract() {
    const numOne = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;
    const result = Number(numOne) - Number(secondNum);
    document.getElementById('result').textContent = result;
}