
// Solution with event delegation 
function focused() {
    let parentEl = document.querySelector('div');
    parentEl.addEventListener('focusin', focusIn);
    parentEl.addEventListener('focusout', focusOut);

    function focusIn(event){
        event.target.parentElement.classList.add('focused');
    }

    function focusOut(event){
        event.target.parentElement.classList.remove('focused');
    }
}


// function focused() {
//     let sections = Array.from(document.querySelectorAll('input'));

//     sections.forEach(sec => sec.addEventListener('focus', (event) => {
//         event.target.parentElement.className = 'focused';
//     }));

//     sections.forEach(sec => sec.addEventListener('blur', (event) => {
//         event.target.parentElement.className = '';
//     }));
// }