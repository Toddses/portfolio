import type { AnchorHTMLAttributes } from "react";
import type { CSSProperties } from "react";

import styles from "./IconLink.module.scss";

interface IconLinkProps extends Omit<
	AnchorHTMLAttributes<HTMLAnchorElement>,
	"href"
> {
	text: string;
	url: string;
	icon: string;
}

type IconStyle = CSSProperties & {
	"--icon-url": string;
};

export default function IconLink({
	text,
	url,
	icon,
	className = "",
	target = "_blank",
	rel = "noopener noreferrer",
	...props
}: IconLinkProps) {
	const iconStyle: IconStyle = {
		"--icon-url": `url("${icon}")`,
	};

	return (
		<a
			{...props}
			href={url}
			target={target}
			rel={rel}
			className={`${styles.link} ${className}`.trim()}
		>
			<span className={styles.icon} style={iconStyle} aria-hidden="true" />

			<span>{text}</span>
		</a>
	);
}
