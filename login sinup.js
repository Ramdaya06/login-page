// JavaScript to toggle between Login and Signup forms
document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('signup-form').classList.remove('active');
});

document.getElementById('signup-btn').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
});

// Initially display the login form
document.getElementById('login-form').classList.add('active');
