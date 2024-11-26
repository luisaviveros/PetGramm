export class PetProfileCard extends HTMLElement {
    petName = '';
    petDescription = '';
    petImageUrl = '';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Atributos opcionales para personalizar la tarjeta
        this.petName = this.getAttribute('pet-name') || 'Pet Name';
        this.petDescription = this.getAttribute('pet-description') || 'Description of the pet';
        this.petImageUrl = this.getAttribute('pet-image-url') || 'https://via.placeholder.com/150';

        this.render();
    }
