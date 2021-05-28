function addItem() {
    const menu = document.querySelector('#menu');
    const text = document.querySelector('#newItemText');
    const value = document.querySelector('#newItemValue');

    const newElement = createElement('option', text.value);
    newElement.value = value.value;
    menu.appendChild(newElement);
    text.value = '';
    value.value = '';

    function createElement(type, value) {
        const element = document.createElement(type);
        element.textContent = value;
        return element;
    }
}