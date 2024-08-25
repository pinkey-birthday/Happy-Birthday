document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const container = document.querySelector('.container');
    const toggleButton = document.getElementById('toggleButton');
    const banner = document.getElementById('banner');
    const balloonLeft = document.getElementById('balloon-left');
    const balloonRight = document.getElementById('balloon-right');
    const cake = document.getElementById('cake');
    const flame = document.getElementById('flame');
    const toggleButton1 = document.getElementById('navbarToggle');
    const navbarContent = document.querySelector('.navbar-content');
    const navbar = document.getElementById('navbar');
    let balloonsContainer = document.getElementById('balloons-container');

    if (!balloonsContainer) {
        balloonsContainer = document.createElement('div');
        balloonsContainer.id = 'balloons-container';
        document.body.appendChild(balloonsContainer);
    }

    const body = document.body;
    const audio1 = new Audio('birthday-song.mp3'); // Path to your audio file
    const audio2 = new Audio('hbd.mp3');

    audio1.loop = true; // This will loop the first audio
    audio2.loop = true; // This will loop the second audio

    window.addEventListener('load', () => {
        setTimeout(function () {
            loader.style.display = 'none';
            container.style.display = 'block'; // Show the container when the page is loaded
            document.body.style.overflow = 'hidden'; // Disable scrolling
        }, 700);
    });

    toggleButton.addEventListener('click', () => {
        switch (toggleButton.textContent) {
            case 'Turn On Light':
                body.classList.add('peach-after');
                document.getElementById('bulb-container').style.display = 'flex'; // Show the bulb container
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Special Music for You';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000); // Delay for 3 seconds
                break;
            case 'Special Music for You':
                audio1.play(); // Play the music
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Let\'s Do Some Decoration';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000); // Delay for 3 seconds
                break;
            case 'Let\'s Do Some Decoration':
                banner.style.display = 'block'; // Show the banner
                banner.classList.add('banner-come'); // Start the animation
                balloonLeft.style.display = 'block'; // Show the left balloon
                balloonLeft.classList.add('fade_in_up'); // Start left balloon animation
                balloonRight.style.display = 'block'; // Show the right balloon
                balloonRight.classList.add('fade_in_up'); // Start right balloon animation
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Some More Balloons!';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000); // Delay for 3 seconds
                break;
            case 'Some More Balloons!':
                startBalloons(); // Start the balloon animation
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Special Cake for You';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000); // Delay for 3 seconds
                break;
            case 'Special Cake for You':
                cake.style.display = 'block'; // Show the cake
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Light the Candle';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000); // Delay for 3 seconds
                break;
            case 'Light the Candle':
                flame.style.display = 'block';
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Happy Birthday Pinkey!';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000); // Delay for 3 seconds
                break;
            case 'Happy Birthday Pinkey!':
                audio2.play();
                audio1.pause();
                toggleButton.style.display = 'none'; // Hide the current button
                setTimeout(() => {
                    toggleButton.textContent = 'Enjoy !!';
                    toggleButton.style.display = 'block'; // Show the next button
                }, 3000);
                navbar.style.display = 'flex';
                break;
        }
    });

    function startBalloons() {
        const maxBalloons = 20;

        // Start creating balloons immediately
        for (let i = 0; i < maxBalloons; i++) {
            setTimeout(() => {
                let balloon = document.createElement('div');
                balloon.classList.add('single-balloon');
                balloon.style.backgroundImage = `url('images/b${(i + 1) % 10 || 10}.png')`;

                // Randomize initial position and horizontal sway
                const initialLeft = Math.random() * 100; // Between 0 and 100vw
                const horizontalSway = Math.random() * 30 - 15; // Between -15vw and 5vw
                const rotateDeg = (i % 2 === 0 ? -1 : 1) * (Math.random() * 20 - 10);
                balloon.style.left = `${initialLeft}vw`;
                balloon.style.setProperty('--horizontal-sway', `${horizontalSway}vw`);
                balloon.style.setProperty('--rotate-deg', `${rotateDeg}deg`);

                // Randomize size
                const scale = Math.random() * 0.7 + 0.6; // Between 0.6 and 1.0
                balloon.style.width = `${80 * scale}px`;
                balloon.style.height = `${120 * scale}px`;

                balloonsContainer.appendChild(balloon);

                // Ensure balloon starts animation immediately
                balloon.offsetHeight; // Trigger reflow
                balloon.style.animationPlayState = 'running';

                balloon.addEventListener('animationend', () => {
                    balloon.remove();
                });
            }, i * 600); // Staggered start with 600ms delay for each balloon
        }
    }

    toggleButton1.addEventListener('click', () => {
        navbarContent.classList.toggle('show');
    });

    // Close the navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !toggleButton1.contains(event.target)) {
            navbarContent.classList.remove('show');
        }
    });

    // Prevent closing the navbar when clicking inside it
    navbarContent.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
