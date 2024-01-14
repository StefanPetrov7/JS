function attachEventsListeners() {

    let [inputNumber, convertButon, outputField] = document.querySelectorAll('input');
    let [optionsUnitsIn, optionsUnitsOut] = document.querySelectorAll('select');
    convertButon.addEventListener('click', convert);

    function convert() {
        let number = Number(inputNumber.value);
        let unitsInput = optionsUnitsIn.options[optionsUnitsIn.selectedIndex].text;
        let unitOutput = optionsUnitsOut.options[optionsUnitsOut.selectedIndex].text;
        let meterFunc = meterConverter[unitsInput];
        let meters = meterFunc(number);
        let convertToFunc = convertTo[unitOutput];
        let result = convertToFunc(meters);
        outputField.value = result;
    }

    const meterConverter = {
        'Kilometers': (number) => {
            return number * 1000;
        },
        'Meters': (number) => {
            return number * 1;
        },
        'Centimeters': (number) => {
            return number * 0.01;
        },
        'Millimeters': (number) => {
            return number * 0.001;
        },
        'Miles': (number) => {
            return number * 1609.34;
        },
        'Yards': (number) => {
            return number * 0.9144;
        },
        'Feet': (number) => {
            return number * 0.3048;
        },
        'Inches': (number) => {
            return number * 0.0254;
        },
    };

    const convertTo = {
        'Kilometers': (number) => {
            return number / 1000;
        },
        'Meters': (number) => {
            return number * 1;
        },
        'Centimeters': (number) => {
            return number / 0.01;
        },
        'Millimeters': (number) => {
            return number / 0.001;
        },
        'Miles': (number) => {
            return number / 1609.34;
        },
        'Yards': (number) => {
            return number / 0.9144;
        },
        'Feet': (number) => {
            return number / 0.3048;
        },
        'Inches': (number) => {
            return number / 0.0254;
        },
    };
}