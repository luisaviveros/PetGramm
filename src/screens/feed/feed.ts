import { appState, addObserver, dispatch } from '../../store/store';
import { PostCardShape, Screens } from '../../types/types';
import {
	profileBanner,
	postCard,
	welcomeMessage,
	addPostButton,
	LogoutButton,
} from '../../components/exportComponents';
import { navigate } from '../../store/actions';
import { PostCard } from '../../data/dataPostCard';
import '../../components/exportComponents';
import { Profile } from '../../data/dataProfile';

class Feed extends HTMLElement {
	profileBanner: profileBanner[] = [];
	welcomeMessage: welcomeMessage[] = [];
	addPostButton!: addPostButton;
	logoutButton!: LogoutButton; // Declaración del botón de logout

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
		this.setupHeaderElements();
	}

	setupHeaderElements() {
		Profile.forEach((user) => {
			const banner = document.createElement('profile-banner') as profileBanner;
			banner.profilePic = user.profilePic;
			banner.name = user.name;
			this.profileBanner.push(banner);
		});

		Profile.forEach((user) => {
			const message = document.createElement('welcome-message') as welcomeMessage;
			message.name = user.name;
			this.welcomeMessage.push(message);
		});

		this.addPostButton = document.createElement('add-post-button') as addPostButton;
		this.addPostButton.addEventListener('click', () => {
			dispatch(navigate(Screens.ADDPOST));
		});

		// Crear y configurar el botón de Logout
		this.logoutButton = document.createElement('logout-button') as LogoutButton;
		this.logoutButton.addEventListener('click', () => {
			dispatch(navigate(Screens.LOGIN)); // Navegar a la pantalla de login al hacer clic
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';

			this.profileBanner.forEach((banner) => {
				this.shadowRoot?.appendChild(banner);
			});

			this.welcomeMessage.forEach((message) => {
				this.shadowRoot?.appendChild(message);
			});

			this.shadowRoot?.appendChild(this.addPostButton);
			this.shadowRoot?.appendChild(this.logoutButton); // Agregar el botón de logout al DOM

			const columnDiv = document.createElement('div');
			columnDiv.style.display = 'grid';
			columnDiv.style.gridTemplateColumns = '1fr';
			columnDiv.style.gap = '15px';
			columnDiv.style.justifyContent = 'center';
			columnDiv.style.margin = '0 auto';
			columnDiv.style.maxWidth = '1300px';
			columnDiv.style.padding = '20px';

			const mediaQuery = window.matchMedia('(min-width: 1024px)');
			if (mediaQuery.matches) {
				columnDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
			}

			appState.posts.forEach((post: PostCardShape) => {
				const cardElement = document.createElement('post-card') as postCard;
				cardElement.profilePicture = post.profilePicture;
				cardElement.postPicture = post.postPicture;
				cardElement.name = post.name;
				cardElement.breed = post.breed;
				cardElement.caption = post.caption;
				columnDiv.appendChild(cardElement);
			});

			this.shadowRoot.appendChild(columnDiv);
		}
	}
}

customElements.define('app-feed', Feed);

export default Feed;
