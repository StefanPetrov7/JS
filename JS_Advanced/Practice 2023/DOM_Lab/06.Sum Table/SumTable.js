// function sumTable() {
//     const rows = document.querySelectorAll('table tr');
//     let sum = 0; 

//     for (let i = 1; i < rows.length-1; i++) {
//        let row= rows[i].children;
//        sum+= Number(row[row.length-1].textContent);
//     }

//     const resultCell = document.getElementById('sum');
//     resultCell.textContent = sum;

// }


function sumTable() {
    const rows = [...document.querySelectorAll('table tr')].slice(1, -1);

    const sum = rows.reduce((sum, row) => {
        return sum += Number(row.lastElementChild.textContent);
    }, 0);

    document.getElementById('sum').textContent = sum;

}