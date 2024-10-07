document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Retrieve user input values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Simple client-side validation
        if (username === '' || password === '') {
            errorMessage.textContent = 'Both fields are required.';
            errorMessage.style.display = 'block';
            return;
        }

        // Simulate sending login data to the server
        simulateServerLogin(username, password)
            .then(response => {
                if (response.success) {
                    // Redirect to a different page upon successful login
                    window.location.href = 'HTMLPage1CVhomePAGE.html'; // Change 'homepage.html' to the URL you want to redirect to
                } else {
                    errorMessage.textContent = response.message;
                    errorMessage.style.display = 'block'; // Show error message
                }
            })
            .catch(error => {
                console.error('Error:', error);
                errorMessage.textContent = 'An error occurred. Please try again.';
                errorMessage.style.display = 'block'; // Show error message
            });
    });

    // Simulate server-side login logic (replace with real API call in production)
    function simulateServerLogin(username, password) {
        return new Promise((resolve, reject) => {
            // Simulated delay for the server response
            setTimeout(() => {
                // Dummy validation (replace with real server validation)
                if (username === 'user' && password === 'password') {
                    resolve({ success: true });
                } else {
                    resolve({ success: false, message: 'Invalid username or password. register a account!.' });
                }
            }, 1000); // Simulated network delay
        });
    }
});
