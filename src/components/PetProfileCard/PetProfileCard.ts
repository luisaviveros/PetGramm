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
                    .camera-icon {
                        position: absolute;
                        bottom: 5px;
                        right: 5px;
                        width: 20px;
                        height: 20px;
                        background-color: #2f80ed;
                        color: #fff;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 12px;
                        font-weight: bold;
                    }

                    .text-container {
                        display: flex;
                        flex-direction: column;
                    }

                    .text-container h2 {
                        font-size: 1.2em;
                        margin: 0;
                        color: #333;
                    }

                    .text-container p {
                        margin: 5px 0 0 0;
                        font-size: 0.9em;
                        color: #666;
                    }
                </style>
                <div class="image-container">
                    <img src="${this.petImageUrl}" alt="Pet Image">
                    <div class="camera-icon">📷</div>
                </div>
                <div class="text-container">
                    <h2>${this.petName}</h2>
                    <p>${this.petDescription}</p>
                </div>
                   `;
        }
    }
}

customElements.define('pet-profile-card', PetProfileCard);