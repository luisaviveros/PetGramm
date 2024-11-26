import { Observer } from './types/types';
import { addObserver, dispatch, appState } from './store/store';
import { Screens } from './types/types';
import { PostCard } from './data/dataPostCard';
import './screens/exportScreens';

import { addPost } from './store/actions';

// Agregar publicaciones de ejemplo solo si el store está vacío
if (appState.posts.length === 0) {
	PostCard.forEach((post) => {
		dispatch(
			addPost({
				...post,
				id: Math.random().toString(36).substr(2, 9),
			})
		);
	});
	console.log('Initial posts added to appState:', appState.posts);
} else {
	console.log('Posts already exist in appState:', appState.posts);
}

class AppContainer extends HTMLElement implements Observer {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this); // Añadir el componente como observador del estado global
	}

	connectedCallback() {
		this.render(); // Render inicial
	}

	// Implementación de render para Observer
	render() {
		// Limpia el contenido actual del shadowRoot
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = '';
			console.log('Rendering screen:', appState.screen);

			switch (appState.screen) {
				case Screens.LANDING:
					const landing = document.createElement('landing-screen');
					this.shadowRoot.appendChild(landing);
					break;

				case Screens.ADDPOST:
					const addPost = document.createElement('add-post-screen');
					this.shadowRoot.appendChild(addPost);
					break;

				case Screens.CREATEACCOUNT:
					const createAccount = document.createElement('createAccount-screen');
					this.shadowRoot.appendChild(createAccount);
					break;

				case Screens.EDITPROFILE:
					const editProfile = document.createElement('editProfile-screen');
					this.shadowRoot.appendChild(editProfile);
					break;

				case Screens.EDITPROFILEPICTURE:
					const editProfilePicture = document.createElement('editProfilePicture-screen');
					this.shadowRoot.appendChild(editProfilePicture);
					break;

				case Screens.FEED:
					const feed = document.createElement('app-feed');
					this.shadowRoot.appendChild(feed);
					break;

				case Screens.LOGIN:
					const login = document.createElement('login-screen');
					this.shadowRoot.appendChild(login);
					break;

				case Screens.MYPOSTVIEW:
					const myPostView = document.createElement('myPostView-screen');
					this.shadowRoot.appendChild(myPostView);
					break;

				case Screens.MYPROFILE:
					const myProfile = document.createElement('myProfile-screen');
					this.shadowRoot.appendChild(myProfile);
					break;

				case Screens.PROFILESETUP:
					const profileSetup = document.createElement('profileSetup-screen');
					this.shadowRoot.appendChild(profileSetup);
					break;

				case Screens.REGISTER:
					const register = document.createElement('register-screen');
					this.shadowRoot.appendChild(register);
					break;

				case Screens.SINGLEPOST:
					const singlePost = document.createElement('singlePost-screen');
					this.shadowRoot.appendChild(singlePost);
					break;

				case Screens.USERPROFILE:
					const userProfile = document.createElement('userProfile-screen');
					this.shadowRoot.appendChild(userProfile);
					break;

				default:
					console.warn('Unhandled screen:', appState.screen);
					break;
			}
		}
	}
}

customElements.define('app-container', AppContainer);
