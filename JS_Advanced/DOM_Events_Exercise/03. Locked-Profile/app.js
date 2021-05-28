function lockedProfile() {

    const container = document.getElementById('main').addEventListener('click', (ev) => {

        if (ev.target.tagName === 'BUTTON') {
            const profile = ev.target.parentNode;
            const isLocked = profile.querySelector('[value="lock"]');
            const div = profile.querySelector('div');

            if (isLocked.checked) {
                return
            }
            else {

                let isVisible = div.style.display === 'block'
                div.style.display = isVisible ? 'none' : 'block';
                ev.target.textContent = !isVisible ? 'Hide it' : 'Show more';
            }
        }
    });
}