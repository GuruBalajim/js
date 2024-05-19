
function signUp1() {
    // Get input values
    const name = document.getElementById('nameSave').value;
    const email = document.getElementById('EmailSave').value;
    const password = document.getElementById('passwordSave').value;

    // Validate inputs
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Validate email format (you can use a regular expression)
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Retrieve existing users from local storage or create an empty array
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Add the new user data to the existing users array
    const newUser = { name, email, password };
    existingUsers.push(newUser);

    // Save the updated users array back to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Display success message or redirect to another page
    alert('Sign up successful!');
    window.location.href = './index.html'; // Redirect to sign-in page
}
function sginIn() {
    // Get input values
    const email = document.getElementById('Email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from local storage
    const existingUsersJSON = localStorage.getItem('users');
    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Find user with matching email and password
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Sign in successful!');
        window.location.href = './main.html';
    } else {
        // Invalid credentials
        alert('Invalid email or password');
    }
}

