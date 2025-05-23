const form = document.getElementById('form');
const newsletter = document.getElementById('newsletter-container');
const success = document.getElementById('success-container');
const dismissButton = document.querySelector('.dismiss');
const emailInput = document.getElementById('email-address');
const errorMessage = document.getElementById('error-message');


// Retrieve data from form
form.addEventListener ('submit', (e) => {
    e.preventDefault(); // Prevent default

    const emailValue = emailInput.value.trim();

    // Reset state error
    emailInput.classList.remove('invalid');
    errorMessage.textContent = '';

    // Custom email validation
    const isValidEmail = /\S+@\S+\.\S+/.test(emailValue);

    if (!isValidEmail) {
        errorMessage.textContent = 'Valid email required';
        emailInput.classList.add('invalid');
        return;
    }

    // If valid, proceed
    const formData = new FormData(e.target); // Form data object
    const data = Object.fromEntries(formData.entries());

    newsletter.classList.add('hidden');
    success.classList.remove('hidden');
    console.log(data);
});

dismissButton.addEventListener('click', () => {
    success.classList.add('hidden'); // Hide element
    newsletter.classList.remove('hidden'); // Show element
    form.reset();

    // Reset errors
    errorMessage.textContent = '';
    emailInput.classList.remove('invalid');
});
