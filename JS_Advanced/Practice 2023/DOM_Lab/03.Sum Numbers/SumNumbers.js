function calc() {
    const numOne = Number(document.getElementById('num1').value);
    const numTwo = Number(document.getElementById('num2').value);
    const result = numOne + numTwo;
    const display = document.getElementById('sum');
    display.value = result;
}
