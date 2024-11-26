export class CheckboxField extends HTMLElement {
    label: string = '';

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.label = this.getAttribute('label') || '';
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    .checkbox-container {
                        display: flex;
                        align-items: center;
                        margin: 10px 0;
                        color: white;
                        font-size: 0.9em;
                    }
                    input[type="checkbox"] {
                        margin-right: 10px;
                    }
                </style>
                <div class="checkbox-container">
                    <input type="checkbox">
                    <label>${this.label}</label>
                </div>
            `;
        }
    }
}

customElements.define('checkbox-field', CheckboxField);
