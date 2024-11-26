import styles from './postcard.css';
//usa todo de la datapostcard
export enum AttributePostCard {
	'profilePicture' = 'profilePicture',
	'postPicture' = 'postPicture',
	'name' = 'name',
	'breed' = 'breed',
	'caption' = 'caption',
	'likes' = 'likes',
}

export class postCard extends HTMLElement {
	profilePicture?: string;
	postPicture?: string;
	name?: string;
	breed?: string;
	caption?: string;
	likes: number;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.likes = 0; // Valor predeterminado para likes
	}

	static get observedAttributes() {
		const attrs: Record<AttributePostCard, null> = {
			profilePicture: null,
			postPicture: null,
			name: null,
			breed: null,
			caption: null,
			likes: null,
		};
		return Object.keys(attrs);
	}

	connectedCallback() {
		this.render();
		this.addLikeButtonListener();
	}

	attributeChangedCallback(propName: AttributePostCard, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			case AttributePostCard.likes:
				this.likes = newValue ? Number(newValue) : 0;
				break;
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	addLikeButtonListener() {
		const likeButton = this.shadowRoot?.querySelector('.like-button');
		likeButton?.addEventListener('click', () => {
			this.likes += 1;
			this.updateLikes();
		});
	}

	updateLikes() {
		const likesElement = this.shadowRoot?.querySelector('.likes-count');
		if (likesElement) {
			likesElement.textContent = String(this.likes);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
	  <section class="cards-container">
      <section class="post-card">
        <header>
          <div class="user-info">
            <img class="Profile-Picture" src="${this.profilePicture}" alt="Profile Picture">
            <div class="nombre"><h1>${this.name}</h1></div>
          </div>
          <div class="raza"><h1>${this.breed}</h1></div>
        </header>
        <div class="image-container">
          <img class="Post-Picture" src="${this.postPicture}" alt="Post Picture">
        </div>
        <div class="caption-container">
          <div class="caption"><h1>${this.caption}</h1></div>
          <div class="likes">
            <h1 class="likes-count">${this.likes !== undefined ? this.likes : 0}</h1>
            <button class="like-button">👍</button>
          </div>
        </div>
      </section>
	</section>
      `;
		}
	}
}

customElements.define('post-card', postCard);
