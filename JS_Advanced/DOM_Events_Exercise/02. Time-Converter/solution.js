function attachEventsListeners() {

    const buttons = Array.from(document.querySelectorAll('[type="button"]'));
    const textWindows = Array.from(document.querySelectorAll('[type="text"]'))
    buttons.map(but => {
        but.addEventListener('click', onClick)
    })

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function onClick(ev) {

        if (ev.target.id === 'daysBtn') {
            days = Number(ev.target.parentNode.children[1].value);
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;

        } else if (ev.target.id === 'hoursBtn') {
            hours = Number(ev.target.parentNode.children[1].value);
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;

        } else if (ev.target.id === 'minutesBtn') {
            minutes = Number(ev.target.parentNode.children[1].value);
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;

        } else if (ev.target.id === 'secondsBtn') {
            seconds = Number(ev.target.parentNode.children[1].value);
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        let converted = [days, hours, minutes, seconds]

        textWindows.forEach((el, i) => {
            el.value = converted[i];
        })
    }
}