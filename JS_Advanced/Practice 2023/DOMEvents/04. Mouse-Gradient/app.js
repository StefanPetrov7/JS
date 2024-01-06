function attachGradientEvents() {
    const gradient = document.querySelector('#gradient-box');
    gradient.addEventListener('mousemove', onClick);

    function onClick(event) {
        const x = event.offsetX;
        const percent = Math.floor(x / 300 * 100);
        document.querySelector('#result').textContent = percent + '%';
    }
}