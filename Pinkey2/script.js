let highestz = 1;
window.addEventListener("load", function() {
    setTimeout(function() {
        // Hide the loader
        document.getElementById("loader").style.display = "none";
        // Show the main content
        document.getElementById("header").style.display = "flex";
    }, 1500);
});

class Paper {
    holdingPaper = false;
    prevMouseX = 0;
    prevMouseY = 0;
    mouseX = 0;
    mouseY = 0;
    velocityX = 0;
    velocityY = 0;
    currentPaperX = 0;
    currentPaperY = 0;
    currentRotation = 0;
    moved = false;

    init(paper) {
        // Preset rotation based on inline style
        const initialTransform = window.getComputedStyle(paper).transform;
        if (initialTransform !== 'none') {
            const values = initialTransform.split('(')[1].split(')')[0].split(',');
            const a = values[0];
            const b = values[1];
            const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            this.currentRotation = angle;
        }

        const handleStart = (e) => {
            e.preventDefault(); // Prevent default to avoid issues on mobile
            this.holdingPaper = true;
            paper.style.zIndex = highestz;
            highestz += 1;

            this.prevMouseX = e.clientX || e.touches[0].clientX;
            this.prevMouseY = e.clientY || e.touches[0].clientY;
        };

        const handleMove = (e) => {
            if (!this.holdingPaper) return;

            e.preventDefault(); // Prevent default to avoid issues on mobile

            this.mouseX = e.clientX || e.touches[0].clientX;
            this.mouseY = e.clientY || e.touches[0].clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            this.currentPaperX += this.velocityX;
            this.currentPaperY += this.velocityY;

            // Apply a more subtle and controlled rotation based on movement
            const rotationChange = this.velocityX * 0.05; // Reduced multiplier for subtle rotation
            this.currentRotation += rotationChange;

            // Limit the rotation to a specific range, e.g., -10 to 10 degrees
            this.currentRotation = Math.max(Math.min(this.currentRotation, 10), -10);

            paper.style.transform = `translate(${this.currentPaperX}px, ${this.currentPaperY}px) rotate(${this.currentRotation}deg)`;

            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
            if (!this.moved && paper.classList.contains('drag')) {
                this.moved = true;
                setTimeout(() => {
                    paper.classList.add('vanish');
                }, 500);
            }
        };

        const handleEnd = () => {
            this.holdingPaper = false;
        };

        paper.addEventListener('mousedown', handleStart);
        paper.addEventListener('touchstart', handleStart, { passive: true });

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('touchmove', handleMove, { passive: true });

        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));
papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
});

const rosepaper = document.querySelector('.rose');
// Function to handle both mouse and touch events
function handleStart(event) {
    // Prevent default browser behavior for touch events
    event.preventDefault();
    // Update z-index and handle touch/click event
    rosepaper.style.zIndex = highestz;
    highestz += 1;
}

// Event listener for both mouse and touch events
rosepaper.addEventListener('mousedown', handleStart);
rosepaper.addEventListener('touchstart', handleStart);

function playAudio() {
    var audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
}

// Event listener for user interaction (click or tap)
document.addEventListener('click', function () {
    playAudio(); // Call playAudio function on click or tap
});
document.addEventListener('touchstart', function () {
    playAudio(); // Call playAudio function on click or tap
});
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    setTimeout(() => {
        navbar.style.display = 'flex'; // Show the next button
    }, 3000);
    const handleClickOutside = (event) => {
        if (!navbar.contains(event.target) && !navbarContent.contains(event.target)) {
            navbarContent.classList.remove('show');
        }
    };

    document.addEventListener('click', handleClickOutside);
});
// Navbar toggle
document.getElementById('navbarToggle').addEventListener('click', () => {
    const navbarContent = document.getElementById('navbarContent');
    navbarContent.classList.toggle('show');
});