const loginForm = document.querySelector('#loginForm');
const loginInput = loginForm.querySelector('#loginInput');
const greetingTag = document.querySelector('#greeting');

function submit(submit) {
    submit.preventDefault();
    loginInput.classList.add('hidden');
    const userInfo = loginInput.value;
    localStorage.setItem('username', userInfo);
    const timeblcok = document.querySelector('#Time .clock');
    timeblcok.classList.remove('hidden');
    greeting(userInfo);
}

function greeting(userInfo) {
    greetingTag.classList.remove('hidden');
    localStorage.getItem('username', userInfo);
    greetingTag.innerText = `Hello, ${userInfo}`;
}

if (localStorage.key('username') === null) {
    loginForm.addEventListener('submit', submit);
    const timeblcok = document.querySelector('#Time .clock');
    timeblcok.classList.add('hidden');
}
else {
    loginInput.classList.add('hidden');
    const username = localStorage.getItem('username');
    greeting(username);
    greetingTag.classList.remove('hidden');
    
}