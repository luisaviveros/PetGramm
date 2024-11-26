import styles from './descriptionField.css';
//no usa data
export class descriptionField extends HTMLElement {
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
				<div class="input-container">
					<label for="description" class="input-label">description</label>
					<input type="text" id="description" class="input-field" placeholder="Add a description about ypurself!" />
				</div>
			`;
		}
	}
}

customElements.define('description-field', descriptionField);
