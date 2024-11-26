import styles from './welcomeMessage.css';
//usa 1 atributo de datapostcard
export enum AttributeMessage {
	'name' = 'name',
}

export class welcomeMessage extends HTMLElement {
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeMessage, null> = {
			name: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeMessage.name:
				this.name = newValue;
				break;
			default:
				break;
		}
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
			  <style>
			  ${styles}
			  </style>
			  <section class="welcome-message">
				<div class="message__user">
				<div class="messageuser">
				  <h2>Welcome back <span>${this.name}</span>.</h2>
				</div>
				  <p>Here is what your PetGram friends have been doing...</p>
				</div>
			  </section>
			`;
		}
	}
}

customElements.define('welcome-message', welcomeMessage);
