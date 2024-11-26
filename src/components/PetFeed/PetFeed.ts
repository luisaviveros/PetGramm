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
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        font-family: Arial, sans-serif;
                        padding: 10px;
                        background-color: #fff7e9;
                    }

                    .grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
                        gap: 10px;
                    }

                    .grid-item {
                        position: relative;
                        width: 100%;
                        padding-top: 100%; /* Hace que cada celda sea cuadrada */
                        overflow: hidden;
                        border-radius: 8px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }

                    .grid-item img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
