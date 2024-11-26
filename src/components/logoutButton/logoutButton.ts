// logoutButton.ts
export class LogoutButton extends HTMLElement {
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
                    .logout-button {
                        display: inline-block;
                        padding: 15px 40px;
                        font-size: 1.2em;
                        font-weight: bold;
                        color: white;
                        background-color: #ffa500;
                        border: none;
                        border-radius: 30px;
                        cursor: pointer;
                        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
                        text-align: center;
                    }

                    .logout-button:hover {
                        background-color: #ff8c00;
                    }

                    .logout-button:active {
                        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
                    }
                </style>
                <button class="logout-button">Log Out</button>
            `;
        }
    }
}

// Define el componente personalizado
customElements.define('logout-button', LogoutButton);

export default LogoutButton;
