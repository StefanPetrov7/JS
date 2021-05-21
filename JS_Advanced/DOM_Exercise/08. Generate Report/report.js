function generateReport() {

    const boxes = [...document.querySelectorAll('th>input')];
    const rows = [...document.querySelectorAll('tbody>tr')];
    let properties = [];
    let column = [];
    let info = [];
    
    boxes.map((box, i) => {

        if (box.checked == true) {
            properties.push(box.name);
            column.push(i);
        }
    })

    for (const row of rows) {

        let jsonObj = {};
        for (let index in properties) {

            jsonObj[properties[index]] = row.children[column[index]].textContent;
        }
        info.push(jsonObj)
    }

    document.getElementById('output').value = JSON.stringify(info, null, 1);
}