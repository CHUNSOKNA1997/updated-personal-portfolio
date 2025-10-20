import { socialLinks } from "@/data/socialLinks";

export default function SocialLinks() {
	return (
		<ul
			className="ml-1 mt-8 flex items-center"
			aria-label="Social media"
		>
			{socialLinks.map((social) => (
				<li key={social.name} className="mr-5 text-xs">
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
