import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	children: ReactNode;
}

export default function Button({
	variant = "primary",
	children,
	className = "",
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			type={type}
			className={[styles.button, styles[variant], className]
				.filter(Boolean)
				.join(" ")}
		>
			<span>{children}</span>

			{variant === "text" && (
				<span className={styles.arrow} aria-hidden="true" />
			)}
		</button>
	);
}
