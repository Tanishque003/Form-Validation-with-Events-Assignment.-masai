document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        if (!emailPattern.test(emailInput.value)) {
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    }

    function validatePassword() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = 'block';
        } else {
            passwordError.style.display = 'none';
        }
    }

    // Event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    nameInput.addEventListener('blur', validateName);
    
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
    
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);

    // Form submit event listener
    form.addEventListener('submit', (event) => {
        validateName();
        validateEmail();
        validatePassword();

        // Check if there are any visible error messages
        if (nameError.style.display === 'block' || 
            emailError.style.display === 'block' || 
            passwordError.style.display === 'block') {
            event.preventDefault(); // Prevent form submission
        }
    });
});
