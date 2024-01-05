// => 0 points in judge

function solve() {

    document.querySelector('button').addEventListener('click', onClick);

    function onClick(){
        let inputNumber = document.querySelector('#input').value;
        let selectMenu = document.querySelector('#selectMenuTo');
        let selectedOption = selectMenu.options[selectMenu.selectedIndex].value;
    
        let result = '';
    
        if (selectedOption == 'binary') {
            result = Number(inputNumber).toString(2);
        } else {
            result = Number(inputNumber).toString(16);
        }
    
        document.querySelector('#result').value = result;
    }
}

