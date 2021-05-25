function validate() {
    document.getElementById('email').addEventListener('change', onValidate);

    function onValidate(ev) {
        const regex = /(\w+@\w+\.\w+)/;
        if (regex.test(ev.target.value.toLowerCase())) {
            ev.target.className = ''
        } else {
            ev.target.className = 'error';
        }
    }
}