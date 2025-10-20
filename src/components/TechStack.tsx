import { techStack } from "@/data/techStack";

export default function TechStack() {
	return (
		<div className="mt-16 hidden lg:block">
			<p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
				Tech Stack
			</p>
			<div className="flex flex-wrap gap-3">
				{techStack.map((tech) => (
					<span
						key={tech}
						className="group relative inline-flex items-center rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 px-2.5 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-slate-700/50 transition-all hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-0.5"
					>
						<span className="relative z-10">{tech}</span>
						<span className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-all"></span>
					</span>
				))}
			</div>
		</div>
	);
}
