import './InputField';
import './CheckboxField';
import './SignupButton';

export class RegisterForm extends HTMLElement {
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
                    ${require('./RegisterForm.css').default}

                <h1>Join Petgram!</h1>
                <input-field label="Email address"></input-field>
                <input-field label="Username"></input-field>
                <input-field label="Password" type="password"></input-field>
                <checkbox-field label="I’m at least 18 years old and accept the Terms of Use"></checkbox-field>
                <checkbox-field label="I accept the Privacy Policy and consent to the processing of my personal information in accordance with it"></checkbox-field>
                <signup-button></signup-button>
            `;
        }
    }
}

customElements.define('register-form', RegisterForm);
