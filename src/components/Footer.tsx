export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
			<p className="mb-4">
				© {currentYear} SOKNA Chun. All rights reserved.
			</p>
			<p>
				Built with{" "}
				<a
					href="https://nextjs.org/"
					className="font-medium text-slate-400 hover:text-cyan-400 focus-visible:text-cyan-400"
					target="_blank"
					rel="noreferrer"
				>
					Next.js
				</a>
				,{" "}
				<a
					href="https://tailwindcss.com/"
					className="font-medium text-slate-400 hover:text-cyan-400 focus-visible:text-cyan-400"
					target="_blank"
					rel="noreferrer"
				>
					Tailwind CSS
				</a>
				, and{" "}
				<a
					href="https://www.typescriptlang.org/"
					className="font-medium text-slate-400 hover:text-cyan-400 focus-visible:text-cyan-400"
					target="_blank"
					rel="noreferrer"
				>
					TypeScript
				</a>
				. Hosted by{" "}
				<a
					href="https://aws.amazon.com/"
					className="font-medium text-slate-400 hover:text-cyan-400 focus-visible:text-cyan-400"
					target="_blank"
					rel="noreferrer"
				>
					AWS
				</a>
				.
			</p>
		</footer>
	);
}
