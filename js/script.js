// Initialize EmailJS (put this in your main script)
(function() {
    emailjs.init("egIcLXv1n1G4qLmQr");
})();

// Add this function to handle form submission
function sendMessage(e) {
    e.preventDefault();
    
    // Get the button and change text to show loading
    const button = document.querySelector('.contact-form button');
    const originalText = button.innerHTML;
    button.innerHTML = 'Sending...';
    button.disabled = true;

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    // Send email using EmailJS
    emailjs.send(
        'service_51zy6np',
        'template_4dtyn89',
        templateParams
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
    })
    .finally(() => {
        // Reset button state
        button.innerHTML = originalText;
        button.disabled = false;
    });
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', sendMessage);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var typed = new Typed('#element', {
        strings: [
            'Developer',
            'Assistant Professor',
            'Tech Enthusiast',
            'PC Gamer'
        ],
        typeSpeed: 50,        // Typing speed in milliseconds
        backSpeed: 30,        // Backspacing speed in milliseconds
        backDelay: 2000,      // Time before backspacing
        startDelay: 500,      // Time before typing starts
        loop: true,           // Loop the animation
        showCursor: true,     // Show the cursor
        cursorChar: '|',      // Character for cursor
        autoInsertCss: true   // Insert required CSS automatically
    });

    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
