$(document).ready(function () {
    let l1 = null;
    let l2 = null;
    const typingDelay = 100; // Delay for typing effect in milliseconds
    const backspacingDelay = 150; // Delay for backspacing effect in milliseconds

    const createTypedInstance = (elementId, options, onComplete) => {
        if (elementId === '#line1' && l1) {
            l1.destroy();
        } else if (elementId === '#line2' && l2) {
            l2.destroy();
        }

        const typed = new Typed(elementId, {
            ...options,
            onComplete: onComplete // Callback when typing completes
        });

        if (elementId === '#line1') {
            l1 = typed;
        } else if (elementId === '#line2') {
            l2 = typed;
        }
    };

    const backspaceText = (text, line, callback) => {
        let index = text.length;
        const intervalId = setInterval(() => {
            index--;
            const currentText = text.substring(0, index);
            $(line).text(currentText);
            if (index <= 0) {
                clearInterval(intervalId);
                if (callback) callback();
            }
        }, backspacingDelay);
    };

    const handleTyping = (newText1, newText2) => {
        createTypedInstance('#line1', {
            strings: [newText1],
            typeSpeed: typingDelay,
            backSpeed: 0,
            backDelay: 0,
            startDelay: 0,
            loop: false,
            showCursor: true
        }, () => { // Callback when line1 typing is complete
            createTypedInstance('#line2', {
                strings: [newText2],
                typeSpeed: typingDelay,
                backSpeed: 0,
                backDelay: 0,
                startDelay: 0,
                loop: false,
                showCursor: true
            });
        });
    };

    const handleBackspacingAndTyping = (newText1, newText2) => {
        const currentText1 = $('#line1').text();
        const currentText2 = $('#line2').text();
        
        const backspaceAndType = () => {
            if (currentText1) {
                backspaceText(currentText1, '#line1', () => {
                    handleTyping(newText1, newText2);
                });
            } else {
                handleTyping(newText1, newText2);
            }
        };

        if (currentText2) {
            backspaceText(currentText2, '#line2', backspaceAndType);
        } else {
            backspaceAndType();
        }
    };

    // Start typing with the initial text
    setTimeout(()=>{
        handleTyping('Hover');
    },12100);
    const showCursor = () => {
        $('#typed-container').addClass('cursor-visible').removeClass('cursor-hidden');
    };

    const hideCursor = () => {
        $('#typed-container').addClass('cursor-hidden').removeClass('cursor-visible');
    };

    $('.B-dayCard').mouseenter(function () {
        showCursor();
        $('.cake').addClass('show');
        handleBackspacingAndTyping('Happy Birthday', 'Enjoy your day!');
        $('.card').stop().animate({ top: '-90px' }, 'slow');
        setTimeout(() => {
            hideCursor();
        }, 8000);
    }).mouseleave(function () {
        hideCursor();
        showCursor(); // Ensure cursor is visible after mouse leave
        handleBackspacingAndTyping('Hello Cutie');
        $('.cake').removeClass('show');
        $('.card').stop().animate({ top: 0 }, 'slow');
    });
});