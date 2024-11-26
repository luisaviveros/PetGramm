export class PetOwnerForm extends HTMLElement {
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
                    :host {
                        display: block;
                        font-family: Arial, sans-serif;
                    }
                    .form-container {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 20px;
                        background-color: #fdeacb;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    }
                    .section-title {
                        grid-column: span 2;
                        font-weight: bold;
                        margin-bottom: 10px;
                        text-align: left;
                    }
                    label {
                        display: block;
                        font-weight: bold;
                        margin-bottom: 5px;
                        font-size: 0.9em;
                    }
                    input {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #ccc;
                        border-radius: 5px;
                        box-sizing: border-box;
                    }
                </style>
                <div class="form-container">
                    <div class="section-title">Personal</div>
                    <div>
                        <label for="pet-name">Pet Name</label>
                        <input id="pet-name" type="text" placeholder="Enter pet name">
                    </div>
                    <div>
                        <label for="breed">Breed</label>
                        <input id="breed" type="text" placeholder="Enter breed">
                    </div>
                    <div>
                        <label for="dob">Date of Birth</label>
                        <input id="dob" type="date">
                    </div>
                    <div>
                        <label for="username">Username</label>
                        <input id="username" type="text" placeholder="Enter username">
                    </div>
                    <div>
                        <label for="description">Description</label>
                        <input id="description" type="text" placeholder="Enter description">
                    </div>

                    <div class="section-title">Owner</div>
                    <div>
                        <label for="email">Email</label>
                        <input id="email" type="email" placeholder="Enter email">
                    </div>
                    <div>
                        <label for="phone">Phone Number</label>
                        <input id="phone" type="tel" placeholder="Enter phone number">
                    </div>
                    <div>
                        <label for="country">Country</label>
                        <input id="country" type="text" placeholder="Enter country">
                    </div>
                    <div>
                        <label for="city">City</label>
                        <input id="city" type="text" placeholder="Enter city">
                    </div>
                </div>
            `;
        }
    }
}

customElements.define('pet-owner-form', PetOwnerForm);
