import { education } from "@/data/education";
import EducationCard from "./EducationCard";

export default function EducationSection() {
	return (
		<section
			id="education"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Education"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-8 w-screen bg-[#0c142c]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
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
