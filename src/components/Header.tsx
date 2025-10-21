import Navigation from "./Navigation";
import TechStack from "./TechStack";
import SocialLinks from "./SocialLinks";

interface HeaderProps {
	activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
	return (
		<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
			<div>
				<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
					<span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
						SOKNA Chun
					</span>
				</h1>
				<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
					Junior Software Developer
				</h2>
				<p className="mt-4 max-w-xs leading-normal text-slate-400">
					I am a Junior Software Developer passionate about
					building reliable and user-friendly websites with modern
					technologies.
				</p>

				<Navigation activeSection={activeSection} />
				<TechStack />
			</div>

			<div className="mt-8 lg:mt-0">
				<SocialLinks />
			</div>
		</header>
	);
}
