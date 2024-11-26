import styles from './passwordField.css';

export class PasswordField extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
	}

	// Método para obtener el valor del campo de entrada
	getValue() {
		const input = this.shadowRoot?.querySelector('#password') as HTMLInputElement;
		return input?.value || '';
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					${styles}
				</style>
				<div class="input-container">
					<label for="password" class="input-label">Password</label>
					<input type="password" id="password" class="input-field" placeholder="Enter your password" />
				</div>
			`;
		}
	}
}

customElements.define('password-field', PasswordField);
