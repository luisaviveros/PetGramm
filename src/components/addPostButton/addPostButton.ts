import styles from './addPostButton.css';

export class addPostButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
	//no usa data
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
				<div class="raya"></div> <!-- La raya -->
				<button id="addPostBtn">Add Post</button> <!-- El botón -->
			  </div>
			`;
		}
	}
}

customElements.define('add-post-button', addPostButton);
