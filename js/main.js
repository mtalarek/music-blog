/* Wersja obiektowa - robocza */

/* class Slider {
    constructor(images) {
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.currentSlide = 0;
    }

    initializeSlider() {
        this.slide = document.getElementById("slider fender");
        
        this.prevBtn = document.getElementById("slider-button prev");
        this.nextBtn = document.getElementById("slider-button next");
        
        this.image = document.createElement('img');
        this.image.setAttribute('src', this.images[this.currentSlide]);

        this.slide.appendChild(this.image);
        this.onclickSlide();
    }

    
    onclickSlide() {
        this.prevBtn.addEventListener('click', () => this.changeNumber(this.currentSlide - 1),);
        
        this.nextBtn.addEventListener('click', () => this.changeNumber(this.currentSlide + 1),);
    }

    changeNumber(index) {
        this.currentSlide = index;
    }
}

const imageArr = [
    'img/fender-strat1.jpg',
    'img/fender-strat2.jpg',
]

const slider = new Slider(imageArr);
slider.initializeSlider();
slider.onclickSlide();
console.log(document.getElementsByClassName("slide")); */


/* Wersja 2 - gotowa */

const imageArr = [
    'img/ibanez-prestige.jpg',
    'img/ibanez-prestige1.jpg',
    'img/ibanez-prestige3.jpg',
    'img/ibanez-prestige4.jpg',
];

let slide = document.getElementById("slider ibanez");      
let prevBtn = document.getElementById("slider-button prev");
let nextBtn = document.getElementById("slider-button next");

prevBtn.classList.add("unactive");
slide.src = imageArr[0];
let i = 0;

slideLeft = () => {
    i--;
    slide.src = imageArr[i];
    nextBtn.classList.remove("unactive");
    if (i === 0) {
        prevBtn.classList.add("unactive");
    }};

    slideRight = () => {
    i++;
    prevBtn.classList.remove("unactive");
    slide.src = imageArr[i];
    if (i === imageArr.length - 1) {
        nextBtn.classList.add("unactive");
    }};

prevBtn.addEventListener("click", slideLeft);
nextBtn.addEventListener("click", slideRight);