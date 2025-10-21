export default function AboutSection() {
	return (
		<section
			id="about"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="About me"
		>
			<div className="mb-8 lg:sr-only">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
					About
				</h2>
			</div>
			<div className="space-y-4">
				<p className="mb-4">
					I&apos;m a <strong className="text-slate-200">4th Year Computer Science student</strong> at Royal University of Phnom Penh, 
					passionate about building scalable and modern web applications. Expected graduation in 2026.
				</p>
				<p className="mb-4">
					As a Software Engineer based in <strong className="text-slate-200">Phnom Penh, Cambodia</strong>, 
					I specialize in full-stack development with expertise in both frontend and backend technologies. 
					I work with <strong className="text-slate-200">React, Next.js, Vue.js, Laravel, and Node.js</strong> to 
					build robust and user-friendly web applications.
				</p>
				<p className="mb-4">
					My development approach focuses on writing clean, maintainable code while leveraging modern frameworks 
					and best practices. I&apos;m experienced with <strong className="text-slate-200">Inertia.js</strong> for 
					building seamless SPA experiences, <strong className="text-slate-200">Prisma</strong> for database management, 
					and integrating payment systems like <strong className="text-slate-200">PayWay KHQR</strong>.
				</p>
				<p>
					When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, 
					and continuously improving my skills to deliver better solutions. I&apos;m always eager to take on 
					challenging projects that push the boundaries of web development.
				</p>
			</div>
		</section>
	);
}
