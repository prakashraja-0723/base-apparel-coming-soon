import {useState} from "react";

interface UseValidationProps {
	email: string;
	isValid: null | boolean;
	error: string;
}

const regEx =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default function UseValidation() {
	const [isEmail, setIsEmail] = useState({
		email: "",
		isValid: null,
		error: "",
	} as UseValidationProps);
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get("email");
		if (email === "") {
			setIsEmail({email: '', isValid: false, error: "Email is required"});
		} else if (typeof email === "string" && regEx.test(email)) {
			setIsEmail({email, isValid: true, error: ""});
			setInterval(()=>window.location.reload(),500)
		} else {
			setIsEmail({
				email: "",
				isValid: false,
				error: "Please provide valid email address",
			});
		}
	};
	
	return {
		isEmail,
		handleSubmit
	};
}
