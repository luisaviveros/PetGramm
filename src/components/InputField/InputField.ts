export class InputField extends HTMLElement {
    label: string = '';
    type: string = 'text';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.label = this.getAttribute('label') || '';
        this.type = this.getAttribute('type') || 'text';
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    .input-container {
                        margin: 10px 0;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    label {
                        color: white;
                        font-size: 0.9em;
                        margin-bottom: 5px;
                    }
                    input {
                        width: 100%;
                        padding: 10px;
                        border-radius: 20px;
                        border: none;
                        outline: none;
                    }
                </style>
                <div class="input-container">
                    <label>${this.label}</label>
                    <input type="${this.type}">
                </div>
            `;
        }
    }
}

customElements.define('input-field', InputField);

