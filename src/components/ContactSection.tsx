"use client";

import { useState } from "react";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
					name: formData.name,
					email: formData.email,
					message: formData.message,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setSubmitStatus("success");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setSubmitStatus("error");
			}
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="contact"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Contact me"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-[#0c142c]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
					Contact
				</h2>
			</div>
			<div>
				<p className="mb-8 text-slate-400">
					Have a question or want to work together? Feel free to reach out!
				</p>

				<form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-slate-200 ring-1 ring-slate-700/50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
							placeholder="Your name"
						/>
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-slate-200 ring-1 ring-slate-700/50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all"
							placeholder="your.email@example.com"
						/>
					</div>

					<div>
						<label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={5}
							className="w-full rounded-lg bg-slate-800/50 px-4 py-3 text-slate-200 ring-1 ring-slate-700/50 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all resize-none"
							placeholder="Your message..."
						/>
					</div>

					<div className="flex gap-4">
						<button
							type="submit"
							disabled={isSubmitting}
							className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-cyan-400/90 to-blue-500/90 px-6 py-3 font-medium text-slate-900 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg hover:shadow-cyan-400/20 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? "Sending..." : "Send Message"}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-5 w-5"
							>
								<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
							</svg>
						</button>

						<a
							href="https://t.me/chunSokna_cs"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center gap-2 rounded-lg bg-slate-800/50 px-6 py-3 font-medium text-slate-200 ring-1 ring-slate-700/50 transition-all hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 hover:cursor-pointer"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								className="h-5 w-5"
							>
								<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
							</svg>
							Telegram
						</a>
					</div>

					{submitStatus === "success" && (
						<p className="text-sm text-green-400">Message sent successfully!</p>
					)}
					{submitStatus === "error" && (
						<p className="text-sm text-red-400">Failed to send message. Please try again.</p>
					)}
				</form>
			</div>
		</section>
	);
}
