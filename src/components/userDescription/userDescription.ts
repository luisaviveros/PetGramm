import styles from './userDescription.css';
//usa todo de la dataprofile
export enum AttributeUser {
	'profilePic' = 'profilePic',
	'name' = 'name',
	'description' = 'description',
}

export class userDescription extends HTMLElement {
	profilePic?: string;
	name?: string;
	description?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeUser, null> = {
			profilePic: null,
			name: null,
			description: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeUser.profilePic:
				this.profilePic = newValue;
				break;
			case AttributeUser.name:
				this.name = newValue;
				break;
			case AttributeUser.description:
				this.description = newValue;
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
        <section class="top-banner">
          <div class="user">
            <img class="Profile-Pic" src="${this.profilePic}" alt="Profile Pic">
						<h3>${this.name}</h3>
            <h4>${this.description}</h4>
          </div>
        </section>
      `;
		}
	}
}

customElements.define('user-description', userDescription);
