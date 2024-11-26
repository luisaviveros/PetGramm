import styles from './introBanner.css';
//no usa data
export class introBanner extends HTMLElement {
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
        <section class="top-banner">
          <div class="user">
           <img id="logo" src="https://i.imgur.com/UBGWQWp.png">
          </div>
        </section>
      `;
		}
	}
}

customElements.define('intro-banner', introBanner);
