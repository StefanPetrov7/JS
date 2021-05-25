function addItem() {

    let input = document.getElementById('newItemText').value;     // getting inputElement
    let newLi = document.createElement('li');                     // creating new <li> element
    newLi.textContent = input;                                    // setting the new element value taken from the input
    document.querySelector('ul').appendChild(newLi);              // appending the new element to the <ul> as a last child
    document.getElementById('newItemText').value = '';            // will clear the input field     

}