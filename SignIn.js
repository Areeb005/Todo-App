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
            document.getElementById('usernameError').innerText = "Please Enter Your Username!"
            document.getElementById('userOrPassError').innerText = ""
        }
        if (password.value === '') {
            document.getElementById('passwordError').innerText = "Please Enter Your Password!"
            document.getElementById('userOrPassError').innerText = ""

        }
    } else if (username.value !== existingUsername || password.value !== existingPassword) {
        if (username.value !== existingUsername && password.value !== existingPassword) {
            document.getElementById('userOrPassError').innerText = "Username OR Password Incorrect!"
            document.getElementById('passwordError').innerText = ""
            document.getElementById('usernameError').innerText = ""
        } else if (username.value !== existingUsername) {
            document.getElementById('usernameError').innerText = "Username Incorrect!"
            document.getElementById('userOrPassError').innerText = ""
        } else if (password.value !== existingPassword) {
            document.getElementById('passwordError').innerText = "Password Incorrect!"
            document.getElementById('userOrPassError').innerText = ""
        }
    } else if (username.value === existingUsername && password.value === existingPassword) {
        let currentUser = [];
        let data = {
            name : existingName,
            username: existingUsername,
            password: existingPassword
        }

        currentUser.push(data)


        localStorage.setItem('currentUser', JSON.stringify(currentUser))

        location = 'Todo.html';
    }


}

const signUp = () =>{
    location = "Index.html"
}