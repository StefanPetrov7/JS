function addItem() {
    let inputEl = document.querySelector('#newItemText').value;
    let ulLIst = document.querySelector('#items');
    let liElement = document.createElement('li');
    liElement.textContent = inputEl;
    ulLIst.appendChild(liElement);
}