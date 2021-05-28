function encodeAndDecodeMessages() {
    const inputArea = document.getElementsByTagName('textarea')[0];
    const outArea = document.getElementsByTagName('textarea')[1];

    document.getElementById('container').addEventListener('click', (ev) => {

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Encode and send it') {

            let text = inputArea.value;
            let decoded = decoder(text, '+1');
            outArea.value = decoded;
            inputArea.value = '';
        }

        if (ev.target.tagName === 'BUTTON' && ev.target.textContent === 'Decode and read it') {

            let text = outArea.value;
            let encoded = decoder(text, '-1');
            outArea.value = encoded;
        }
    })

    function decoder(text, command) {

        let result = '';
        let numbers = [];

        if (command === '+1') {
            numbers = text.split('').reduce((ch, cur) => {
                let num = cur.charCodeAt(0) + 1;
                ch.push(num);
                return ch;
            }, [])
        } else {
            numbers = text.split('').reduce((ch, cur) => {
                let num = cur.charCodeAt(0) - 1;
                ch.push(num);
                return ch;
            }, [])
        }

        result = numbers.reduce((res, cur) => {
            res += String.fromCharCode(cur)
            return res;
        }, '')

        return result;
    }
}


// function encodeAndDecodeMessages() {
//     //Select BTN
//     const [encode, decode] = document.querySelectorAll('button');
//     const [input, output] = document.querySelectorAll('textarea');

//     //Add EventListener
//     encode.addEventListener('click', onEncode);
//     decode.addEventListener('click', onDencode);

//     function onEncode() {
//         const encode = input.value
//             .split('')
//             .map((ch) => ch.charCodeAt())
//             .map((ch) => String.fromCharCode(ch + 1))
//             .join('');

//         input.value = '';
//         output.value = encode;
//     };

//     function onDencode() {
//         const decode = output.value
//             .split('')
//             .map((ch) => ch.charCodeAt())
//             .map((ch) => String.fromCharCode(ch - 1))
//             .join('');
//         output.value = decode;
//     };
// }