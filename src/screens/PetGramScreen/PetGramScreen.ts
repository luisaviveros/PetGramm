import './petProfileCard.js'; // Importar el componente de la tarjeta del perfil
import './petOwnerForm.js'; // Importar el componente del formulario
import './saveButton.js'; // Importar el componente del botón de guardar

class PetGramScreen extends HTMLElement {
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
                        background-color: #f4e4d4;
                        min-height: 100vh;
                        margin: 0;
                        padding: 0;
                    }

                    .header {
                        display: flex;
                        align-items: center;
                        background-color: #ab47bc;
                        color: #fff;
                        padding: 15px 20px;
                    }

                    .header img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin-right: 15px;
                    }

                    .header h1 {
                        font-size: 1.5em;
                        margin: 0;
                    }

                    .content {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 20px;
                    }

                    .divider {
                        width: 100%;
                        height: 2px;
                        background-color: #f3b04f;
                        margin: 20px 0;
                    }

                    form {
                        width: 100%;
                        max-width: 900px;
                        margin: 0 auto;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }

                    save-button {
                        margin-top: 20px;
                    }
                </style>
                
                <div class="header">
                    <img src="https://via.placeholder.com/50" alt="Pet Avatar">
                    <h1>PetGram</h1>
                </div>

                <div class="content">
                    <pet-profile-card 
                        pet-name="Toby Camilo" 
                        pet-description="I am a very playful and eater dog" 
                        pet-image-url="https://via.placeholder.com/150">
                    </pet-profile-card>
                    
                    <div class="divider"></div>
                    
                    <form>
                        <pet-owner-form></pet-owner-form>
                        <save-button></save-button>
                    </form>
                </div>
            `;
        }
    }
}

customElements.define('petgram-screen', PetGramScreen);
