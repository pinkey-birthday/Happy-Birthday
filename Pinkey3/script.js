$(function () {
    $('.q1').delay(1000).fadeIn(300).delay(2000).fadeOut(300, function () {
        $('.q2').delay(1000).fadeIn(300).delay(2500).fadeOut(300, function () {
            $('.q3').delay(1000).fadeIn(300).delay(2500).fadeOut(300, function () {
                $('.quotes').fadeOut(300, function () {
                    // Show header with animation
                    $('.section')
                        .css({
                            'height': 0
                        });
                    $('.header')
                        .css({
                            'display': 'flex',
                            'opacity': 0,
                            'transform': 'scale(1)'
                        })
                        .animate({
                            opacity: 1,
                            transform: 'scale(1)' // Correct scaling to maintain element's size
                        }, 1000); // Adjust duration as needed
                });
            });
        });
    });
});

$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

let currentAudio = null;
document.addEventListener('DOMContentLoaded', () => {
    const hoverElements = document.querySelectorAll('.hover-element');
    let backgroundAudio = document.getElementById('background-audio');
    let isHovering = false;
    
    hoverElements.forEach(element => {
        const audio = new Audio(element.getAttribute('data-sound'));
        audio.loop = true;  // Enable looping for the audio
        
        function playAudio() {
            // Pause background audio if it's playing
            if (backgroundAudio && !backgroundAudio.paused) {
                backgroundAudio.pause();
            }
            
            // Only play audio if it's not already playing
            if (!audio.paused) {
                return;
            }
            
            // Stop the currently playing sound if any
            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            // Play the sound associated with the hovered element
            audio.play();
            currentAudio = audio;
            isHovering = true;  // Mark as hovering
        }
        
        function stopAudio() {
            isHovering = false; // Mark as not hovering
            // Optionally, resume background audio if it was paused
            if (backgroundAudio && !backgroundAudio.paused) {
                backgroundAudio.play();
            }
        }
        
        element.addEventListener('mouseenter', playAudio);
        element.addEventListener('click', playAudio);
        element.addEventListener('mouseleave', stopAudio);
    });
    
    // Function to play background audio only if no other audio is playing
    function playBackgroundAudio() {
        if (isHovering) {
            return; // Do not play background audio if hovering
        }
        var audio = document.getElementById('background-audio');
        audio.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    }
    playBackgroundAudio();
    document.addEventListener('click',function(){
        if (!currentAudio || currentAudio.paused) {
            backgroundAudio.play().catch(error => {
                console.log('Autoplay was prevented:', error);
            });
        }
    });
});


// Pause background audio when any other audio is played
document.addEventListener('DOMContentLoaded', () => {
    const allAudioElements = document.querySelectorAll('audio');
    
    allAudioElements.forEach(audio => {
        audio.addEventListener('play', () => {
            if (audio !== backgroundAudio) {
                backgroundAudio.pause();
            }
        });
    });
});

// Disable right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
// Disable Dragging
document.addEventListener('dragstart', (event) => {
    event.preventDefault();
});


var images = document.getElementById('images');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');
var dimaag1 = document.getElementById('dimaag1');
var dimaag2 = document.getElementById('dimaag2');
var dimaag3 = document.getElementById('dimaag3');
var braingif = document.getElementById('brain-gif');
var jokerimg = document.getElementById('Joker');
const jokerAudio = document.querySelector('.joker');
const jokerline = document.getElementById('jokerline');
jokerAudio.loop = true;
let timeout1, timeout2, timeout3;

function resetAnimation() {
    image1.style.display = 'block';
    image2.style.display = 'none';
    image3.style.display = 'none';
    image4.style.display = 'none';
    braingif.style.display = 'none';
    jokerimg.style.display = 'none';
    dimaag1.style.display = 'none';
    dimaag2.style.display = 'none';
    dimaag3.style.display = 'none';
    jokerline.style.display = 'none';
    image4.style.right = 'auto';
    image4.style.left = '0';
    jokerAudio.pause();
    if (currentAudio) currentAudio.play(); // Make sure currentAudio is defined
}

images.addEventListener('mouseenter', function () {
    resetAnimation();
    image1.style.display = 'none';
    image2.style.display = 'block';
    braingif.style.display = 'block';
    dimaag1.style.display = 'block';

    timeout1 = setTimeout(function () {
        braingif.style.display = 'none';
        image2.style.display = 'none';
        image3.style.display = 'block';
        dimaag1.style.display = 'none';
        dimaag2.style.display = 'block';
    }, 4000);

    timeout2 = setTimeout(function () {
        image3.style.display = 'none';
        image4.style.display = 'block';
        dimaag2.style.display = 'none';
        dimaag3.style.display = 'block';
    }, 8000);

    timeout3 = setTimeout(function () {
        dimaag3.style.display = 'none';
        jokerline.style.display = 'block';
        image4.style.right = '0';
        image4.style.left = 'auto';
        jokerimg.style.display = 'block';
        if (currentAudio) currentAudio.pause(); // Make sure currentAudio is defined
        jokerAudio.play();
    }, 17000);
});

images.addEventListener('mouseleave', function () {
    resetAnimation();
    clearTimeout(timeout1);
    clearTimeout(timeout2);
    clearTimeout(timeout3);
});




