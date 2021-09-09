const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

function activeSlide(i) {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
}

function activeDot(i) {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[i].classList.add('active');
}

function currentDot() {


    dots.forEach((dot, i) => {
        dot.addEventListener('click', function () {
            index = i;
            activeDot(i);
            activeSlide(i);
        })
    })
}

currentDot();

function nextSlide() {
    if (index === slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}

function prevSlide() {
    if (index === 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

