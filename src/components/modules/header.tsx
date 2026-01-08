import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";

export default function Header() {
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "History", path: "/history" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur-lg transition-all duration-300 dark:border-gray-800 dark:bg-gray-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-12">
            <Link
              className="flex items-center gap-2 text-teal-600 transition hover:opacity-90"
              to="/"
            >
              <span className="sr-only">Home</span>
              <svg
                className="h-8 w-auto"
                viewBox="0 0 28 24"
                fill="none"
                xmlns="www.w3.org"
              >
                <path
                  d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424..."
                  fill="currentColor"
                />
              </svg>
              <span className="hidden text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:block">
                ModernUI
              </span>
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-8 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="relative text-gray-600 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-teal-500 after:transition-all hover:after:w-full"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden rounded-full bg-indigo-700 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-teal-500/20 dark:bg-indigo-700 dark:hover:bg-indigo-700 sm:block"
              >
                Login
              </Link>

              <div className="flex items-center border-l border-gray-200 pl-3 dark:border-gray-800">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button className="rounded-lg bg-gray-100 p-2.5 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700">
                <svg
                  xmlns="www.w3.org"
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
