export const sendFormToAPI = templateParams => {
    emailjs.send('contact_service', 'contactForm', templateParams, 'okzHUzoHlztrxTuZ1')
    .then(response => {
        if (response.status >= 200 && response.status <= 300) {
            document.getElementById('formSendBtn').innerText = 'Wysłano';
        };
    });
};