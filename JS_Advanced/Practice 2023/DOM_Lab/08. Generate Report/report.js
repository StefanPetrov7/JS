function generateReport() {

    let checkBoxses = document.querySelectorAll('th>input');
    let table = document.querySelectorAll('tbody>tr');

    let props = [];
    let cols = [];

    checkBoxses.forEach((box, i) => {
        if (box.checked == true) {
            props.push(box.name);
            cols.push(i);
        }
    });

    let jsonResult = [];

    for (let row of table) {

        let jsonObj = {};

        for (let i in props) {
            jsonObj[props[i]] = row.children[cols[i]].textContent;
        }

        jsonResult.push(jsonObj);
    }

    document.getElementById('output').value = JSON.stringify(jsonResult, null, 1);
}



// Below solution is giving error in Judge => no points however it is working in the browser with no errors.

// function generateReport() {
//     let employee = document.querySelector('th input[name="employee"]');
//     let department = document.querySelector('th input[name="deparment"]');
//     let status = document.querySelector('th input[name="status"]');
//     let date = document.querySelector('th input[name="dateHired"]');
//     let benefits = document.querySelector('th input[name="benefits"]');
//     let compensation = document.querySelector('th input[name="salary"]');
//     let rating = document.querySelector('th input[name="rating"]');

//     let tableRows = document.querySelectorAll('tbody tr');
//     let tableHeaders = Array.from(document.querySelectorAll('thead th'));
//     let numberOfRows = tableRows.length;
//     let jsonResult = Array(numberOfRows).fill({}).map(() => ({}));

//     if (employee.checked == true) {

//         let columnName = 'Employee';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let empCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let e = 0; e < empCells.length; e++) {

//             jsonResult[e].employee = empCells[e].textContent;
//         }
//     }

//     if (department.checked == true) {

//         let columnName = 'Department';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let depCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let d = 0; d < depCells.length; d++) {

//             jsonResult[d].department = depCells[d].textContent;
//         }
//     }

//     if (status.checked == true) {

//         let columnName = 'Status';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let statusCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let s = 0; s < statusCells.length; s++) {

//             jsonResult[s].status = statusCells[s].textContent;
//         }
//     }

//     if (date.checked == true) {

//         let columnName = 'Date Hired';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let dateCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let d = 0; d < dateCells.length; d++) {

//             jsonResult[d]['date hired'] = dateCells[d].textContent;
//         }
//     }

//     if (benefits.checked == true) {

//         let columnName = 'Benefits';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let benefitsCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let b = 0; b < benefitsCells.length; b++) {

//             jsonResult[b].benefits = benefitsCells[b].textContent;
//         }
//     }

//     if (compensation.checked == true) {

//         let columnName = 'Compensation';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let comCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let c = 0; c < comCells.length; c++) {

//             jsonResult[c].compensation = comCells[c].textContent;
//         }
//     }

//     if (rating.checked == true) {

//         let columnName = 'Rating';
//         let index = tableHeaders.findIndex(header => header.textContent.includes(columnName));
//         let ratingCells = document.querySelectorAll(`tbody tr td:nth-child(${index + 1})`);

//         for (let r = 0; r < ratingCells.length; r++) {

//             jsonResult[r].rating = ratingCells[r].textContent;
//         }
//     }

//     document.querySelector('#output').value = JSON.stringify(jsonResult, null, 1);
// }