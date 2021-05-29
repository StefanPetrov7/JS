// JUDGE 15 pts ????

function solve() {

    const tbody = Array.from(document.querySelectorAll('tbody'));
    const [check, clear] = document.querySelectorAll('button');
    const output = document.getElementById('check');
    const table = document.querySelector('table');

    check.addEventListener('click', (ev) => {

        let isSame = false;

        for (const row of tbody) {

            let isDifferent = false;
            const rowOne = Array.from(row.children[0].querySelectorAll('input'));
            const rowTwo = Array.from(row.children[1].querySelectorAll('input'));
            const rowThree = Array.from(row.children[2].querySelectorAll('input'));
            const matrix = [rowOne, rowTwo, rowThree];

            for (let i = 0; i < matrix.length; i++) {

                let first = Number(matrix[i][0].value)
                let second = Number(matrix[i][1].value)
                let third = Number(matrix[i][2].value)

                if (first != second && first != third && second != third) {
                    isDifferent = true;
                    continue;
                } else {
                    isDifferent = false;
                    break;
                }
            }

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix.length; j++) {

                    if (Number(matrix[i][j].value) !== 1 && Number(matrix[i][j].value) !== 2 && Number(matrix[i][j].value) !== 3) {
                        isDifferent = false;
                        break;
                    }
                }
            }

            if (isDifferent) {
                table.style.border = "2px solid green";
                output.style.color = "green";
                output.textContent = 'You solve it! Congratulations!';
            } else {
                table.style.border = "2px solid red";
                output.style.color = "red";
                output.textContent = 'NOP! You are not done yet...';
            }
        }
    })

    clear.addEventListener('click', (ev) => {
        for (const row of tbody) {

            const rowOne = Array.from(row.children[0].querySelectorAll('input'));
            const rowTwo = Array.from(row.children[1].querySelectorAll('input'));
            const rowThree = Array.from(row.children[2].querySelectorAll('input'));
            const matrix = [rowOne, rowTwo, rowThree];

            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix.length; j++) {
                    matrix[i][j].value = ''
                }
            }
        }
        table.style.border = "none";
        output.textContent = '';
    })
}
