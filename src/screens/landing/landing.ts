// Importar los componentes a usar
import { introBanner } from '../../components/exportComponents';
import { createAccountButton } from '../../components/exportComponents';
import { LoginButton } from '../../components/exportComponents';
import styles from './landing.css';

// Crear el App container
export class Landing extends HTMLElement {
	introbanner!: introBanner;
	createaccountbutton!: createAccountButton;
	loginbutton!: LoginButton;

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		// Crear componente introBanner
		this.introbanner = document.createElement('intro-banner') as introBanner;

		// Crear el componente createAccountButton
		this.createaccountbutton = document.createElement('create-account') as createAccountButton;

		// Crear el componente LoginButton
		this.loginbutton = document.createElement('login-button') as LoginButton;
	}

	connectedCallback() {
		this.render();
	}

	render() {
		// agregar los componentes al DOM
		{
			if (this.shadowRoot) {
				this.shadowRoot.innerHTML = `
					<style>
					${styles}
					</style>

					<div class="landing-container">
						<intro-banner></intro-banner>
						<h1 class="welcomeTitle">Welcome to</h1>
						<img id="logo" src="https://imgur.com/eYBta3X.png">

						<div class="button-container">
							<create-account></create-account>
							<login-button></login-button>
						</div>
					</div>
				`;
			}
		}
	}
} //falta hacer que los botones funcionen y me lleven a otra pantalla

//exportar pantalla como elemento personalizado
customElements.define('landing-screen', Landing);
export default Landing;
