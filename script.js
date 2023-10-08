function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

    if (!emailPattern.test(email)) {
        alert('Invalid email format. Please enter a valid email address.');
    } else if (!passwordPattern.test(password)) {
        alert('Invalid password format. Password must be at least 8 characters long and contain at least one uppercase letter, one special character, and one number.');
    } else {
        alert('Sign-up Successful');
    }
}