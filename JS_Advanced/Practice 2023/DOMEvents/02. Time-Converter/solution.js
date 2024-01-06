function attachEventsListeners() {

    let parentElement = document.querySelector('main');
    parentElement.addEventListener('click', convert);

    function convert(event) {
        let target = event.target;

        if (target.tagName == 'INPUT' && target.type == 'button') {
            
            let inputElement = target.previousElementSibling;
            let value = inputElement.value;
            let units = inputElement.id;
            let result = unitConverter(value, units);
    
            document.querySelector('#days').value = result.days;
            document.querySelector('#hours').value = result.hours;
            document.querySelector('#minutes').value = result.minutes;
            document.querySelector('#seconds').value = result.seconds;
        }
    }

    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    function unitConverter(value, units) {
        const inDays = value / ratios[units];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        };
    }
}

// function attachEventsListeners() {

//     let parentElement = document.querySelector('main');
//     parentElement.addEventListener('click', convert);

//     function convert(event) {
//         let target = event.target;

//         if (target == event.currentTarget) {
//             return;
//         }

//         let inputTime = target.previousElementSibling;
//         let result;

//         if (target.id == 'daysBtn') {
//             result = dayConverter(inputTime.value);
//         } else if (target.id == 'hoursBtn') {
//             result = hoursConverter(inputTime.value);
//         } else if (target.id == 'minutesBtn') {
//             result = minConverter(inputTime.value);
//         } else if (target.id == 'secondsBtn') {
//             result = secCOnverter(inputTime.value);
//         }

//         if (result) {
//             document.querySelector('#days').value = result[0];
//             document.querySelector('#hours').value = result[1];
//             document.querySelector('#minutes').value = result[2];
//             document.querySelector('#seconds').value = result[3];
//         }
//     }

//     function dayConverter(days) {
//         let hours = days * 24;
//         let minutes = hours * 60;
//         let seconds = minutes * 60;
//         return [days, hours, minutes, seconds];
//     };

//     function hoursConverter(hours) {
//         let days = hours / 24;
//         let minutes = hours * 60;
//         let seconds = minutes * 60;
//         return [days, hours, minutes, seconds];
//     };

//     function minConverter(minutes) {
//         let hours = minutes / 60;
//         let days = hours / 24;
//         let seconds = minutes * 60;
//         return [days, hours, minutes, seconds];
//     };

//     function secCOnverter(sec) {
//         let minutes = sec / 60;
//         let hours = minutes / 60;
//         let days = hours / 24;
//         return [days, hours, minutes, sec];
//     };
// }