let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');


let countItem = items.length;
let itemActive = 0;

const showHandler = () => {
    if (itemActive === 0) {
        prev.style.visibility = "hidden"
    } else {
        prev.style.visibility = "visible"
    }

    if ((itemActive + 1) >= countItem) {
        next.style.visibility = "hidden"
    } else {
        next.style.visibility = "visible"
    }
}

showHandler()
next.onclick = function () {
    itemActive = itemActive + 1;
    // if (itemActive >= countItem) {
    //     itemActive = 0;
    // }
    showHandler()
    showSlider();
}
prev.onclick = function () {
    // if (itemActive < 0) {
    itemActive = itemActive - 1;
    // itemActive = countItem - 1;
    // }
    showHandler()
    showSlider();
}
let refreshInterval = setInterval(() => {
    next.click();
}, 10000)
function showSlider() {
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})