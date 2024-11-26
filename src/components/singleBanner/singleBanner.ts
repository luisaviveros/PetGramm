import styles from './singleBanner.css';
//usa data de data Profile
export enum AttributeBanner {
	'profilePic' = 'profilePic',
	'name' = 'name',
}

export class singleBanner extends HTMLElement {
	profilePic?: string;
	name?: string;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<AttributeBanner, null> = {
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
			case AttributeBanner.profilePic:
				this.profilePic = newValue;
				break;
			case AttributeBanner.name:
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
        </section>
      `;
		}
	}
}

customElements.define('single-banner', singleBanner);
