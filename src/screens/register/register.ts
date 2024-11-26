import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { dispatch } from '../../store/store';
import { navigate } from '../../store/actions';
import { Screens } from '../../types/types';

// Configuración de Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyBkaBsPm_SGn_Ax34BUefRZ0Guj_Li0KLA',
	authDomain: 'petgram-1a5f9.firebaseapp.com',
	projectId: 'petgram-1a5f9',
	storageBucket: 'petgram-1a5f9.firebasestorage.app',
	messagingSenderId: '489760332429',
	appId: '1:489760332429:web:8ab0948a178ef92e60a0c4',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Crear clase de pantalla
class RegisterScreen extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.handleRegister = this.handleRegister.bind(this);
		this.navigateToLogin = this.navigateToLogin.bind(this);
	}

	connectedCallback() {
		this.render();
	}

	// Petición
	async handleRegister(event: Event) {
		event.preventDefault();
		const email = this.shadowRoot?.querySelector<HTMLInputElement>('#email')?.value || '';
		const password = this.shadowRoot?.querySelector<HTMLInputElement>('#password')?.value || '';

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			dispatch(navigate(Screens.FEED));
			alert('Registro exitoso');
		} catch (error: any) {
			console.error('Error durante el registro:', error);
			alert('Error al registrarse: ' + error.message);
		}
	}

	navigateToLogin() {
		dispatch(navigate(Screens.LOGIN));
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					.register-container {
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
						background-color: #FFF0CE;
						padding: 20px;
					}

					.register-modal {
						background-color: #4BACD7;
						padding: 30px;
						border-radius: 15px;
						width: 350px;
						box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
						text-align: center;
						font-family: 'Poppins', sans-serif;
					}

					.register-title {
						color: #ffffff;
						font-size: 24px;
						font-weight: bold;
						margin-bottom: 20px;
						font-family: Raspberie, Serif;
					}

					input[type="email"],
					input[type="text"],
					input[type="password"] {
						width: 100%;
						padding: 10px;
						margin: 10px 0;
						border: none;
						border-radius: 25px;
						box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
					}

					input::placeholder {
						color: #a1a1a1;
					}

					button[type="submit"] {
						background-color: #fca326;
						color: white;
						border: none;
						padding: 12px 0;
						border-radius: 25px;
						width: 50%;
						cursor: pointer;
						font-size: 16px;
						font-weight: bold;
						box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
						transition: background-color 0.3s ease;
						margin-top: 15px;
					}

					button[type="submit"]:hover {
						background-color: #e3941c;
					}

					.login-button {
						background: none;
						border: none;
						color: #FFFFFF;
						margin-top: 15px;
						font-size: 14px;
						text-decoration: underline;
						cursor: pointer;
						font-family: 'Poppins', sans-serif;
						font-weight: bold;
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
				<div class="register-container">
					<div class="register-modal">
					<intro-banner></intro-banner>
						<h1 class="register-title">Join Petgram!</h1>
						<form id="registerForm">
							<input type="email" id="email" placeholder="Email address" required>
							<input type="text" id="username" placeholder="Username" required>
							<input type="password" id="password" placeholder="Password" required>
							<button type="submit">Sign Up!</button>
						</form>
						<button class="login-button" id="loginButton">Already have an account? <br> Enter here!</button>
					</div>
				</div>
			`;

			const form = this.shadowRoot.querySelector('#registerForm');
			form?.addEventListener('submit', this.handleRegister);

			const loginButton = this.shadowRoot.querySelector('#loginButton');
			loginButton?.addEventListener('click', this.navigateToLogin);
		}
	}
}

customElements.define('register-screen', RegisterScreen);

export default RegisterScreen;
