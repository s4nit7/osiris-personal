document.addEventListener('DOMContentLoaded', function () {
    const osirisImg = document.getElementById('osiris-img');
    const osirisAudio = document.getElementById('osiris-audio');
    const introAudio = document.getElementById('intro-audio');
    const osirisModal = document.getElementById('osiris-modal');
    const closeModal = document.getElementById('close-modal');
    const notesContainer = document.getElementById('music-notes');

    document.addEventListener('click', (e) => {
        const ignoredTags = ['BUTTON', 'A', 'IMG'];
        const isIgnoredElement = ignoredTags.includes(e.target.tagName) || e.target.closest('#osiris-modal') || e.target.closest('#osiris-img');

        if (!isIgnoredElement) {
            introAudio.pause();
            introAudio.currentTime = 0;
            introAudio.muted = false;
            introAudio.volume = 0.5;
            introAudio.play().catch(() => {});
        }
    });

    osirisImg.addEventListener('click', (e) => {
        e.stopPropagation();

        // Open modal
        osirisModal.style.display = 'block';

        // Play Osiris music if not already playing
        if (osirisAudio.paused) {
            osirisAudio.volume = 0.8;
            osirisAudio.play().catch(() => {});
        }

        // Show floating notes
        for (let i = 0; i < 10; i++) {
            createMusicNote();
        }
    });


    closeModal.addEventListener('click', () => {
        osirisModal.style.display = 'none';
    });

    function createMusicNote() {
        const note = document.createElement('div');
        note.classList.add('note');
        note.innerText = '🍉';
        note.style.left = Math.random() * 100 + 'vw';
        note.style.top = (window.innerHeight - 100) + 'px';
        notesContainer.appendChild(note);

        setTimeout(() => {
            note.remove();
        }, 2000);
    }
    const cs2Link = document.getElementById('cs2-link');
    const cs2Audio = document.getElementById('cs2-audio');

    cs2Link.addEventListener('click', function (e) {
        // Play CS2 link sound only when clicked
        cs2Audio.currentTime = 0;
        cs2Audio.volume = 0.6;
        cs2Audio.play().catch(() => {});
    });
});
