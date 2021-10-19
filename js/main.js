/* Slider - wersja obiektowa */

class Slider {
    constructor(images, id) {
        this.images = images;
        this.idSlide = id;
        this.idPrevBtn = "slider-button prev "+ id;
        this.idNextBtn = "slider-button next "+ id;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;
        this.image = null;
        this.currentSlide = 0;
    }

    initializeSlider() {
        this.slide = document.getElementById(this.idSlide);
        this.prevBtn = document.getElementById(this.idPrevBtn);
        this.nextBtn = document.getElementById(this.idNextBtn);
        
        this.prevBtn.classList.add("unactive");
        this.slide.style.backgroundImage = this.images[0];
        this.onclickSlide(); 
    }

    onclickSlide() {
        this.prevBtn.addEventListener('click', () => this.slideLeft(this.currentSlide - 1),);
        this.nextBtn.addEventListener('click', () => this.slideRight(this.currentSlide + 1),);
    }

    slideLeft = () => {
        this.currentSlide--;
        this.slide.style.backgroundImage = this.images[this.currentSlide];
        this.nextBtn.classList.remove("unactive");
        if (this.currentSlide === 0) {
            this.prevBtn.classList.add("unactive");
        }
    };

    slideRight = () => {
        this.currentSlide++;
        this.prevBtn.classList.remove("unactive");
        this.slide.style.backgroundImage = this.images[this.currentSlide];
        if (this.currentSlide === this.images.length - 1) {
            this.nextBtn.classList.add("unactive");
        }
    };
};

/* GITARY ELEKTRYCZNE */
/* Ibanez Prestige */

const IbanezPrestige = [
    "url('img/ibanez-prestige.jpg')",
    "url('img/ibanez-prestige1.jpg')",
    "url('img/ibanez-prestige2.jpg')",
    "url('img/ibanez-prestige3.jpg')",
    "url('img/ibanez-prestige4.jpg')",
];
const ibanez = new Slider(IbanezPrestige, "ibanez");
ibanez.initializeSlider();

/* Fender Strat USA */

const FenderStratUSA = [
    "url('img/fender-strat.jpg')",
    "url('img/fender-strat1.jpg')",
    "url('img/fender-strat2.jpg')",
    "url('img/fender-strat3.jpg')",
    "url('img/fender-strat4.jpg')",
];
const fenderStrat = new Slider(FenderStratUSA, "fender-strat");
fenderStrat.initializeSlider();

/* Gibson SG Standard */

const GibsonSt = [
    "url('img/gibson-st.jpg')",
    "url('img/gibson-st1.jpg')",
    "url('img/gibson-st2.jpg')",
    "url('img/gibson-st3.jpg')",
    "url('img/gibson-st4.jpg')",
];
const gibsonSt = new Slider(GibsonSt, "gibson-st");
gibsonSt.initializeSlider();


/* GITARY BASOWE */
/* MM Stingray 5 HH */

const Mmhh = [
    "url('img/MM-hh.jpg')",
    "url('img/MM-hh1.jpg')",
    "url('img/MM-hh2.jpg')",
    "url('img/MM-hh3.jpg')",
];
const mmhh = new Slider(Mmhh, "mm-hh");
mmhh.initializeSlider();



/* Slider -wersja 2 - gotowa */

/* Ibanez Prestige */

/* const IbanezPrestige = [
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
nextBtn.addEventListener("click", slideRight); */



/* Fender Strat USA */

/* const FenderStratUSA = [
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
nextBtnFenderStrat.addEventListener("click", slideRight); */