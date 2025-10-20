export default function AboutSection() {
	return (
		<section
			id="about"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="About me"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0c142c]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
					About
				</h2>
			</div>
			<div>
				<p className="mb-4">
					I&apos;m a versatile developer who thrives at the
					intersection of innovation and implementation. With a
					passion for clean code and elegant design patterns, I
					specialize in building modern web applications that
					scale. My approach combines technical excellence with
					creative problem-solving to deliver exceptional digital
					experiences.
				</p>
				<p className="mb-4">
					Currently, I&apos;m focused on{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="#"
						target="_blank"
						rel="noreferrer"
					>
						cloud-native architectures
					</a>{" "}
					and developing AI-powered solutions that transform how
					businesses operate. I work with cutting-edge
					technologies including React, Node.js, TypeScript, and
					cloud platforms to build robust, scalable applications.
				</p>
				<p className="mb-4">
					In the past, I&apos;ve had the opportunity to develop
					software across a variety of settings — from{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="https://us.mullenlowe.com/"
						target="_blank"
						rel="noreferrer"
					>
						advertising agencies
					</a>{" "}
					and{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="https://www.apple.com/apple-music/"
						target="_blank"
						rel="noreferrer"
					>
						large corporations
					</a>{" "}
					to{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="https://starry.com/"
						target="_blank"
						rel="noreferrer"
					>
						start-ups
					</a>{" "}
					and{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="https://upstatement.com/"
						target="_blank"
						rel="noreferrer"
					>
						small digital product studios
					</a>
					. Additionally, I also released a{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="https://www.newline.co/courses/build-a-spotify-connected-app"
						target="_blank"
						rel="noreferrer"
					>
						comprehensive video course
					</a>{" "}
					a few years ago, guiding learners through building a
					web app with the Spotify API.
				</p>
				<p>
					In my spare time, I&apos;m usually climbing, playing
					tennis, hanging out with my wife and two cats, or
					running around Hyrule searching for{" "}
					<a
						className="font-medium text-slate-200 hover:text-cyan-400 focus-visible:text-cyan-400"
						href="https://www.zelda.com/breath-of-the-wild/"
						target="_blank"
						rel="noreferrer"
					>
						Korok seeds
					</a>
					.
				</p>
			</div>
		</section>
	);
}
