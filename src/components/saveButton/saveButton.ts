import styles from './saveButton.css';
//no usa data
export class saveButton extends HTMLElement {
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
              <button type="submit">Save</button>
          `;
		}
	}
}

customElements.define('save-button', saveButton);
