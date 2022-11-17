import { mapListToDOMElements, stopArrowAnimation, setFocusAndTitle, addAPIScript, displayScrollBtn, showAsideNav, backToTop, scrollToTheEnd } from "./domInteractions.js";
import { sendFormToAPI } from "./requests.js";

class ZerOne {
    constructor() {
        this.viewElements = {};
        this.InitializeApp();
    };

    InitializeApp = () => {
        this.connectDOMElements();
        this.setupListeners();
        setFocusAndTitle();
        addAPIScript();
    };

    connectDOMElements = () => {
        // Mapping chosen DOM elements to the lists.
        const listOfIds = Array.from(document.querySelectorAll('[id]')).map(element => element.id);
        const listOfButtons = Array.from(document.querySelectorAll('[data-offer-name]')).map(element => element.dataset.offerName);

        this.viewElements = mapListToDOMElements(listOfIds, 'id');
        this.offerButtons = mapListToDOMElements(listOfButtons, 'data-offer-name');
        this.listOfLinks = Array.from(document.querySelectorAll("aside a"));
    };

    setupListeners = () => {
        Object.keys(this.offerButtons).forEach(offerName => {
            this.offerButtons[offerName].addEventListener('click', this.goToContactForm);
        });
        window.addEventListener('scroll', displayScrollBtn);
        this.viewElements.contactForm.addEventListener('submit', this.sendEmail);
        // Listeners with imported functions.
        this.listOfLinks.forEach(link => link.addEventListener('click', showAsideNav));
        this.viewElements.menuBtn.addEventListener('click', showAsideNav);
        this.viewElements.menuBtn.addEventListener('keydown', showAsideNav);
        this.viewElements.offerList.addEventListener('scroll', stopArrowAnimation);
        this.viewElements.goTop.addEventListener('click', backToTop);
        this.viewElements.pricingMore.addEventListener('click', scrollToTheEnd);
    };

    goToContactForm = event => {
        let contactForm = this.viewElements.contactForm
        let msg = `Dzień dobry.\n\nKontaktuje się w sprawie współpracy długoterminowej w pakiecie "${event.target.dataset.offerName.toUpperCase()}".\nProszę o więcej informacji w odpowiedzi na maila podanego w formularzu.`;
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        contactForm.message.value = msg;
    };

    sendEmail = event => {
        event.preventDefault();
        let name = event.target.fname.value;

        if (name.length <= 2) {
            window.alert('Pole "Imię" musi posiadać conajmniej 3 znaki.')
            return false
        };

        let templateParams = {
            fname: name,
            contact_email: event.target.contact_email.value,
            message: event.target.message.value,
        };

        sendFormToAPI(templateParams);
    };
};

document.addEventListener('DOMContentLoaded', new ZerOne());
