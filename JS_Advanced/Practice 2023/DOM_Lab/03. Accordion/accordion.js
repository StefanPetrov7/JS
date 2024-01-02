function toggle() {
    let button = document.querySelector('#accordion .head .button');
    let paragraph = document.querySelector('#extra');

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        paragraph.style.display = 'block';
    } else {
        button.textContent = 'More';
        paragraph.style.display = 'none';
    }
}