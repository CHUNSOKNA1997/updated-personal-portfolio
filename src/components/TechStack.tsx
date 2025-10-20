import { techStack } from "@/data/techStack";

export default function TechStack() {
	return (
		<div className="mt-16 hidden lg:block">
			<p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
				Tech Stack
			</p>
			<div className="flex flex-wrap gap-2">
				{techStack.map((tech) => (
					<span
						key={tech}
						className="inline-flex items-center rounded-md bg-cyan-400/10 px-2 py-1 text-xs font-medium text-cyan-400 ring-1 ring-inset ring-cyan-400/20"
					>
						{tech}
					</span>
				))}
			</div>
		</div>
	);
}
