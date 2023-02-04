/* Form variables */
const form = document.querySelector('.contact-form');
const formNameInput = document.querySelector('#form-name-input');
const formEmailInput = document.querySelector('#form-email-input');
const formMessageInput = document.querySelector('#form-message-input');
const formSubmitButton = document.querySelector('#form-submit-button');

/* Form animation */
const formSpinner = document.querySelector('.contact-email-spinner');
const formAlert = document.querySelector('.form-alert');
const formSubmitSpinner = document.querySelector('.form-submit-spinner');

/* Green and red alert */
const greenAlert = document.querySelector('.green-alert');
const redAlert = document.querySelector('.red-alert');

const isEmail = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

const update = (value) => {
    formSpinner.classList.remove('visible');

    if(!isEmail(value)) {
        formAlert.classList.add('visible');
    } else {
        formAlert.classList.remove('visible');
    }
};

const debounce = (callback, delay) => {
    let interval;
    return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
            callback.apply(null, args);
        }, delay);
    };
};

formEmailInput.onkeyup = debounce((e) => {
    const { value } = e.target;
    update(value);
}, 500);

formEmailInput.onkeydown = () => {
    formSpinner.classList.add('visible');
};

const showGreenAlert = (message) => {
    let interval;
    greenAlert.textContent = message;
    greenAlert.classList.add('show');
    clearTimeout(interval);
    interval = setTimeout(() => {
        greenAlert.classList.remove('show');
    }, 3000);
};

const showRedAlert = (message) => {
    let interval;
    redAlert.textContent = message;
    redAlert.classList.add('show');
    clearTimeout(interval);
    interval = setTimeout(() => {
        redAlert.classList.remove('show');
    }, 3000);
};

function timeFormat() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    date = date.toLocaleDateString();
    return time + " " + date;
}

const sendResponse = async () => {
    try {
        await fetch('https://formspree.io/f/xjvdgzzw', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                'date': timeFormat(),
                'Name': formNameInput.value,
                'Email': formEmailInput.value,
                'Message': formMessageInput.value,
            }),
        }).then(response => {
            if(response.ok) {
                showGreenAlert('Message sent successfully');
                form.reset();
            } else {
                response.json().then(data => {
                    if(Object.hasOwn(data, 'error')) {
                        showRedAlert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        showRedAlert('Oops! There was a problem submitting your form');
                    }
                })
            }
        })
    }
    catch(err) {
        showRedAlert('Oops! There was a problem submitting your form');
    }
    formSubmitSpinner.classList.remove('load');
};

formSubmitButton.addEventListener('click', async(e) => {
    e.preventDefault();
    const name = formNameInput.value.trim();
    const email = formEmailInput.value.trim();
    const message = formMessageInput.value.trim();

    if(name != '' && email != '' && message != '' && isEmail(email)) {
        formSubmitSpinner.classList.add('load');
        sendResponse();
    } else {
        showRedAlert('Please fill out all fields correctly');
    }
});