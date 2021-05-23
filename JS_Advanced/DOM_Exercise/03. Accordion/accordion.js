function toggle() {

    let button = document.getElementsByClassName("button")[0];
    let div = document.getElementById('extra');

    button.textContent == 'More' ? button.textContent = 'Less' : button.textContent = 'More';
    button.textContent == 'More' ? div.style.display = 'none' : div.style.display = 'block';
}


// function toggle() {

//     let button = document.querySelector('.button');
//     let divExtra = document.querySelector('#extra');
//     divExtra.style.display === 'block' ? divExtra.style.display = 'none' : divExtra.style.display = 'block';
//     button.textContent === 'More' ? button.textContent = 'Less' : button.textContent = 'More';
// }