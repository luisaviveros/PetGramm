import styles from './postPicture.css';
//usa 1 atributo de dataPosCard
export enum AttributePicture {
	'postPicture' = 'postPicture',
}

export class postPicture extends HTMLElement {
	postPicture?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributePicture, null> = {
			postPicture: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: AttributePicture, oldValue: string | undefined, newValue: string | undefined) {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>

        <div class="image-container">
          <img class="Post-Picture" src="${this.postPicture}" alt="Post Picture">
        </div>

      `;
		}
	}
}

customElements.define('post-picture', postPicture);
