const moreBtn = document.querySelector('.videoInfo-title .moreBtn');
const title = document.querySelector('.videoInfo-title .video-title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});




function switchTheme() {
    var checkbox = document.getElementById('checkbox');
    if (checkbox.checked == true) {
        document.querySelector('body').style.background = 'black';
        document.documentElement.style.setProperty('--white', '#000000');
        document.documentElement.style.setProperty('--black', '#ffffff');
        document.documentElement.style.setProperty('--grey', 'lightgray');
        document.documentElement.style.setProperty('--blue', 'powderblue');
    } else {
        document.querySelector('body').style.background = 'white';
        document.documentElement.style.removeProperty('--white', '#000000');
        document.documentElement.style.removeProperty('--black', '#ffffff');
        document.documentElement.style.removeProperty('--grey', 'lightgray');
        document.documentElement.style.removeProperty('--blue', 'powderblue');
    }
}