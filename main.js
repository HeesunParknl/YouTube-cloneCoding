const moreBtn = document.querySelector('.videoInfo-title .moreBtn');
const title = document.querySelector('.videoInfo-title .video-title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});