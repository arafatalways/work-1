import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import { Link } from "react-router-dom"; // react-router-dom ব্যবহার করুন

const footerLinks = [
  { title: "Overview", href: "/" },
  { title: "Features", href: "/features" },
  { title: "Pricing", href: "/pricing" },
  { title: "Careers", href: "/careers" },
  { title: "Help", href: "/help" },
  { title: "Privacy", href: "/privacy" },
];

const socialLinks = [
  { icon: <TwitterIcon className="size-5" />, href: "#" },
  { icon: <GithubIcon className="size-5" />, href: "#" },
  { icon: <TwitchIcon className="size-5" />, href: "#" },
  { icon: <DribbbleIcon className="size-5" />, href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background px-6 pt-12 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <div className="mb-8 flex items-center justify-center">
            <Link to="/" className="transition-opacity hover:opacity-80">
              {/* আপনার লোগো SVG এখানে */}
              <svg
                width="124"
                height="32"
                viewBox="0 0 124 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.87 10.07H39.87V22.2H36.87V10.07Z"
                  className="fill-primary"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 16L14 20L22 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mb-10 w-full">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Separator className="mb-8 opacity-50" />

          {/* Bottom Section: Copyright & Socials */}
          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} ModernDev Inc. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-muted-foreground">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all hover:-translate-y-1 hover:text-teal-600"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
