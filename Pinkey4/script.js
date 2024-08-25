let slides = document.querySelectorAll('.slide');
let audioElements = {
    0: document.getElementById('audio-slide-1'),
    1: document.getElementById('audio-slide-2'),
    2: document.getElementById('audio-slide-3'),
    3: document.getElementById('audio-slide-4'),
    4: document.getElementById('audio-slide-5'),
    5: document.getElementById('audio-slide-6'),
    6: document.getElementById('audio-slide-7'),
    7: document.getElementById('audio-slide-8'),
    8: document.getElementById('audio-slide-9'),
    9: document.getElementById('audio-slide-10'),
    10: document.getElementById('audio-slide-11'),
    11: document.getElementById('audio-slide-12'),
    12: document.getElementById('audio-slide-13'),
    13: document.getElementById('audio-slide-14'),
    14: document.getElementById('audio-slide-15'),
    15: document.getElementById('audio-slide-16'),
    16: document.getElementById('audio-slide-17'),
    17: document.getElementById('audio-slide-18'),
    18: document.getElementById('audio-slide-19'),
    19: document.getElementById('audio-slide-20'),
    20: document.getElementById('audio-slide-21'),
    21: document.getElementById('audio-slide-22'),
    22: document.getElementById('audio-slide-23'),
    23: document.getElementById('audio-slide-24'),
    24: document.getElementById('audio-slide-25'),
    25: document.getElementById('audio-slide-26'),
    26: document.getElementById('audio-slide-27'),
    27: document.getElementById('audio-slide-28'),
    28: document.getElementById('audio-slide-29'),
    29: document.getElementById('audio-slide-30'),
    30: document.getElementById('audio-slide-31'),
    31: document.getElementById('audio-slide-32'),
    32: document.getElementById('audio-slide-33'),
};
let current = 0;

function cls() {
    slides.forEach(slide => slide.classList.remove('active'));
}

function playAudio(index) {
    for (let key in audioElements) {
        audioElements[key].pause();
        audioElements[key].currentTime = 0;
    }
    audioElements[index].play();
}

function next() {
    cls();
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
    playAudio(current);
}

function prev() {
    cls();
    current = (current - 1 + slides.length) % slides.length;
    slides[current].classList.add('active');
    playAudio(current);
}

function start() {
    cls();
    slides[current].classList.add('active');
    playAudio(current);
}
start();
document.getElementById('start-slide-show').addEventListener('click', () => {
    start();
    document.getElementById('start-slide-show').style.display = 'none'; // Hide the button after starting
    document.getElementById('cc').style.display = 'none'; // Hide the button after starting

});


// Define an array of objects where each object represents a slider configuration
let sliders = [
    {
        images: ['img/b1.jpg', 'img/b2.jpg', 'img/b3.jpg'],
        index: 0,
        selector: '.slide-2',
        interval: 3000
    },
    {
        images: ['img/c1.jpeg', 'img/c2.jpg', 'img/c3.jpg', 'img/c4.jpg'],
        index: 0,
        selector: '.slide-3',
        interval: 3000
    },
    {
        images: ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg', 'img/g6.jpg'],
        index: 0,
        selector: '.slide-7',
        interval: 3000
    },
    {
        images: ['img/h1.jpg', 'img/h2.jpg'],
        index: 0,
        selector: '.slide-8',
        interval: 800
    },
    {
        images: ['img/j1.jpg', 'img/j2.jpg'],
        index: 0,
        selector: '.slide-10',
        interval: 2000
    },
    {
        images: ['img/k1.jpg', 'img/k2.jpg', 'img/k3.jpg'],
        index: 0,
        selector: '.slide-11',
        interval: 2000
    },
    {
        images: ['img/m1.jpg', 'img/m2.jpg', 'img/m3.jpg', 'img/m4.jpg', 'img/m5.jpg', 'img/m6.jpg', 'img/m7.jpg'],
        index: 0,
        selector: '.slide-13',
        interval: 2000
    },
    {
        images: ['img/n1.jpg', 'img/n2.jpg', 'img/n3.jpg', 'img/n4.jpg', 'img/n5.jpg'],
        index: 0,
        selector: '.slide-14',
        interval: 2000
    },
    {
        images: ['img/o1.jpg', 'img/o2.jpg'],
        index: 0,
        selector: '.slide-15',
        interval: 2000
    },
    {
        images: ['img/s1.jpg', 'img/s2.jpg', 'img/s3.jpg'],
        index: 0,
        selector: '.slide-18',
        interval: 2000
    },
    {
        images: ['img/u1.jpg', 'img/u2.jpg'],
        index: 0,
        selector: '.slide-20',
        interval: 2000
    },
    {
        images: ['img/v1.jpg', 'img/v2.jpg', 'img/v3.jpg'],
        index: 0,
        selector: '.slide-21',
        interval: 2000
    },
    {
        images: ['img/w1.jpg', 'img/w2.jpg', 'img/w3.jpg', 'img/w4.jpg', 'img/w5.jpg'],
        index: 0,
        selector: '.slide-22',
        interval: 2000
    },
    {
        images: ['img/z1.jpg', 'img/z2.jpg'],
        index: 0,
        selector: '.slide-25',
        interval: 2000
    },
    {
        images: ['img/za1.jpg', 'img/za2.jpg', 'img/za3.jpg', 'img/za4.jpg', 'img/za5.jpg'],
        index: 0,
        selector: '.slide-26',
        interval: 2000
    },
    {
        images: ['img/zb1.jpg', 'img/zb2.jpg'],
        index: 0,
        selector: '.slide-27',
        interval: 2000
    },
    {
        images: ['img/zd1.jpg', 'img/zd2.jpg'],
        index: 0,
        selector: '.slide-29',
        interval: 2000
    },
    {
        images: ['img/zh1.jpg', 'img/zh2.jpg'],
        index: 0,
        selector: '.slide-33',
        interval: 2000
    }
];

// Function to change slide image
function changeSlideImage(slider) {
    let slide = document.querySelector(slider.selector);
    slide.style.backgroundImage = `url(${slider.images[slider.index]})`;
    slider.index = (slider.index + 1) % slider.images.length;
}

// Initialize intervals for each slider
sliders.forEach(slider => {
    setInterval(() => {
        changeSlideImage(slider);
    }, slider.interval);
});
const imageUrls = [
    'img/a.jpg', 'img/b1.jpg', 'img/b2.jpg', 'img/b3.jpg', 'img/c1.jpeg', 'img/c2.jpg', 'img/c3.jpg', 'img/c4.jpg',
    'img/d.jpg', 'img/e.jpg', 'img/f.jpg', 'img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg',
    'img/g6.jpg', 'img/h1.jpg', 'img/h2.jpg', 'img/i.jpg', 'img/j1.jpg', 'img/j2.jpg',
    'img/k1.jpg', 'img/k2.jpg', 'img/k3.jpg', 'img/l.jpg', 'img/m1.jpg', 'img/m2.jpg', 'img/m3.jpg', 'img/m4.jpg', 
    'img/m5.jpg', 'img/m6.jpg', 'img/m7.jpg', 'img/n1.jpg', 'img/n2.jpg', 'img/n3.jpg', 'img/n4.jpg', 'img/n5.jpg', 
    'img/o1.jpg', 'img/o2.jpg', 'img/p.jpg', 'img/r.jpg', 'img/s1.jpg', 'img/s2.jpg', 'img/s3.jpg', 'img/t.jpg', 
    'img/u1.jpg', 'img/u2.jpg', 'img/v1.jpg', 'img/v2.jpg', 'img/v3.jpg', 'img/w1.jpg', 'img/w2.jpg', 'img/w3.jpg', 
    'img/w4.jpg', 'img/w5.jpg', 'img/x.jpg', 'img/y.jpg', 'img/z1.jpg', 'img/z2.jpg', 'img/za1.jpg', 'img/za2.jpg', 
    'img/za3.jpg', 'img/za4.jpg', 'img/za5.jpg', 'img/zb1.jpg', 'img/zb2.jpg', 'img/zc.jpg', 'img/zd1.jpg', 
    'img/zd2.jpg', 'img/ze.jpg', 'img/zf.jpg', 'img/zg.jpeg', 'img/zh1.jpg', 'img/zh2.jpg'
];
const preloadImages = () => {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

preloadImages();


const audioIds = [
    'audio-slide-1', 'audio-slide-2', 'audio-slide-3', 'audio-slide-4', 'audio-slide-5',
    'audio-slide-6', 'audio-slide-7', 'audio-slide-8', 'audio-slide-9', 'audio-slide-10',
    'audio-slide-11', 'audio-slide-12', 'audio-slide-13', 'audio-slide-14', 'audio-slide-15',
    'audio-slide-16', 'audio-slide-17', 'audio-slide-18', 'audio-slide-19', 'audio-slide-20',
    'audio-slide-21', 'audio-slide-22', 'audio-slide-23', 'audio-slide-24', 'audio-slide-25',
    'audio-slide-26', 'audio-slide-27', 'audio-slide-28', 'audio-slide-29', 'audio-slide-30',
    'audio-slide-31', 'audio-slide-32', 'audio-slide-33'
];

const preloadAudio = () => {
    audioIds.forEach(id => {
        const audio = new Audio();
        audio.src = document.getElementById(id).src;
    });
};

// Preload all audio
preloadAudio();

// function updateSlideImage(slideClass, imageUrl, size, position) {
//     let slide = document.querySelector(slideClass);
//     slide.style.backgroundImage = `url(${imageUrl})`;
//     slide.style.backgroundSize = size; // e.g., 'cover', 'contain', '800px auto'
//     slide.style.backgroundPosition = position; // e.g., 'center center', 'top left'
// }

// // Usage
// updateSlideImage('.slide-2', 'img/b2.jpg', 'cover', 'center center');
// updateSlideImage('.slide-3', 'img/c2.jpg', 'contain', 'top center');
