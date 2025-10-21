import { experiences } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
	return (
		<section
			id="experience"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Work experience"
		>
			<div className="mb-8 lg:sr-only">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
					Experience
				</h2>
			</div>
			<div>
				<ol className="group/list">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
						/>
					))}
				</ol>
			</div>
		</section>
	);
}
