let startX;
const swipeThreshold = 100;

const navigate = (next) => {
    const currentPage = document.querySelector('.page');
    currentPage.classList.add(next ? 'slide-out' : 'slide-in');

    setTimeout(() => {
        const pages = ['index.html', 'event.html', 'contact.html', 'event.html'];
        const currentIndex = pages.indexOf(window.location.pathname.split('/').pop());
        window.location.href = pages[(currentIndex + (next ? 1 : -1) + pages.length) % pages.length];
    }, 50);
};

document.addEventListener('touchstart', e => startX = e.touches[0].clientX);

document.addEventListener('touchmove', e => {
    if (Math.abs(e.touches[0].clientX - startX) > swipeThreshold) {
        e.preventDefault();
    }
});

document.addEventListener('touchend', e => {
    const distanceX = e.changedTouches[0].clientX - startX;
    if (Math.abs(distanceX) > swipeThreshold) {
        navigate(distanceX < 0);
    }
});
