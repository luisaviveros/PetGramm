import styles from './profileBanner.css';
//usa atributos de data profile
export enum AttributeProfile {
	'profilePic' = 'profilePic',
	'name' = 'name',
}

export class profileBanner extends HTMLElement {
	profilePic?: string;
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeProfile, null> = {
			profilePic: null,
			name: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName: string, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributeProfile.profilePic:
				this.profilePic = newValue;
				break;
			case AttributeProfile.name:
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
        <section class="top-banner">
          <div class="user">
            <img class="Profile-Pic" src="${this.profilePic}" alt="Profile Pic">
						<h3>${this.name}</h3>
           <img id="logo" src="https://i.imgur.com/UBGWQWp.png">
          </div>
          <div class="search-container">
            <input class="search-bar" type="text" placeholder="Search">
            <button class="search-button">🔍</button>
          </div>
        </section>
      `;
		}
	}
}

customElements.define('profile-banner', profileBanner);
