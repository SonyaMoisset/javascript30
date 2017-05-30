function playSound (event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    if (!audio) {
        return;
    }

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

window.addEventListener('keydown', playSound);

function removeTransition (event) {
    if (event.propertyName !== 'transform') {
        return;
    }

    event.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.keys'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
