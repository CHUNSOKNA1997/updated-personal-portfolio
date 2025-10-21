import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
	return (
		<ul
			className="ml-1 mt-8 flex flex-wrap items-center gap-5"
			aria-label="Social media"
		>
			{socialLinks.map((social) => (
				<li key={social.name} className="text-xs shrink-0">
					<a
						className="block hover:text-slate-200"
						href={social.url}
						target="_blank"
						rel="noreferrer"
					>
						<span className="sr-only">{social.name}</span>
						{social.icon}
					</a>
				</li>
			))}
		</ul>
	);
}
