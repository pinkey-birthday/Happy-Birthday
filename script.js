window.addEventListener("load", function() {
    setTimeout(function() {
        // Fade out the loader
        document.getElementById("loader").style.opacity = 0;

        // Wait for the fade-out to complete
        setTimeout(function() {
            // Hide the loader and show the main content
            document.getElementById("loader").style.display = "none";
            document.getElementById("container").style.display = "flex";
            
            // Fade in the main content
            setTimeout(function() {
                document.getElementById("container").style.opacity = 1;
            }, 50); // Slight delay to ensure display change is applied
        }, 1000); // Duration matches the transition time for loader fade-out
    }, 1500); // Adjust this delay as needed
});
document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.querySelector('.confetti');
    const colors = ['#ef476f', '#06d6a0', '#118ab2', '#ffbe0b'];
    function createConfettiPiece() {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        // Set random color
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        // Randomize animation type
        const animationType = Math.random() > 0.5 ? 'down' : 'downTwo';
        // Randomize animation duration and delay
        const duration = Math.random() * 3 + 2; // Duration between 2s and 5s
        const delay = Math.random() * 3 - 1.5; // Delay between -1.5s and 1.5s

        piece.style.animation = `${animationType} ${duration}s linear infinite`;
        piece.style.animationDelay = `${delay}s`;
        // Set random horizontal position
        piece.style.left = `${Math.random() * 100}vw`;
        return piece;
    }
    function generateConfetti(count) {
        for (let i = 0; i < count; i++) {
            const confettiPiece = createConfettiPiece();
            confettiContainer.appendChild(confettiPiece);
        }
    }
    generateConfetti(50); // Adjust the number of confetti pieces as needed

    const navbar = document.getElementById('navbar');
    const card = document.getElementById('Bday');
    setTimeout(() => {
        navbar.style.display = 'flex'; // Show the next button
    }, 1);
    const handleClickOutside = (event) => {
        if (!navbar.contains(event.target) && !navbarContent.contains(event.target)) {
            navbarContent.classList.remove('show');
            card.classList.toggle('move')
        }
    };

    document.addEventListener('click', handleClickOutside);
});
// Navbar toggle
document.getElementById('navbarToggle').addEventListener('click', () => {
    const navbarContent = document.getElementById('navbarContent');
    navbarContent.classList.toggle('show');
    const card = document.getElementById('Bday');
    card.classList.toggle('move');
});


function playAudio() {
    var audio = document.getElementById('background-audio');
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
}
document.addEventListener('click', function () {
    playAudio(); // Call playAudio function on click or tap
});
document.addEventListener('touchstart', function () {
    playAudio(); // Call playAudio function on click or tap
});