export const sendFormToAPI = templateParams => {
    emailjs.send('contact_service', 'contactForm', templateParams, 'bqUS5JIDcWVYvl22D')
    .then(response => {
        if (response.status >= 200 && response.status <= 300) {
            document.getElementById('formSendBtn').innerText = 'Wysłano';
        };
    });
};