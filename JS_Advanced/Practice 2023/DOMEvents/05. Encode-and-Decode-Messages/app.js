function encodeAndDecodeMessages() {
    let [inputTextArea , outputTextArea] = document.querySelectorAll('textarea');

    document.getElementById('container').addEventListener('click', (ev) => {
        let target = ev.target;

        if (target.tagName == 'BUTTON' && target.textContent == 'Encode and send it') {
            let message = inputTextArea.value;
            inputTextArea.value = '';
            outputTextArea.value = encode(message);
        }

        if (target.tagName == 'BUTTON' && target.textContent == 'Decode and read it') {
            let message = outputTextArea.value;
            outputTextArea.value = decode(message);
        }
    });

    function encode(message) {

        return message
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
            .join('');
    }

    function decode(message) {

        return message
            .split('')
            .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
            .join('');
    }
}


// function encodeAndDecodeMessages() {
//     let inputTextArea = document.querySelector('div:nth-child(1) textarea');
//     let outputTextArea = document.querySelector('div:nth-child(2) textarea');
//     let encodeButton = document.querySelector('div:nth-child(1) button');
//     let decodeButton = document.querySelector('div:nth-child(2) button');
//     let encodedMsg;
//     let decodedMeg;

//     encodeButton.addEventListener('click', encode);
//     decodeButton.addEventListener('click', decode);

//     function encode() {
//         let message = inputTextArea.value;
//         inputTextArea.value = '';
//         encodedMsg = message
//             .split('')
//             .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//             .join('');
//         outputTextArea.value = encodedMsg;
//     }

//     function decode() {
//         decodedMeg = encodedMsg
//             .split('')
//             .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
//             .join('');
//         outputTextArea.value = decodedMeg;
//     }
// }