async function login() {
     email = document.getElementById('signinEmail').value;
     password = document.getElementById('signinPassword').value;
    incorrectMsg = document.getElementById('incorrect');

    
    incorrectMsg.textContent = '';

    if (email === '' || password === '') {
        incorrectMsg.textContent = 'Please fill out all fields.';
        return;
    }

    
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

         data = await response.json();

        if (data.success) {
            window.location.href = '/home.html';
        } else {
            incorrectMsg.textContent = data.message;
        }
    } catch (error) {
        console.error('Error:', error);
        incorrectMsg.textContent = 'An error occurred. Please try again.';
    }
}