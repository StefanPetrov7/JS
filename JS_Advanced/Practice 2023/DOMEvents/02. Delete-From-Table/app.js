function deleteByEmail() {
    let emailToDelete = document.querySelector('input').value;
    let table = document.querySelectorAll('tbody>tr');
    let outputField = document.querySelector('#result');

    let isExist = false;

    for (let row of table) {

        if (row.lastElementChild.textContent == emailToDelete) {
            isExist = true;
            row.remove();
            break;
        }
    }

    if (isExist == false) {
        outputField.textContent = 'Not found.';
    } else {
        outputField.textContent = 'Deleted.';
    }
}