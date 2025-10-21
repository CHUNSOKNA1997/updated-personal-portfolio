import { education } from "@/data/education";
import EducationCard from "./EducationCard";

export default function EducationSection() {
	return (
		<section
			id="education"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Education"
		>
			<div className="mb-8 lg:sr-only">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
					Education
				</h2>
			</div>
			<div>
				<ol className="group/list">
					{education.map((edu, index) => (
						<EducationCard key={index} education={edu} />
					))}
				</ol>
			</div>
		</section>
	);
}
