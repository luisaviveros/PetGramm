export class PetProfileScreen extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    :host {
                        display: block;
                        font-family: Arial, sans-serif;
                        background-color: #fff7e9;
                        padding: 20px;
                        margin: 0 auto;
                        max-width: 1200px;
                    }

                    .profile-section {
                        margin-bottom: 30px;
                    }

                    .feed-section {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                        gap: 15px;
                    }

                    .feed-section img {
                        width: 100%;
                        border-radius: 10px;
                        object-fit: cover;
                        height: 150px; /* Tamaño uniforme para todas las imágenes */
                    }
                </style>
                <!-- Sección del Perfil -->
                <div class="profile-section">
                    <pet-profile-card 
                        pet-name="Luna" 
                        pet-description="I am a very playful and eater dog" 
                        pet-image-url="https://example.com/profile-image.jpg">
                    </pet-profile-card>
                </div>

                <!-- Sección del Feed -->
                <div class="feed-section">
                    ${this.renderPhotos()}
                </div>
            `;
        }
    }

    renderPhotos() {
        
        const photoUrls = [
            "https://example.com/photo1.jpg",
            "https://example.com/photo2.jpg",
            "https://example.com/photo3.jpg",
            "https://example.com/photo4.jpg",
            "https://example.com/photo5.jpg",
            "https://example.com/photo6.jpg",
            "https://example.com/photo7.jpg",
            "https://example.com/photo8.jpg",
            "https://example.com/photo9.jpg",
        ];

        return photoUrls
            .map(
                (url) => `
                    <img src="${url}" alt="Pet photo">
                `
            )
            .join("");
    }
}

customElements.define('pet-profile-screen', PetProfileScreen);
