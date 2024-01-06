
// Using delegation and adding the eventListener to the parent element. 

let ulList = document.querySelector('#items');
ulList.addEventListener('click', onDelete);

function onDelete(event) {
    
    if (event.target.tagName == 'A' ) {
        event.target.parentElement.remove();
    }
}

function addItem() {

    let itemToAdd = document.querySelector('#newItemText').value;
    let li = document.createElement('li');
    li.textContent = itemToAdd + ' ';

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';

    li.appendChild(deleteBtn);
    ulList.appendChild(li);
}