window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    if (!audio) return; // This will stop the function.
    audio.currentTime = 0; // Rewind to the start.
    audio.play();
    key.classList.add('playing');
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if if it's not a transform.
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
