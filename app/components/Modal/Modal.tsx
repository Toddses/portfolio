import { useEffect, useRef } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	title: string;
	isOpen: boolean;
	onClose: () => void;
}

export default function Modal({ title, isOpen, onClose }: ModalProps) {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;

		if (isOpen && !dialog.open) {
			dialog.showModal();
		} else if (!isOpen && dialog.open) {
			dialog.close();
		}
	}, [isOpen]);

	return (
		<dialog
			ref={dialogRef}
			className={styles.modal}
			onClose={onClose}
			aria-labelledby="modal-title"
		>
			<button
				type="button"
				className={styles.close}
				onClick={() => dialogRef.current?.close()}
				aria-label="Close modal"
			>
				&times;
			</button>

			<h2 id="modal-title">{title}</h2>
		</dialog>
	);
}
