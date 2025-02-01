export default function HeroImage() {
	return (
		<div className={`max-lg:w-full w-[42%] h-full lg:h-screen overflow-clip`}>
			<img
				src={`/images/hero-desktop.jpg`}
				alt="coming soon banner"
				className={`w-full h-full object-cover max-lg:hidden`}
			/>
			<img
				src={`/images/hero-mobile.jpg`}
				alt="coming soon banner"
				className={`w-full object-cover lg:hidden`}
			/>
		</div>
	);
}
