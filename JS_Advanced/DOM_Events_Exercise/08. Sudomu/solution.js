function solve() {
    const [check, clear] = document.querySelectorAll('button');
    let displayField = document.querySelector('#check>p');
    const table = document.querySelector('tbody');
    const tableBoarders = document.querySelector('table');
    document.querySelector('tfoot').addEventListener('click', onClick);

    function onClick(ev) {
        let target = ev.target;

        if (target.innerText == 'Quick Check') {
            const sudomu = getSudomu();
            let isSudomuCorrect = false;

            isSudomuCorrect = isSumCorrect(sudomu) && (isNumbersRepeat(sudomu) == false);
            let textResult = isSudomuCorrect ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
            tableBoarders.style.border = isSudomuCorrect ? '2px solid green' : '2px solid red';
            displayField.style.color = isSudomuCorrect ? 'green' : 'red';
            displayField.textContent = textResult;
        }

        if (target.innerText == 'Clear') {
            tableBoarders.style.border = 'none';
            displayField.textContent = '';

            let cells = table.getElementsByTagName('td');
            for (let i = 0; i < cells.length; i++) {
                cells[i].innerHTML = '';
            }
        }
    }

    function isSumCorrect(sudomu) {

        return sudomu
            .map(row => row
                .reduce((acc, curEl) => acc + curEl))
            .every((element, r, arr) => element === arr[0])
            && sudomu
                .reduce((acc, curEl) => acc
                    .map((element, r) => element + curEl[r]))
                .every((element, r, arr) => element === arr[0]);
    }

    function isNumbersRepeat(sudomu) {

        let isRepeat = true;

        isRepeat = sudomu
            .map((row) => row
                .some((num, i) => row.indexOf(num) !== i))
            .some((val) => val === true);

        isRepeat = sudomu[0]
            .map((_, i) => sudomu.map(row => row[i]))
            .map((col) => col
                .some((num, i) => col.indexOf(num) !== i))
            .some((val) => val === true);

        return isRepeat;
    }

    function getSudomu() {
        let sudomu = [];

        for (let r = 0, row; row = table.rows[r]; r++) {
            let colsArr = [];

            for (let c = 0, col; col = row.cells[c]; c++) {
                let number = Number(col.querySelector('input').value);
                colsArr.push(number);
            }
            sudomu.push(colsArr);
        }

        return sudomu;
    }
}
