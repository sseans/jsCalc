// Selectors
const logIn = document.querySelector('button');

// Event Listeners
logIn.addEventListener('click', logInInterface)

// Functions
function logInInterface() {
    
    //Create Opaque BG Div
    const bg = document.createElement('div');
    bg.classList.add('opacityScreen');
    document.body.appendChild(bg);

    //Create Login Card & Profile Picture
    const card = document.createElement('div');
    card.classList.add('logInCard');
    bg.appendChild(card);
    
    const profilePic = document.createElement('div');
    profilePic.classList.add('profilePic');
    card.appendChild(profilePic)

    //Create Login Fields & Welcome Text
    const logInField = document.createElement('div');
    logInField.classList.add('logInField');
    card.appendChild(logInField);

    const welcome = document.createElement('p');
    welcome.innerText = 'Welcome Back! Sign in please!';
    welcome.classList.add('welcome');
    logInField.appendChild(welcome);
    
    const inputUser = document.createElement('input');
    inputUser.classList.add('inputUser');
    inputUser.placeholder = "Username";
    logInField.appendChild(inputUser);
    
    const inputPassword = document.createElement('input');
    inputPassword.classList.add('inputPassword');
    inputPassword.placeholder = "Password";
    logInField.appendChild(inputPassword);
}

