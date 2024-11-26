export class SignupButton extends HTMLElement {
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
                    button {
                        background-color: #ffcc00;
                        color: black;
                        border: none;
                        border-radius: 20px;
                        padding: 10px 20px;
                        font-size: 1rem;
                        cursor: pointer;
                        width: 100%;
                        margin-top: 15px;
                    }
                </style>
                <button type="button">Sign Up!</button>
            `;
		}
	}
}

customElements.define('signup-button', SignupButton);
