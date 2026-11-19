import { Github, Linkedin } from "lucide-react";

const links = [
  { href: "https://github.com/pakeku", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/pacheco-erick/", label: "LinkedIn", Icon: Linkedin },
];

export default function SocialLinks({ size = 18 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="rounded-full p-2 text-gold-300 transition-colors hover:bg-white/10 hover:text-gold-400"
        >
          <Icon size={size} aria-hidden />
        </a>
      ))}
    </div>
  );
}
