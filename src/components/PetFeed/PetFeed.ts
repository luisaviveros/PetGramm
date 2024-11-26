export class PetFeed extends HTMLElement {
    pets = []; // Array de URLs de las imágenes

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Leer el atributo 'pets' como un JSON string
        const petsAttr = this.getAttribute('pets');
        if (petsAttr) {
            this.pets = JSON.parse(petsAttr); // Array de URLs de imágenes
        }

        this.render();
    }

