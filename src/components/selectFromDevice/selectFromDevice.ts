import styles from './selectFromDevice.css';

export class SelectFromDevice extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.handleFileSelect = this.handleFileSelect.bind(this);
	}

	connectedCallback() {
		this.render();
	}

	handleFileSelect(event: Event) {
		const fileInput = this.shadowRoot?.querySelector('#fileInput') as HTMLInputElement;
		if (fileInput && fileInput.files && fileInput.files.length > 0) {
			const file = fileInput.files[0];
			const icon = this.shadowRoot?.querySelector('#icono') as HTMLImageElement | null;
			const reader = new FileReader();

			reader.onload = (e) => {
				if (icon && e.target) {
					icon.src = e.target.result as string; // Actualiza el ícono con la imagen seleccionada

					// Emitir el evento personalizado con la URL de la imagen seleccionada
					this.dispatchEvent(new CustomEvent('fileSelected', {
						detail: icon.src,
						bubbles: true,
						composed: true,
					}));
				}
			};
			reader.readAsDataURL(file);
		}
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
				<style>
					${styles}
				</style>
				<div class="container">
					<label for="fileInput" class="upload-area">
						<img id="icono" src="https://imgur.com/13RUNz5.png" alt="Upload icon" />
					</label>
					<input type="file" id="fileInput" accept="image/*" hidden />
					<h4>Select a photo from your device!</h4>
				</div>
			`;

			const fileInput = this.shadowRoot.querySelector('#fileInput') as HTMLInputElement;
			fileInput?.addEventListener('change', this.handleFileSelect);
		}
	}
}

customElements.define('select-from-device', SelectFromDevice);
