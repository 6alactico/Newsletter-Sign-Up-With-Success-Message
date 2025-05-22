const form = document.getElementById('form');
const newsletter = document.getElementById('newsletter-container');
const success = document.getElementById('success-container');
const dismissButton = document.querySelector('.dismiss');

// Retrieve data from form
form.addEventListener ('submit', (e) => {
    e.preventDefault(); // Prevent default

    let formData = new FormData(e.target); // Form data object
    let data = Object.fromEntries(formData.entries());

    newsletter.classList.add('hidden');
    success.classList.remove('hidden');
    
    console.log(data);
});

dismissButton.addEventListener('click', () => {
    success.classList.add('hidden'); // Hide element
    newsletter.classList.remove('hidden'); // Show element
    form.reset();
});
