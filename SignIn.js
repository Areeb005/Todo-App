const login = () => {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let data = JSON.parse(localStorage.getItem('data'));
    let existingUsername;
    let existingPassword;
    let existingName;

    data.forEach(element => {
        if (username.value === element.username) {
            existingUsername = element.username;
            existingPassword = element.password;
            existingName = element.name;
        }
    });

    console.log(existingName);

    if (username.value === '' || password.value === '') {
        if (username.value === '') {
            alert('Please Enter Your Username');
        }
        if (password.value === '') {
            alert('Please Enter Your Password');
        }
    } else if (username.value !== existingUsername || password.value !== existingPassword) {
        if (username.value !== existingUsername && password.value !== existingPassword) {
            alert('Username or Password Incorrect!');
        } else if (username.value !== existingUsername) {
            alert('Username Incorrect');
        } else if (password.value !== existingPassword) {
            alert('Password Incorrect');
        }
    } else if (username.value === existingUsername && password.value === existingPassword) {
        let currentUser = {
            name : existingName,
            username: existingUsername,
            password: existingPassword
        }

        localStorage.setItem('currentUser', JSON.stringify(currentUser))

        location = 'index.html';
    }


}