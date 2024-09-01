//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkboxInput = document.getElementById('checkbox');
    const existingUserDiv = document.getElementById('existingUserDiv');
    const existingButton = document.getElementById('existing');

    // Check if user details are saved in local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingUserDiv.style.display = 'block';
    }

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkboxInput.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    if (existingButton) {
        existingButton.addEventListener('click', function () {
            const savedUsername = localStorage.getItem('username');
            alert(`Logged in as ${savedUsername}`);
        });
    }
});
