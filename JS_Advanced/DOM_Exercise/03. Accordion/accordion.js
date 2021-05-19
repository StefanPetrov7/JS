function toggle() {

    let button = document.querySelector('.button');
    let divExtra = document.querySelector('#extra');
    divExtra.style.display === 'block' ? divExtra.style.display = 'none' : divExtra.style.display = 'block';
    button.textContent === 'More' ? button.textContent = 'Less' : button.textContent = 'More';
}