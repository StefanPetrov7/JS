function colorize() {

    const elements = [...document.querySelectorAll('table tr')].reduce((acc, cur, i) => {
        if (i % 2 != 0) {
            cur.style.backgroundColor = 'teal';
            return;
        }
    });

}