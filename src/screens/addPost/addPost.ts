import { dispatch } from '../../store/store';
import { addPost } from '../../store/actions';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/types';
import { PostCardShape } from '../../types/types';
import '../../components/exportComponents';

class AddPostScreen extends HTMLElement {
	imageSrc: string = '';
	description: string = '';

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleAddPost = this.handleAddPost.bind(this);
		this.handleImageSelect = this.handleImageSelect.bind(this);
	}

	connectedCallback() {
		this.render();
	}

	handleDescriptionChange(event: Event) {
		const target = event.target as HTMLInputElement;
		this.description = target.value;
	}

	handleImageSelect(imageUrl: string) {
		this.imageSrc = imageUrl;
	}

	handleAddPost() {
		const newPost: PostCardShape = {
			id: Math.random().toString(36).substr(2, 9),
			profilePicture: 'https://imgur.com/13RUNz5.png',
			postPicture: this.imageSrc,
			name: 'User',
			breed: 'Unknown',
			caption: this.description,
		};

		dispatch(addPost(newPost));
		dispatch(navigate(Screens.FEED)); // Redirige a Feed después de agregar el post
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					.container {
						display: flex;
						flex-direction: column;
						align-items: center;
						padding: 90x;
						font-family: 'Poppins', sans-serif;
						
					}
					#addPostButton {
						margin-top: 20px;
						padding: 10px 20px;
						background-color: #f39c12;
						color: white;
						border: none;
						border-radius: 5px;
						cursor: pointer;
						font-family: 'Poppins', sans-serif;
					}
					#addPostButton:hover {
						background-color: #e67e22;
						font-family: 'Poppins', sans-serif;
					
					}
					.description-input {
						margin-top: 20px;
						padding: 10px;
						width: 100%;
						max-width: 500px;
						border: 1px solid #ccc;
						border-radius: 5px;
						font-family: 'Poppins', sans-serif;
					}
		. description-input {
			margin-top: 20px;
			font-size: 16px;
			font-family: 'Poppins', sans-serif;
			color: #AC6BC5;
			}

			h2 {
				font-size: 24px;
				font-family: 'Raspberie', serif;
				color: #AC6BC5;
		}

	@media (max-width: 600px) {
						.register-modal {
							width: 90%;
							padding: 20px;
						}

						.register-title {
							font-size: 20px;
						}

						button[type="submit"] {
							width: 80%;
							padding: 10px 0;
							font-size: 14px;
						}

						.login-button {
							font-size: 12px;
						}
					}


				</style>
				<div class="container">
				<intro-banner></intro-banner>
					<h2>Add a New Post</h2>
					<select-from-device id="imageUploader"></select-from-device>
					<textarea class="description-input" placeholder="Add a description about yourself!"></textarea>
					<button id="addPostButton">Add Post</button>
				</div>
			`;

			const descriptionInput = this.shadowRoot.querySelector('.description-input') as HTMLTextAreaElement;
			const addPostButton = this.shadowRoot.querySelector('#addPostButton') as HTMLButtonElement;
			const imageUploader = this.shadowRoot.querySelector('#imageUploader') as any;

			descriptionInput.addEventListener('input', this.handleDescriptionChange);
			addPostButton.addEventListener('click', this.handleAddPost);
			imageUploader.addEventListener('fileSelected', (event: CustomEvent) => {
				this.handleImageSelect(event.detail);
			});
		}
	}
}

customElements.define('add-post-screen', AddPostScreen);

export default AddPostScreen;
