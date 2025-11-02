// Google Sheet integration example
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
        method: 'POST',
        body: formData
    })
        .then(res => alert('Message Sent Successfully!'))
        .catch(err => alert('Error sending message.'));
});
// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;

        // Close other items
        accordionButtons.forEach((b) => {
            if (b !== btn) b.parentElement.classList.remove('active');
        });

        // Toggle current one
        item.classList.toggle('active');
    });
});
