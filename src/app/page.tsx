"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const sections = ["about", "experience", "projects"];
			const scrollPosition = window.scrollY + window.innerHeight / 3;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Call once on mount

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="min-h-screen relative">
			{/* Cursor spotlight effect */}
			<div
				className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
				style={{
					background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
				}}
			></div>

			<div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					{/* Left Sidebar */}
					<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
						<div>
							<h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
								Brittany Chiang
							</h1>
							<h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
								Front End Engineer
							</h2>
							<p className="mt-4 max-w-xs leading-normal text-slate-400">
								I build accessible, pixel-perfect digital
								experiences for the web.
							</p>

							{/* Navigation */}
							<nav
								className="nav hidden lg:block mt-16"
								aria-label="In-page jump links"
							>
								<ul className="mt-16 w-max">
									<li>
										<a
											className="group flex items-center py-3"
											href="#about"
										>
											<span
												className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
													activeSection === "about"
														? "w-16 bg-slate-200"
														: "w-8 bg-slate-600"
												}`}
											></span>
											<span
												className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
													activeSection === "about"
														? "text-slate-200"
														: "text-slate-500"
												}`}
											>
												About
											</span>
										</a>
									</li>
									<li>
										<a
											className="group flex items-center py-3"
											href="#experience"
										>
											<span
												className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
													activeSection ===
													"experience"
														? "w-16 bg-slate-200"
														: "w-8 bg-slate-600"
												}`}
											></span>
											<span
												className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
													activeSection ===
													"experience"
														? "text-slate-200"
														: "text-slate-500"
												}`}
											>
												Experience
											</span>
										</a>
									</li>
									<li>
										<a
											className="group flex items-center py-3"
											href="#projects"
										>
											<span
												className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 ${
													activeSection === "projects"
														? "w-16 bg-slate-200"
														: "w-8 bg-slate-600"
												}`}
											></span>
											<span
												className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 ${
													activeSection === "projects"
														? "text-slate-200"
														: "text-slate-500"
												}`}
											>
												Projects
											</span>
										</a>
									</li>
								</ul>
							</nav>
						</div>

						{/* Social Links */}
						<ul
							className="ml-1 mt-8 flex items-center"
							aria-label="Social media"
						>
							<li className="mr-5 text-xs">
								<a
									className="block hover:text-slate-200"
									href="https://github.com/bchiang7"
									target="_blank"
									rel="noreferrer"
								>
									<span className="sr-only">GitHub</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 16 16"
										fill="currentColor"
										className="h-6 w-6"
										aria-hidden="true"
									>
										<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
									</svg>
								</a>
							</li>
							<li className="mr-5 text-xs">
								<a
									className="block hover:text-slate-200"
									href="https://www.linkedin.com/in/bchiang7"
									target="_blank"
									rel="noreferrer"
								>
									<span className="sr-only">LinkedIn</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-6 w-6"
										aria-hidden="true"
									>
										<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
									</svg>
								</a>
							</li>
							<li className="mr-5 text-xs">
								<a
									className="block hover:text-slate-200"
									href="https://codepen.io/bchiang7"
									target="_blank"
									rel="noreferrer"
								>
									<span className="sr-only">CodePen</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-6 w-6"
										aria-hidden="true"
									>
										<path d="M12 2L2 8.5v7L12 22l10-6.5v-7L12 2zm0 2.18l7.17 4.66L12 13.5 4.83 8.84 12 4.18zM3.82 10.17L5 10.92v2.16l-1.18-.75v-2.16zm2.18 1.34l5 3.24v4.63L6 16.76v-5.25zm7 7.87v-4.63l5-3.24v5.25l-5 2.62zm7.18-4.63l-1.18.75v-2.16l1.18-.75v2.16z"></path>
									</svg>
								</a>
							</li>
							<li className="mr-5 text-xs">
								<a
									className="block hover:text-slate-200"
									href="https://instagram.com/bchiang7"
									target="_blank"
									rel="noreferrer"
								>
									<span className="sr-only">Instagram</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-6 w-6"
										aria-hidden="true"
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
									</svg>
								</a>
							</li>
							<li className="mr-5 text-xs">
								<a
									className="block hover:text-slate-200"
									href="https://www.goodreads.com/user/show/143480747-brittany-chiang"
									target="_blank"
									rel="noreferrer"
								>
									<span className="sr-only">Goodreads</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-6 w-6"
										aria-hidden="true"
									>
										<path d="M19.525 15.977V.49h-2.059v2.906h-.064c-.211-.455-.481-.872-.809-1.252-.329-.38-.719-.684-1.171-.911-.452-.228-.973-.342-1.562-.342-.915 0-1.733.21-2.454.629-.721.418-1.282 1.056-1.683 1.913-.401.857-.602 1.894-.602 3.111 0 1.247.19 2.297.571 3.15.381.853.911 1.492 1.59 1.917.679.425 1.456.637 2.333.637.65 0 1.198-.117 1.644-.352.445-.234.815-.539 1.109-.915.293-.375.54-.792.738-1.249h.064v2.128c0 1.039-.225 1.791-.676 2.256-.451.465-1.097.697-1.938.697-.61 0-1.144-.142-1.603-.426-.459-.284-.689-.701-.689-1.25h-2.059c.016.757.253 1.396.711 1.918.458.522 1.053.904 1.785 1.146.732.242 1.533.363 2.403.363 1.283 0 2.313-.27 3.09-.81.777-.54 1.166-1.455 1.166-2.745zm-2.123-7.67c0 .91-.143 1.678-.43 2.304-.287.626-.681 1.094-1.183 1.404-.502.31-1.076.465-1.722.465-.65 0-1.229-.158-1.737-.475-.508-.317-.905-.788-1.192-1.413-.287-.625-.43-1.388-.43-2.289 0-.883.143-1.64.43-2.27.287-.63.684-1.107 1.192-1.43.508-.323 1.087-.485 1.737-.485.646 0 1.22.16 1.722.48.502.32.896.793 1.183 1.42.287.627.43 1.396.43 2.289z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</header>

					{/* Right Content */}
					<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
						{/* About Section */}
						<section
							id="about"
							className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
							aria-label="About me"
						>
							<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0c142c]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
								<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
									About
								</h2>
							</div>
							<div>
								<p className="mb-4">
									I&apos;m a developer passionate about
									crafting accessible, pixel-perfect user
									interfaces that blend thoughtful design with
									robust engineering. My favorite work lies at
									the intersection of design and development,
									creating experiences that not only look
									great but are meticulously built for
									performance and usability.
								</p>
								<p className="mb-4">
									Currently, I&apos;m a Senior Front-End
									Engineer at{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
										href="https://www.klaviyo.com/"
										target="_blank"
										rel="noreferrer"
									>
										Klaviyo
									</a>
									, specializing in accessibility. I
									contribute to the creation and maintenance
									of UI components that power Klaviyo&apos;s
									frontend, ensuring our platform meets web
									accessibility standards and best practices
									to deliver an inclusive user experience.
								</p>
								<p className="mb-4">
									In the past, I&apos;ve had the opportunity
									to develop software across a variety of
									settings — from{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
										href="https://us.mullenlowe.com/"
										target="_blank"
										rel="noreferrer"
									>
										advertising agencies
									</a>{" "}
									and{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
										href="https://www.apple.com/apple-music/"
										target="_blank"
										rel="noreferrer"
									>
										large corporations
									</a>{" "}
									to{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
										href="https://starry.com/"
										target="_blank"
										rel="noreferrer"
									>
										start-ups
									</a>{" "}
									and{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
										href="https://upstatement.com/"
										target="_blank"
										rel="noreferrer"
									>
										small digital product studios
									</a>
									. Additionally, I also released a{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
										href="https://www.newline.co/courses/build-a-spotify-connected-app"
										target="_blank"
										rel="noreferrer"
									>
										comprehensive video course
									</a>{" "}
									a few years ago, guiding learners through
									building a web app with the Spotify API.
								</p>
								<p>
									In my spare time, I&apos;m usually climbing,
									playing tennis, hanging out with my wife and
									two cats, or running around Hyrule searching
									for{" "}
									<a
										className="font-medium text-slate-200 hover:text-teal-400 focus-visible:text-teal-400"
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

						{/* Experience Section */}
						<section
							id="experience"
							className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
							aria-label="Work experience"
						>
							<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0c142c]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
								<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
									Experience
								</h2>
							</div>
							<div>
								<ol className="group/list">
									{/* Experience Item 1 */}
									<li className="mb-12">
										<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<header
												className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
												aria-label="2024 to Present"
											>
												2024 — Present
											</header>
											<div className="z-10 sm:col-span-6">
												<h3 className="font-medium leading-snug text-slate-200">
													<div>
														<a
															className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
															href="https://www.klaviyo.com"
															target="_blank"
															rel="noreferrer"
															aria-label="Senior Frontend Engineer, Accessibility at Klaviyo"
														>
															<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
															<span>
																Senior Frontend
																Engineer,
																Accessibility ·{" "}
																<span className="inline-block">
																	Klaviyo
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																		aria-hidden="true"
																	>
																		<path
																			fillRule="evenodd"
																			d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																			clipRule="evenodd"
																		></path>
																	</svg>
																</span>
															</span>
														</a>
													</div>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													Build and maintain critical
													components used to construct
													Klaviyo&apos;s frontend,
													across the whole product.
													Work closely with
													cross-functional teams,
													including developers,
													designers, and product
													managers, to implement and
													advocate for best practices
													in web accessibility.
												</p>
												<ul
													className="mt-2 flex flex-wrap"
													aria-label="Technologies used"
												>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															JavaScript
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															TypeScript
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															React
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Storybook
														</div>
													</li>
												</ul>
											</div>
										</div>
									</li>

									{/* Experience Item 2 */}
									<li className="mb-12">
										<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<header
												className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
												aria-label="2018 to 2024"
											>
												2018 — 2024
											</header>
											<div className="z-10 sm:col-span-6">
												<h3 className="font-medium leading-snug text-slate-200">
													<div>
														<a
															className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
															href="https://upstatement.com"
															target="_blank"
															rel="noreferrer"
															aria-label="Lead Engineer at Upstatement"
														>
															<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
															<span>
																Lead Engineer ·{" "}
																<span className="inline-block">
																	Upstatement
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																		aria-hidden="true"
																	>
																		<path
																			fillRule="evenodd"
																			d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																			clipRule="evenodd"
																		></path>
																	</svg>
																</span>
															</span>
														</a>
													</div>
													<div>
														<div
															className="text-slate-500"
															aria-hidden="true"
														>
															Senior Engineer
														</div>
													</div>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													Build, style, and ship
													high-quality websites,
													design systems, mobile apps,
													and digital experiences for
													a diverse array of projects
													for clients including
													Harvard Business School,
													Everytown for Gun Safety,
													Pratt Institute, Koala
													Health, Vanderbilt
													University, The 19th News,
													and more. Provide leadership
													within engineering
													department through close
													collaboration, knowledge
													shares, and spearheading the
													development of internal
													tools.
												</p>
												<ul
													className="mt-2 flex flex-wrap"
													aria-label="Technologies used"
												>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															JavaScript
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															TypeScript
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															HTML & SCSS
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															React
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Next.js
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															React Native
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															WordPress
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Contentful
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Node.js
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															PHP
														</div>
													</li>
												</ul>
											</div>
										</div>
									</li>

									{/* Experience Item 3 */}
									<li className="mb-12">
										<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<header
												className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
												aria-label="July to December 2017"
											>
												July — Dec 2017
											</header>
											<div className="z-10 sm:col-span-6">
												<h3 className="font-medium leading-snug text-slate-200">
													<div>
														<a
															className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
															href="https://www.apple.com/apple-music/"
															target="_blank"
															rel="noreferrer"
															aria-label="UI Engineer Co-op at Apple"
														>
															<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
															<span>
																UI Engineer
																Co-op ·{" "}
																<span className="inline-block">
																	Apple
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		viewBox="0 0 20 20"
																		fill="currentColor"
																		className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																		aria-hidden="true"
																	>
																		<path
																			fillRule="evenodd"
																			d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																			clipRule="evenodd"
																		></path>
																	</svg>
																</span>
															</span>
														</a>
													</div>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													Developed and styled
													interactive web apps for
													Apple Music, including the
													user interface of Apple
													Music&apos;s embeddable web
													player widget for in-browser
													user authorization and full
													song playback.
												</p>
												<ul
													className="mt-2 flex flex-wrap"
													aria-label="Technologies used"
												>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Ember
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															SCSS
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															JavaScript
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															MusicKit.js
														</div>
													</li>
												</ul>
											</div>
										</div>
									</li>
								</ol>
								<div className="mt-12">
									<a
										className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
										aria-label="View Full Résumé"
										href="/resume.pdf"
									>
										<span>
											<span className="border-b border-transparent pb-px transition group-hover:border-teal-400 motion-reduce:transition-none">
												View Full{" "}
											</span>
											<span className="whitespace-nowrap">
												<span className="border-b border-transparent pb-px transition group-hover:border-teal-400 motion-reduce:transition-none">
													Résumé
												</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
														clipRule="evenodd"
													></path>
												</svg>
											</span>
										</span>
									</a>
								</div>
							</div>
						</section>

						{/* Projects Section */}
						<section
							id="projects"
							className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
							aria-label="Selected projects"
						>
							<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0c142c]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
								<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
									Projects
								</h2>
							</div>
							<div>
								<ul className="group/list">
									{/* Project 1 */}
									<li className="mb-12">
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<div className="z-10 sm:order-2 sm:col-span-6">
												<h3>
													<a
														className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
														href="https://www.newline.co/courses/build-a-spotify-connected-app"
														target="_blank"
														rel="noreferrer"
														aria-label="Build a Spotify Connected App"
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
														<span>
															Build a Spotify
															Connected App{" "}
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																aria-hidden="true"
															>
																<path
																	fillRule="evenodd"
																	d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																	clipRule="evenodd"
																></path>
															</svg>
														</span>
													</a>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													Video course that teaches
													how to build a web app with
													the Spotify Web API. Topics
													covered include the
													principles of REST APIs,
													user auth flows, Node,
													Express, React, Styled
													Components, and more.
												</p>
											</div>
											<Image
												alt="Build a Spotify Connected App course"
												width={200}
												height={48}
												className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
												src="https://ext.same-assets.com/1031784112/3267000279.png"
											/>
										</div>
									</li>

									{/* Project 2 */}
									<li className="mb-12">
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<div className="z-10 sm:order-2 sm:col-span-6">
												<h3>
													<a
														className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
														href="https://spotify-profile.herokuapp.com/"
														target="_blank"
														rel="noreferrer"
														aria-label="Spotify Profile"
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
														<span>
															Spotify Profile{" "}
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																aria-hidden="true"
															>
																<path
																	fillRule="evenodd"
																	d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																	clipRule="evenodd"
																></path>
															</svg>
														</span>
													</a>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													Web app for visualizing
													personalized Spotify data.
													View your top artists, top
													tracks, recently played
													tracks, and detailed audio
													information about each
													track. Create and save new
													playlists of recommended
													tracks based on your
													existing playlists and more.
												</p>
												<ul
													className="mt-2 flex flex-wrap"
													aria-label="Technologies used"
												>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															React
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Express
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Spotify API
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Heroku
														</div>
													</li>
												</ul>
											</div>
											<Image
												alt="Spotify Profile"
												width={200}
												height={48}
												className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
												src="https://ext.same-assets.com/1031784112/3242063427.png"
											/>
										</div>
									</li>

									{/* Project 3 */}
									<li className="mb-12">
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<div className="z-10 sm:order-2 sm:col-span-6">
												<h3>
													<a
														className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
														href="https://halcyon-theme.netlify.app/"
														target="_blank"
														rel="noreferrer"
														aria-label="Halcyon Theme"
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
														<span>
															Halcyon Theme{" "}
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																aria-hidden="true"
															>
																<path
																	fillRule="evenodd"
																	d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																	clipRule="evenodd"
																></path>
															</svg>
														</span>
													</a>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													Minimal dark blue theme for
													VS Code, Sublime Text, Atom,
													iTerm, and more.
												</p>
												<p className="mt-2 text-sm leading-normal text-slate-400">
													100k+ Installs
												</p>
											</div>
											<Image
												alt="Halcyon Theme"
												width={200}
												height={48}
												className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
												src="https://ext.same-assets.com/1031784112/3705990346.png"
											/>
										</div>
									</li>

									{/* Project 4 */}
									<li className="mb-12">
										<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
											<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
											<div className="z-10 sm:order-2 sm:col-span-6">
												<h3>
													<a
														className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-400 focus-visible:text-teal-400 group/link text-base"
														href="https://v4.brittanychiang.com/"
														target="_blank"
														rel="noreferrer"
														aria-label="brittanychiang.com (v4)"
													>
														<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
														<span>
															brittanychiang.com
															(v4){" "}
															<svg
																xmlns="http://www.w3.org/2000/svg"
																viewBox="0 0 20 20"
																fill="currentColor"
																className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
																aria-hidden="true"
															>
																<path
																	fillRule="evenodd"
																	d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
																	clipRule="evenodd"
																></path>
															</svg>
														</span>
													</a>
												</h3>
												<p className="mt-2 text-sm leading-normal">
													An old portfolio site built
													with Gatsby with 6k+ stars
													and 3k+ forks
												</p>
												<ul
													className="mt-2 flex flex-wrap"
													aria-label="Technologies used"
												>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Gatsby
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Styled Components
														</div>
													</li>
													<li className="mr-1.5 mt-2">
														<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-400">
															Netlify
														</div>
													</li>
												</ul>
											</div>
											<Image
												alt="brittanychiang.com v4"
												width={200}
												height={48}
												className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
												src="https://ext.same-assets.com/1031784112/2425062674.png"
											/>
										</div>
									</li>
								</ul>
								<div className="mt-12">
									<a
										className="inline-flex items-center font-semibold leading-tight text-slate-200 group"
										aria-label="View Full Project Archive"
										href="/archive"
									>
										<span>
											<span className="border-b border-transparent pb-px transition group-hover:border-teal-400 motion-reduce:transition-none">
												View Full Project{" "}
											</span>
											<span className="whitespace-nowrap">
												<span className="border-b border-transparent pb-px transition group-hover:border-teal-400 motion-reduce:transition-none">
													Archive
												</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
													aria-hidden="true"
												>
													<path
														fillRule="evenodd"
														d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
														clipRule="evenodd"
													></path>
												</svg>
											</span>
										</span>
									</a>
								</div>
							</div>
						</section>

						{/* Footer */}
						<footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
							<p>
								Loosely designed in{" "}
								<a
									href="https://www.figma.com/"
									className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400"
									target="_blank"
									rel="noreferrer"
								>
									Figma
								</a>{" "}
								and coded in{" "}
								<a
									href="https://code.visualstudio.com/"
									className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400"
									target="_blank"
									rel="noreferrer"
								>
									Visual Studio Code
								</a>{" "}
								by yours truly. Built with{" "}
								<a
									href="https://nextjs.org/"
									className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400"
									target="_blank"
									rel="noreferrer"
								>
									Next.js
								</a>{" "}
								and{" "}
								<a
									href="https://tailwindcss.com/"
									className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400"
									target="_blank"
									rel="noreferrer"
								>
									Tailwind CSS
								</a>
								, deployed with{" "}
								<a
									href="https://vercel.com/"
									className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400"
									target="_blank"
									rel="noreferrer"
								>
									Vercel
								</a>
								. All text is set in the{" "}
								<a
									href="https://rsms.me/inter/"
									className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400"
									target="_blank"
									rel="noreferrer"
								>
									Inter
								</a>{" "}
								typeface.
							</p>
						</footer>
					</main>
				</div>
			</div>
		</div>
	);
}
