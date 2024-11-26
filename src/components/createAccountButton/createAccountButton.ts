import styles from './createAccountButton.css';
//no usa data
export class createAccountButton extends HTMLElement {
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
				${styles}
			  </style>
			  <div id="button-container"> <!-- Contenedor principal -->
				<button id="createAccountBtn">Create Account</button>
			  </div>
			`;
		}
	}
}

customElements.define('create-account-button', createAccountButton);
