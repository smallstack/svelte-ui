import type { Component, Snippet } from "svelte";
import SimpleModal from "./SimpleModal.svelte";

export interface ModalButton {
	text: string;
	color: "primary" | "secondary" | "error" | "default";
	onClick: (options: { closeModal: () => void }) => Promise<void>;
}

export const ModalOkBtn: ModalButton = {
	text: "OK",
	color: "primary",
	onClick: async ({ closeModal }) => {
		closeModal();
	}
};

export const ModalCancelBtn: ModalButton = {
	text: "Abbrechen",
	color: "default",
	onClick: async ({ closeModal }) => {
		closeModal();
	}
};

export interface SimpleModalOptions {
	title: string;
	message: string;
	buttons?: ModalButton[];
}

export interface ModalOptions<RETURN_TYPE = any> {
	/** will be used for navigation and as title */
	title: string;
	/** will be passed as props to the component shown in the modal */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
	closeDialog?: (data?: RETURN_TYPE) => void | Promise<void>;
	/** if set, the given prop will automatically passed to the component as the closing function */
	closingPropName?: string;
	buttons?: ModalButton[];
	modalClass?: string;
}

export interface ModalComponent {
	showModal: (component: Component | Snippet, options?: ModalOptions) => Promise<void>;
	closeModal: (data?: any) => void;
}
class ModalService {
	private modalComponent: ModalComponent;
	private storedModals: { component: Component | Snippet; options: ModalOptions }[] = [];

	public registerModalContainer(modalComponent: ModalComponent) {
		if (!this.modalComponent) {
			this.modalComponent = modalComponent;

			if (this.storedModals.length > 0)
				this.storedModals.forEach(({ component, options }) => {
					this.openModal(component, options);
				});
		}
	}

	public async openSimpleModal(options: SimpleModalOptions): Promise<void> {
		if (!this.modalComponent) alert(options.title + ": " + options.message);
		else {
			if (!options.buttons) options.buttons = [ModalOkBtn];
			await this.openModal(SimpleModal, { data: options, title: options.title });
		}
	}

	public async openModal<RETURN_TYPE = any>(
		component: Component | Snippet,
		options?: ModalOptions<RETURN_TYPE>
	): Promise<void> {
		if (!this.modalComponent) {
			this.storedModals.push({ component, options });
		} else {
			await this.modalComponent.showModal(component, options);
		}
	}

	/** closes the currently opened modal */
	public closeModal(data?: any) {
		this.modalComponent.closeModal(data);
	}
}

export const modalService = new ModalService();
