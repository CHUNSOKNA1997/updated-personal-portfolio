import { Education } from "@/data/types";

interface EducationCardProps {
	education: Education;
}

export default function EducationCard({ education }: EducationCardProps) {
	return (
		<li className="mb-12">
			<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
				<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
				<header
					className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
					aria-label={education.period}
				>
					{education.period}
				</header>
				<div className="z-10 sm:col-span-6">
					<h3 className="font-medium leading-snug text-slate-200">
						<div className="text-base leading-tight">
							{education.degree}
						</div>
					</h3>
					<p className="mt-2 text-sm leading-normal text-slate-400">
						{education.institution}
					</p>
				</div>
			</div>
		</li>
	);
}
