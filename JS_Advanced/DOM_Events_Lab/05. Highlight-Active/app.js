function focused() {

    // Setting two events for each of the input fields.
    
    const elements = Array.from(document.querySelectorAll('input')).forEach(el => {
        el.addEventListener('focus', onFocus)
        el.addEventListener('blur', onBlur)
    });

    function onFocus(ev) {
        ev.target.parentNode.className = 'focused';
    }

    function onBlur(ev) {
        ev.target.parentNode.className = '';
    }
}