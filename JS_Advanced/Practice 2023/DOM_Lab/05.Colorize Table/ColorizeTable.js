// function colorize() {
//   const rows = [...document.querySelectorAll('table tr')]; 
//   rows.filter(row => row.rowIndex % 2 != 0).forEach(row => row.style.backgroundColor = 'teal');
// }


function colorize() {
    const rows = document.querySelectorAll('table tr'); // return node list 

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'teal';
    }
}

