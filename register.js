const username = document.getElementById('username');
const nick = document.getElementById('nick');
const email = document.getElementById('email');
const button = document.getElementById('button');


button.addEventListener('click', () => {
    if (username.value.length === 0 && nick.value.length === 0 && email.value.length === 0) {
        alert('Please enter all information');
    }
    if (username.value.length > 0 && nick.value.length > 0 && email.value.length > 0) {
        alert('registration is successfully');
        window.location.href = "index.html";
    }
})