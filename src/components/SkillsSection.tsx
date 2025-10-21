"use client";

import { techStack } from "@/data/techStack";
import Image from "next/image";
import { useState } from "react";

export default function SkillsSection() {
	return (
		<section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 lg:hidden">
			<div className="mb-8 lg:sr-only">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
					Skills
				</h2>
			</div>
			<div>
				<p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
					Tech Stack
				</p>
				<div className="space-y-8">
					{techStack.map((category) => (
						<div key={category.title}>
							<h3 className="text-sm font-medium text-slate-200 mb-4">
								{category.title}
							</h3>
							<div className="flex flex-wrap gap-3">
								{category.items.map((tech) => {
									return <TechItem key={tech.name} tech={tech} />;
								})}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function TechItem({ tech }: { tech: { name: string; icon: string; variant?: string } }) {
	const [imageError, setImageError] = useState(false);
	const variant = tech.variant || 'original';
	const iconUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-${variant}.svg`;

	return (
		<div className="group relative inline-flex items-center rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-900/50 px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-slate-700/50 transition-all hover:ring-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-0.5 hover:z-[10000]">
			{/* Tooltip/Popup with Icon */}
			<div className="absolute -top-20 left-1/2 -translate-x-1/2 invisible group-hover:visible scale-0 group-hover:scale-100 transition-all duration-200 pointer-events-none z-[9999]">
				<div className="rounded-lg p-4 shadow-2xl border-2 border-slate-200 flex items-center justify-center w-20 h-20 relative backdrop-blur-none" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
					{!imageError ? (
						<Image
							src={iconUrl}
							alt={tech.name}
							width={48}
							height={48}
							className="w-12 h-12 object-contain relative z-10"
							onError={() => setImageError(true)}
							unoptimized
						/>
					) : (
						<div className="w-12 h-12 flex items-center justify-center rounded text-slate-700 font-bold text-xl relative z-10" style={{ backgroundColor: 'rgb(226, 232, 240)' }}>
							{tech.name.charAt(0)}
						</div>
					)}
				</div>
				{/* Arrow */}
				<div className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 w-3 h-3 border-r-2 border-b-2 border-slate-200 rotate-45" style={{ backgroundColor: 'rgb(255, 255, 255)' }}></div>
			</div>
			<span className="relative z-[1]">{tech.name}</span>
			<span className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-all"></span>
		</div>
	);
}
