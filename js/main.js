/* Slider - wersja obiektowa - robocza */

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


/* Slider -wersja 2 - gotowa */

/* Ibanez Prestige */

const IbanezPrestige = [
    "url('img/ibanez-prestige.jpg')",
    "url('img/ibanez-prestige1.jpg')",
    "url('img/ibanez-prestige2.jpg')",
    "url('img/ibanez-prestige3.jpg')",
    "url('img/ibanez-prestige4.jpg')",
];

let slide = document.getElementById("slider ibanez");      
let prevBtn = document.getElementById("slider-button prev");
let nextBtn = document.getElementById("slider-button next");

prevBtn.classList.add("unactive");
slide.style.backgroundImage = IbanezPrestige[0];
let i = 0;

slideLeft = () => {
    i--;
    slide.style.backgroundImage = IbanezPrestige[i];
    nextBtn.classList.remove("unactive");
    if (i === 0) {
        prevBtn.classList.add("unactive");
    }};

    slideRight = () => {
    i++;
    prevBtn.classList.remove("unactive");
    slide.style.backgroundImage = IbanezPrestige[i];
    if (i === IbanezPrestige.length - 1) {
        nextBtn.classList.add("unactive");
    }};

prevBtn.addEventListener("click", slideLeft);
nextBtn.addEventListener("click", slideRight);



/* Fender Strat USA */

const FenderStratUSA = [
    "url('img/fender-strat.jpg')",
    "url('img/fender-strat1.jpg')",
    "url('img/fender-strat2.jpg')",
    "url('img/fender-strat3.jpg')",
    "url('img/fender-strat4.jpg')",
];

let slideFenderStrat = document.getElementById("slider fender-strat");      
let prevBtnFenderStrat = document.getElementById("slider-button prev fender-strat");
let nextBtnFenderStrat = document.getElementById("slider-button next fender-strat");

prevBtnFenderStrat.classList.add("unactive");
slideFenderStrat.style.backgroundImage = FenderStratUSA[0];
let iFenderStrat = 0;

slideLeft = () => {
    i--;
    slideFenderStrat.style.backgroundImage = FenderStratUSA[i];
    nextBtnFenderStrat.classList.remove("unactive");
    if (i === 0) {
        prevBtnFenderStrat.classList.add("unactive");
    }};

    slideRight = () => {
    i++;
    prevBtnFenderStrat.classList.remove("unactive");
    slideFenderStrat.style.backgroundImage = FenderStratUSA[i];
    if (i === FenderStratUSA.length - 1) {
        nextBtnFenderStrat.classList.add("unactive");
    }};

prevBtnFenderStrat.addEventListener("click", slideLeft);
nextBtnFenderStrat.addEventListener("click", slideRight);