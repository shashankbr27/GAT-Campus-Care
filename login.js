document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.cont').classList.toggle('s--signup');
});

async function signup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const usn = document.getElementById('signup-usn').value;
    const password = document.getElementById('signup-password').value;

    if (!name || !email || !usn || !password) {
        document.getElementById('signup-error').innerText = 'All fields are required!';
        return;
    }

    const response = await fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, usn, password })
    });

    const result = await response.json();

    if (result.success) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('signup-error').innerText = result.message;
    }
}

async function login() {
    const usn = document.getElementById('usn').value;
    const password = document.getElementById('password').value;

    if (!usn || !password) {
        document.getElementById('login-error').innerText = 'USN and Password are required!';
        return;
    }

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ usn, password })
    });

    const result = await response.json();

    if (result.success) {
        window.location.href = 'home.html';
    } else {
        document.getElementById('login-error').innerText = result.message;
    }
}
