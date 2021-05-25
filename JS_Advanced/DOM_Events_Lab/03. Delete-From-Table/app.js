function deleteByEmail() {
    const mail = document.querySelector('input[name="email"]').value                 // => selecting by attribute.
    const rows = Array.from(document.querySelectorAll('tbody tr'));                 // => will get all the tr from tbody
    // => rows will be parsed from static node collection to array

    let deleted = false;

    for (const row of rows) {

        if (row.children[1].textContent === mail) {
            row.parentNode.removeChild(row);
            deleted = true;
            document.getElementById('result').textContent = 'Deleted. ';
        }
    }

    if (!deleted) {
        document.getElementById('result').textContent = 'Not found.'
    }
}










// function deleteByEmail() {

//     let table = document.querySelectorAll('tbody>tr');
//     let input = document.querySelector('label>input').value;
//     let matches = 0;

//     for (const row of table) {

//         if (row.children[1].textContent === input) {
//             row.remove();
//             matches++;
//         };
//     }

//     document.querySelector('div[id="result"]').textContent = matches !== 0 ? 'Deleted' : 'Not found.'
// }