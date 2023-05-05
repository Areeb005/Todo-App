// const getItem = ()=>{
//     let get = JSON.parse(localStorage.getItem('data'));
//     return get;
// } 

const submit = () => {
    let name = document.getElementById('name');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let existingUsername;
    let data = JSON.parse(localStorage.getItem('data'));
    
    if(data === null){
        data = [];
    }

    data.forEach(element => {
        if(username.value === element.username){
           existingUsername = username.value;
        }
    });

    if (name.value === '' || username.value === '' || password.value === '' || confirmPassword.value === '') {
        if (name.value === '') {
            document.getElementById('nameError').innerText = 'Please Enter Your Name!'
        }
        if (username.value === '') {
            document.getElementById('usernameError').innerText = 'Please Enter Your Username!'
        }
        if (password.value === '') {
            document.getElementById('passwordError').innerText = 'Please Enter Your Password!'
        }
        if (confirmPassword.value === '') {
            document.getElementById('confirmPasswordError').innerText = 'Please Confirm Your Password!'
        }
    } 
    else if(existingUsername === username.value){
        document.getElementById('usernameError').innerText = 'Username Taken!'
    }
    else if(password.value !== confirmPassword.value) {
        document.getElementById('confirmPasswordError').innerText = "Password Doesn't Match!"
    }
    else {

        const userInfo = {
            username : username.value,
            name : name.value,
            password : password.value
        }

        data.push(userInfo);

        localStorage.setItem('data', JSON.stringify(data));

        username.value = '';
        name.value = '';
        password.value = '';
        confirmPassword.value = ''

        alert('Registered!'); 
    
        location = 'Signin.html';
    }
}

const signIn = () =>{
    location = "Signin.html"
}