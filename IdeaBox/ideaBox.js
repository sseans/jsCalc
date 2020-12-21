// Selectors
const logIn = document.querySelector('button');

// Event Listeners
logIn.addEventListener('click', logInInterface)

// Functions
function logInInterface() {
    let element = document.createElement('div');
    element.className = 'opacityScreen';
    document.body.appendChild(element);
    element.style.width = '100%';
    element.style.height =  '100%';
    element.style.backgroundColor = "#1d3557";
    element.style.opacity = '50%';
    element.style.position = 'fixed';
    element.style.top = '0';
    element.style.left = '0';
    element.style.transition = 'ease-in-out 300ms';
}

