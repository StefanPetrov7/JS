function addItem() {
    let name = document.getElementById('newItemText');
    let company = document.getElementById('newItemValue');
    let select = document.getElementById('menu');
    let option = document.createElement('option');
    option.value = name.value;
    option.innerText = company.value;
    select.appendChild(option);
    name.value = '';
    company.value = '';
}