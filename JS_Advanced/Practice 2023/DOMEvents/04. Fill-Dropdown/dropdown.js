function addItem() {
    let valueInput = document.querySelector('#newItemValue').value;
    let textInput = document.querySelector('#newItemText').value;
    let selectTag = document.querySelector('#menu');

    let option = document.createElement('option');
    option.value = valueInput;
    option.textContent = textInput;
    selectTag.appendChild(option);

    document.querySelector('#newItemValue').value = '';
    document.querySelector('#newItemText').value = '';
}