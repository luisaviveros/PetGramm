import styles from './petgramBanner.css';

export class PetgramBanner extends HTMLElement {
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
               <link rel="stylesheet" href="./petgramBanner.css">
                <div class="banner">
                    <div class="logo"></div>
                    <span>PetGram</span>
                </div>
            `;
        }
    }
}

// Define el componente personalizado
customElements.define('petgram-banner', PetgramBanner);

export default PetgramBanner;
