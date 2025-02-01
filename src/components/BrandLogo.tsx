import {HTMLAttributes} from "react";

interface BrandLogoProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
}

export default function BrandLogo({className}: BrandLogoProps) {
	return (
		<div className={`w-fit h-20 flex items-center ${className}`}>
			<img
				src={`/images/logo.svg`}
				alt="base apparel logo"
				className={`max-lg:w-24`}
			/>
		</div>
	);
}
