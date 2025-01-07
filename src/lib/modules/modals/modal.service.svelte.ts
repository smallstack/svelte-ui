import type { Component } from "svelte";
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
}

export interface ModalComponent {
	showModal: (component: Component, options?: ModalOptions) => void;
	closeModal: (data?: any) => void;
}
class ModalService {
	private modalComponent: ModalComponent;

	public registerModalContainer(modalComponent: ModalComponent) {
		if (!this.modalComponent) {
			this.modalComponent = modalComponent;
		}
	}

	public openSimpleModal(options: SimpleModalOptions) {
		if (!this.modalComponent) alert(options.title + ": " + options.message);
		else {
			if (!options.buttons) options.buttons = [ModalOkBtn];
			this.openModal(SimpleModal, { data: options, title: options.title });
		}
	}

	public async openModal<RETURN_TYPE = any>(
		component: Component,
		options?: ModalOptions<RETURN_TYPE>
	): Promise<void> {
		this.modalComponent.showModal(component, options);
	}

	/** closes the currently opened modal */
	public closeModal(data?: any) {
		this.modalComponent.closeModal(data);
	}
}

export const modalService = new ModalService();
