import { useState } from "react"; // ১. useState ইমপোর্ট করুন
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/dark-mode/mode-toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // ২. মেনু ওপেন/ক্লোজ স্টেট

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
          <div className="flex items-center gap-12">
            <Link className="flex items-center gap-2 text-teal-600" to="/">
              <span className="hidden text-xl font-bold text-gray-900 dark:text-white sm:block">
                ModernUI
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <nav>
              <ul className="flex items-center gap-8 text-sm font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-teal-600 dark:text-gray-400"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden sm:block rounded-full bg-indigo-700 px-6 py-2 text-white"
              >
                Login
              </Link>
              <ModeToggle />
            </div>

            {/* ৩. মোবাইল মেনু বাটন (onClick যোগ করা হয়েছে) */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg bg-gray-100 p-2 text-gray-600 dark:bg-gray-800"
              >
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ৪. মোবাইল ড্রপডাউন মেনু (কন্ডিশনাল রেন্ডারিং) */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // ক্লিক করলে মেনু বন্ধ হবে
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-teal-600"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="block w-full text-center rounded-lg bg-indigo-700 py-2 text-white"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
