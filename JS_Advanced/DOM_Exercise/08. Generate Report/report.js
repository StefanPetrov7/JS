function generateReport() {

    let checkBoxes = Array.from(document.querySelectorAll('th>input'));
    let table = Array.from(document.querySelectorAll('tbody>tr'));
    let props = [];
    let cols = [];

    checkBoxes.forEach((box, i) => {
        if (box.checked == true) {
            props.push(box.name)
            cols.push(i);
        }
    })

    let jsonOutput = [];

    for (const row of table) {

        let jsonObj = {};
        
        for (const i in props) {

            jsonObj[props[i]] = row.children[cols[i]].textContent;
        }
        jsonOutput.push(jsonObj)
    }

    document.getElementById('output').value = JSON.stringify(jsonOutput, null, 1)
}


// function generateReport() {

//     const boxes = [...document.querySelectorAll('th>input')];
//     const rows = [...document.querySelectorAll('tbody>tr')];
//     let properties = [];
//     let column = [];
//     let info = [];

//     boxes.map((box, i) => {

//         if (box.checked == true) {
//             properties.push(box.name);
//             column.push(i);
//         }
//     })

//     for (const row of rows) {

//         let jsonObj = {};
//         for (let index in properties) {

//             jsonObj[properties[index]] = row.children[column[index]].textContent;
//         }
//         info.push(jsonObj)
//     }

//     document.getElementById('output').value = JSON.stringify(info, null, 1);
// }
