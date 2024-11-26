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

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        font-family: Arial, sans-serif;
                        background-color: #fdeacb;
                        padding: 20px;
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                        max-width: 500px;
                    }

                    .image-container {
                        position: relative;
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        overflow: hidden;
                        border: 3px solid #f3b04f;
                        margin-right: 20px;
                    }

                    .image-container img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
