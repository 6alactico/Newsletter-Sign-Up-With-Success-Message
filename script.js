const emailForm = document.getElementById('email-form');
const newsletter = document.getElementById('newsletter-container');
const success = document.getElementById('success-container');
const dismissButton = document.querySelector('.dismiss');
const emailAddress = document.getElementById('email-address');
const errorMessage = document.getElementById('error-message');

function resetErrorState() {
    emailAddress.classList.remove('invalid');
    errorMessage.textContent = '';
}
// Retrieve data from form
emailForm.addEventListener ('submit', (e) => {
    e.preventDefault(); // Prevent default

    const emailValue = emailAddress.value.trim(); // Removes whitespace characters

    resetErrorState();

    // Email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(emailValue);

    if (!isValidEmail) {
        errorMessage.textContent = 'Valid email required';
        emailAddress.classList.add('invalid');
        return;
    }

    // If valid, proceed
    const formData = new FormData(e.target); // Form data object
    const data = Object.fromEntries(formData.entries());

    newsletter.classList.add('hidden');
    success.classList.remove('hidden');
});

dismissButton.addEventListener('click', () => {
    success.classList.add('hidden'); // Hide element
    newsletter.classList.remove('hidden'); // Show element
    emailForm.reset();

    resetErrorState();
});