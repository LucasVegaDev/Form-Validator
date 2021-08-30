// DOM Access

const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.psw');
const confirmPassword = document.querySelector('.confirm-psw');
const submit = document.querySelector('.submit-btn');
const usernameSmall = document.querySelector('.username-small')
const emailSmall = document.querySelector('.email-small')
const passwordSmall = document.querySelector('.password-small')
const confirmPasswordSmall = document.querySelector('.confirmpsw-small')

// FUNCTIONS 
function usernameValidation() {
    if (username.value.length < 5) {
        username.classList.add('error')
        usernameSmall.classList.add('error')
    } else {
        username.classList.remove('error')
        usernameSmall.classList.remove('error')
        username.classList.add('success')
    }
} 
function emailValidation(valor) {
    const emailRegExp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!emailRegExp.test(valor)) {
        email.classList.add('error')
        emailSmall.classList.add('error')
    } else {
        email.classList.remove('error')
        emailSmall.classList.remove('error')
        email.classList.add('success') 
    }
} 
function passwordValidation() {
    if (password.value.length < 8) {
        password.classList.add('error')
        passwordSmall.classList.add('error')    
    } else {
        password.classList.remove('error')
        passwordSmall.classList.remove('error')    
        password.classList.add('success')
    }
}
function confirmPasswordValidation() {
    if (confirmPassword.value != password.value || confirmPassword.value === '') {
        confirmPassword.classList.add('error')
        confirmPasswordSmall.classList.add('error')
    } else {
        confirmPassword.classList.remove('error')
        confirmPassword.classList.add('success')
        confirmPasswordSmall.classList.remove('error')
    }
}

// Event Listeners

// CLICK EVENT 
submit.addEventListener('click', () => {
    usernameValidation();
    emailValidation(email.value);
    passwordValidation();
    confirmPasswordValidation();
})

// KEYDOWN EVENT
window.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        usernameValidation();
        emailValidation(email.value);
        passwordValidation();
        confirmPasswordValidation();
    } else {
        
    }
})