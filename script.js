const form = document.getElementById('form');
const newsletter = document.getElementById('newsletter-container');
const success = document.getElementById('success-container');

// Retrieve data from form
const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    newsletter.classList.add('hidden');
    success.classList.remove('hidden');
    
    console.log('Form submitted');
};

form.addEventListener('submit', handleSubmit);