import { UI } from "./view.js";
import {convertTime} from "./time.js";
import {COOKIE} from "./cookie.js";

UI.BTN_SETTINGS.addEventListener('click', renderSettings);
UI.MESSAGE.FORM.addEventListener('submit', renderMessage);

function renderSettings() {
    const settings = UI.TEMPLATE.SETTINGS.content.cloneNode(true);
    // UI.APPLICATION.append(settings); !! вопрос почему работает только после нижней строки
    settings.querySelector('.popup__exit').addEventListener('click', removeSettings);
    settings.querySelector('.chat__btn').addEventListener('click', logInChat); 
    UI.APPLICATION.append(settings);
}

function logInChat() {
    // event.preventDefault();
    const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByaXNlZG1hc3NhQHlhbmRleC5ieSIsImlhdCI6MTY1MTE1ODU5OCwiZXhwIjoxNjUxNjA0OTk4fQ.zQPZNFdvvrbHdQeAU9zPqIWshfqk9CUmLrdvgZ6Weco';
    fetch(url, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({name: 'lex'}),
    }) 
    .then(res => res.json())
    // .then(res => console.log(res))
    .then(renderMessage);
    removeSettings();                     
}

UI.CLOSE_WINDOW.addEventListener('click', removeSettings);
function removeSettings() {
    document.querySelector('.popup_wrapper').remove();
}

function renderMessage(user) {
    // console.log(user.name); !!! UNDEFINED!!!
    const text = UI.MESSAGE.INPUT.value;
    if(!text) return;
    const message = UI.MESSAGE.TEMPLATE.content.cloneNode(true);
    // message.querySelector('.message').textContent = 'Я: ' + text;
    message.querySelector('.message').textContent = `${user.name}: ${text}`;
    message.querySelector('.time').textContent = convertTime();
    UI.CHAT.WINDOW.append(message);
    //message.scrollIntoView(false); //?? вопрос почему не работает scrollIntoView(false)
    scrollChatDown();  
}

function scrollChatDown() {
    UI.CHAT.WINDOW.scrollTop = UI.CHAT.WINDOW.scrollHeight;  
}

UI.TEMPLATE.AUTHORIZATION.addEventListener('submit', sendEmail);
async function sendEmail() {
    renderVerification();
    // здесь пока закоменчен полноценный запрос на сервер для получения токена, чтобы не мучать сервер а в функции logInChat сразу пишу полученный от этого закоменченого запроса токен
    // пока просто вызываю renderVerification()
    // потом это раскоменчу
    /* alert('Success!');
    const url = 'https://mighty-cove-31255.herokuapp.com/api/user';
    const addressEmail = UI.INPUT.value;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({email: `${addressEmail}`}),
        })
        if(response.ok) {
            const json = await response.json();
            // console.log(json);
            renderVerification(json);
        } else alert('Invalid E-mail address!');
    } catch (error) {
        alert(error);
    } */
}

function renderVerification() {
    const verification = UI.TEMPLATE.VERIFICATION.content.cloneNode(true);
    verification.querySelector('.popup_wrapper').addEventListener('click', removeSettings);
    verification.querySelector('.chat__btn').addEventListener('click', setCookies);
    UI.APPLICATION.append(verification);
}

function setCookies() {
    const cookieValue = this.previousElementSibling.value;
    COOKIE.set('token', cookieValue);
    renderSettings();
    console.log(COOKIE.get('token'));
}









