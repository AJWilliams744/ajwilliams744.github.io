const slideIndex = [];

const slideShowContainers = document.getElementsByClassName("slideshow-container");

for (let i = 0; i < slideShowContainers.length; i++) {
    slideIndex.push(0);
    showSlides(slideShowContainers[i], i);
}

function showSlides(slideShow, index) {
    let i;
    let slides = slideShow.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("in")) slides[i].classList.remove("in");
    }

    slideIndex[index]++;
    if (slideIndex[index] > slides.length) {
        slideIndex[index] = 1;
    }

    slides[slideIndex[index] - 1].classList.add("in");

    setTimeout(() => showSlides(slideShow, index), (Math.random() * 500) + 2000);
}