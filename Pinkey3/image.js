var myElement = document.getElementById('myElement');
var loopContent = document.getElementById('hover-gif');
var intervalId;

function toggleLoopContent() {
    if (loopContent.style.display === 'none') {
        loopContent.style.display = 'block';
    } else {
        loopContent.style.display = 'none';
    }
}

myElement.addEventListener('mouseenter', function () {
    // Start toggling every 5 seconds (5000 milliseconds)
    intervalId = setInterval(toggleLoopContent, 10000);
    toggleLoopContent(); // Show content immediately on hover
});

myElement.addEventListener('mouseleave', function () {
    clearInterval(intervalId); // Stop the toggle loop
    loopContent.style.display = 'none'; // Ensure content is hidden when mouse leaves
});
