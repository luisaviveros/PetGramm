import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from "./login.css";
import { dispatch } from "../../store/store";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/types";
import { UsernameField } from "../../components/exportComponents";
import { PasswordField } from "../../components/exportComponents";
export {PetgramBanner} from '../../components/exportComponents';

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
  apiKey: "AIzaSyBkaBsPm_SGn_Ax34BUefRZ0Guj_Li0KLA",
  authDomain: "petgram-1a5f9.firebaseapp.com",
  projectId: "petgram-1a5f9",
  storageBucket: "petgram-1a5f9.firebasestorage.app",
  messagingSenderId: "489760332429",
  appId: "1:489760332429:web:8ab0948a178ef92e60a0c4",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class LoginScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.handleLogin = this.handleLogin.bind(this);
    this.navigateToRegister = this.navigateToRegister.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  async handleLogin(event: Event) {
    console.log("handleLogin");
    event.preventDefault();

    const emailElement = this.shadowRoot?.querySelector(
      "username-field"
    ) as unknown as UsernameField;
    const passwordElement = this.shadowRoot?.querySelector(
      "password-field"
    ) as unknown as PasswordField;

    const email = emailElement?.getValue() || "";
    const password = passwordElement?.getValue() || "";

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      dispatch(navigate(Screens.FEED));
      alert("Inicio de sesión exitoso");
    } catch (error: any) {
      console.error("Error during login:", error);
      alert("Error al iniciar sesión: " + error.message);
    }
  }

  navigateToRegister() {
    dispatch(navigate(Screens.REGISTER));
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
   <style>
        ${styles}
      </style>

			<link rel="stylesheet" href="./login.css">
<div class="login-container">
    <div class="login-modal">
    <intro-banner></intro-banner>
        <h1 class="title">Welcome Back!</h1>
        <form id="loginForm">
            <username-field id="username"></username-field>
            <password-field id="password"></password-field>
            <login-button class="login-button-style"></login-button>
        </form>
        <span class="link" id="registerButton">Don't have an account yet? <br> Create one!</span>
    </div>
</div>

			`;

      const loginButton = this.shadowRoot.querySelector("login-button");
      loginButton?.addEventListener("click", this.handleLogin);

      const registerButton = this.shadowRoot.querySelector("#registerButton");
      registerButton?.addEventListener("click", this.navigateToRegister);
    }
  }
}

customElements.define("login-screen", LoginScreen);

export default LoginScreen;
