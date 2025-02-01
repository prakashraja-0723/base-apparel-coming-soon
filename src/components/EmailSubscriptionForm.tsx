import UseValidation from "../hooks/useValidation.ts";

export default function EmailSubscriptionForm() {
	const {isEmail, handleSubmit} = UseValidation();
	
	return (
		<form
			className={`w-[450px] max-sm:w-[80%] h-full rounded-full border flex items-center justify-start relative border-red-2 `}
			onSubmit={(formData) => handleSubmit(formData)}
		>
			<input
				name={"email"}
				type="text"
				className={`h-full max-sm:w-[70%] w-[75%] outline-none max-sm:pl-6 pl-8 rounded-full text-neutral-1 max-lg:text-[.875rem] text-base 2xl:text-[1.125rem] placeholder:text-red-2`}
				placeholder="Email Address"
				aria-label="Enter your email"
			/>
			<img
				src={`/images/icon-error.svg`}
				alt="error"
				className={`absolute max-sm:right-14 max-lg:right-12 right-[70px] ${
					isEmail.isValid ? "hidden" : "block"
				}`}
			/>
			<button
				type="submit"
				className={`absolute translate-0 flex items-center justify-center bg-gradient-to-br from-red-2 to-red-4 h-[calc(100%+2px)] rounded-full text-white max-lg:w-20 w-[100px] ${
					isEmail.isValid === null
						? "right-0"
						: !isEmail.isValid
							? "-right-10 max-sm:-right-7"
							: "right-0"
				} transition-all duration-300 cursor-pointer`}
			>
				<img src={`/images/icon-arrow.svg`} alt="sumbit your email"/>
			</button>
			{!isEmail.isValid && (
				<span
					className={`text-red-5 absolute z-10 top-[calc(100%+6px)] left-4 max-sm:text-sm`}
				>
          {isEmail.error}
        </span>
			)}
		</form>
	);
}
