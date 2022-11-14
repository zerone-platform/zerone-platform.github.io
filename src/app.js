import { mapListToDOMElements, changeScrollBtn, slideAsideNav } from "./domInteractions.js";
import { sendFormToAPI } from "./requests.js";

class ZerOne {
    constructor() {
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
        this.listOfLinks = Array.from(document.querySelectorAll("aside a"));
    };

    setupListeners = () => {
        Object.keys(this.offerButtons).forEach(offerName => {
            this.offerButtons[offerName].addEventListener('click', this.goToContactForm);
        });
        window.addEventListener('scroll', this.displayScrollBtn);
        this.listOfLinks.forEach(link => link.addEventListener('click', this.showAsideNav));
        this.viewElements.contactForm.addEventListener('submit', this.sendEmail);
        this.viewElements.goTop.addEventListener('click', this.backTop);
        this.viewElements.menuBtn.addEventListener('click', this.showAsideNav);
    };

    goToContactForm = event => {
        let contactForm = this.viewElements.contactForm
        let msg = `Dzień dobry.\n\nKontaktuje się w sprawie współpracy długoterminowej w pakiecie "${event.target.dataset.offerName.toUpperCase()}".\nProszę o więcej informacji w odpowiedzi na maila podanego w formularzu.`;
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
        contactForm.message.value = msg;
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

    displayScrollBtn = event => {
        const black = this.viewElements.goTop.children[0];
        const white = this.viewElements.goTop.children[1];

        changeScrollBtn(black, white);
    };

    backTop = event => {
        this.viewElements.navigation.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    showAsideNav = event => {
        const about = this.viewElements.about;
        const aside = this.viewElements.asideNavigation;

        slideAsideNav(about, aside);
    };
};

document.addEventListener('DOMContentLoaded', new ZerOne());
