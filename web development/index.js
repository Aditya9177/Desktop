const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');



registerLink.addEventListener('click',()=> {wrapper.classList.add('active');});
loginLink.addEventListener('click',()=> {wrapper.classList.remove('active');});

btnPopup.addEventListener('click',()=> {wrapper.classList.add('active-popup');});
iconclose.addEventListener('click',()=> {wrapper.classList.remove('active-popup');}); 


function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if username is empty
    if (username == "") {
        alert("Username must be filled out");
        return false;
    }

    // Check if email is empty
    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    // Check if email is valid
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Invalid email address");
        return false;
    }

    // Check if password is empty
    if (password == "") {
        alert("Password must be filled out");
        return false;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // If all validation passes, return true
    return true;
}
