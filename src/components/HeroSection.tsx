import EmailSubscriptionForm from "./EmailSubscriptionForm.tsx";
import BrandLogo from "./BrandLogo.tsx";

export default function HeroSection() {
	return (
		<section className={`hero-section `}>
			<BrandLogo
				className={`block max-lg:hidden absolute z-10 left-[16%] top-10 px-0`}
			/>
			<article
				className={`w-full lg:max-w-[45%] lg:ml-[16%] max-lg:text-center`}
			>
				<h1
					className={`text-neutral-1 text-[4rem] max-lg:text-[2.5rem] 2xl:text-7xl uppercase font-semibold flex flex-col tracking-[26px] max-lg:tracking-[13px] leading-[1.125]`}
				>
          <span className={`font-light leading-[1.03] text-red-3`}>
            We'r<span className={`tracking-normal`}>e</span>
          </span>
					<span>
            Comin<span className={`tracking-normal`}>g</span>
          </span>
					
					<span>
            Soo<span className={`tracking-normal`}>n</span>
          </span>
				</h1>
				<p
					className={`max-sm:w-10/12  w-[450px] max-lg:mx-auto mt-8 max-lg:mt-5 max-sm:text-[.875rem] text-base 2xl:text-[1.125rem] text-red-3`}
				>
					Hello fellow shoppers! We're currently building our new fashion store.
					Add your email below to stay up-to-date with announcements and our
					launch deals.
				</p>
				<div
					className={`w-full h-[3.5rem] max-lg:h-[3.25rem] mt-[2.875rem] max-lg:mt-[2.5rem]  grid place-items-center lg:place-items-start max-lg:mb-16`}
				>
					<EmailSubscriptionForm/>
				</div>
			</article>
		</section>
	);
}
