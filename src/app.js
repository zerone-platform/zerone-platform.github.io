import { mapListToDOMElements } from "./domInteractions.js";
import { sendFormToAPI } from "./requests.js";

class Tweeby {
    constructor () {
        this.viewElements = {};
        this.InitializeApp();
    };

    InitializeApp = () => {
        this.connectDOMElements();
        this.setupListeners();
    };

    connectDOMElements = () => {
        // Mapping chosen DOM elements to the lists.
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(element => element.id);
        const listOfButtons = Array.from(document.querySelectorAll('[data-offer-name]')).map(element => element.dataset.offerName);

        this.viewElements = mapListToDOMElements(listOfIds, 'id');
        this.offerButtons = mapListToDOMElements(listOfButtons, 'data-offer-name');
    };

    setupListeners = () => {
        Object.keys(this.offerButtons).forEach(offerName => {
            this.offerButtons[offerName].addEventListener('click', this.goToContactForm);
        });
        this.viewElements.contactForm.addEventListener('submit', this.sendEmail)
    };

    goToContactForm = event => {
        let contactForm = this.viewElements.contactForm
        let msg = `Dzień dobry.\n\nKontaktuje się w sprawie współpracy długoterminowej w pakiecie "${event.target.dataset.offerName.toUpperCase()}".\nProszę o więcej informacji w odpowiedzi na maila podanego w formularzu.`;
        contactForm.scrollIntoView({behavior: 'smooth', block: 'center'});
        contactForm.childNodes[13].value = msg;
    };

    sendEmail = event => {
        event.preventDefault();
        if (this.viewElements.newsletter.checked) {
            // NEWSLETTER
        };
        let templateParams = {
            fname: event.target.fname.value,
            contact_email: event.target.contact_email.value,
            message: event.target.message.value,
        };
        
        sendFormToAPI(templateParams);
    };
};

document.addEventListener('DOMContentLoaded', new Tweeby());
