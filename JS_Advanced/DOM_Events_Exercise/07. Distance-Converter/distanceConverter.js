function attachEventsListeners() {
    const [input, convert, output] = document.querySelectorAll('input');
    const [units, unitsTo] = document.querySelectorAll('select');
    document.querySelector('body').addEventListener('click', onClick);

    function onClick(ev) {

        if (ev.target === convert) {

            let initialUnits = units.selectedIndex;
            let outputUnits = unitsTo.selectedIndex;
            let numberFrom = Number(input.value);
            
            const inputInMeters = convertToMeters(numberFrom, initialUnits);
            const result = convertTo(inputInMeters, outputUnits)

            output.value = result
        }
    }

    function convertToMeters(initial, units) {

        let meters = 0;
        switch (units) {
            case 0: meters = initial * 1000;
                break;
            case 1: meters = initial;
                break;
            case 2: meters = initial * 0.01;
                break;
            case 3: meters = initial * 0.001;
                break;
            case 4: meters = initial * 1609.34;
                break;
            case 5: meters = initial * 0.9144;
                break;
            case 6: meters = initial * 0.3048;
                break;
            case 7: meters = initial * 0.0254;
                break;
        }

        return meters
    }

    function convertTo(meters, units) {

        let result = 0;
        switch (units) {
            case 0: result = meters / 1000;
                break;
            case 1: result = meters;
                break;
            case 2: result = meters * 100;
                break;
            case 3: result = meters * 1000;
                break;
            case 4: result = meters / 1609.34;
                break;
            case 5: result = meters / 0.9144;
                break;
            case 6: result = meters / 0.3048;
                break;
            case 7: result = meters / 0.0254;
                break;
        }

        return result
    }
}