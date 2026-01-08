import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaBehanceSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Hero() {
  const socialLinks = {
    facebook: "https://www.facebook.com",
    behance: "https://www.behance.net",
    linkedin: "https://www.linkedin.com",
  };

  const roles = [
    "Professional Video Editor",
    "Motion Graphics Designer",
    "Visual Storyteller",
    "Creative Content Creator",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentFullText.length) {
        setDisplayedText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {}, 1200);
        } else {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden transition-colors duration-500 bg-gray-50 text-gray-900 dark:bg-[#050505] dark:text-white pt-24 pb-16 px-6 lg:px-20">
      {/* Background Ambient Glows - Visible mostly in dark mode */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 relative z-10">
        {/* -------- Left Content Section -------- */}
        <div className="w-full md:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-indigo-600 dark:text-indigo-500 font-mono tracking-[0.3em] uppercase text-sm mb-4">
              Turning Vision Into Reality
            </h4>

            <h1 className="text-6xl font-bold leading-tight tracking-tighter">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-gray-400 dark:via-gray-400 dark:bg-gray-400">
                I'm Abdur Rahman
              </span>
            </h1>

            <div className="h-10">
              <span className="text-2xl md:text-3xl font-bold text-gray-600 dark:text-gray-400">
                {displayedText}
                <span className="ml-1 w-1 h-7 bg-indigo-600 dark:bg-indigo-500 inline-block animate-pulse"></span>
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mt-8 font-serif italic tracking-wide border-l-4 border-indigo-600 dark:border-indigo-500 pl-6 py-2 bg-linear-to-r from-indigo-500/5 to-transparent">
              "I don't just edit videos or design graphics; I{" "}
              <span className="text-indigo-600 dark:text-indigo-400 not-italic font-bold">
                craft experiences
              </span>
              . With expertise in{" "}
              <span className="text-gray-900 dark:text-white font-semibold not-italic underline decoration-indigo-500/50 underline-offset-4">
                Adobe Premiere Pro, After Effects, and Photoshop
              </span>
              , I transform raw footage into stunning narratives that
              <span className="text-indigo-700 dark:text-indigo-300">
                {" "}
                captivate audiences.
              </span>
              "
            </p>

            <div className="flex flex-wrap items-center gap-8 pt-10">
              <button className="px-6 py-2 font-bold text-white bg-indigo-600 dark:bg-indigo-600 rounded-full transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl dark:hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] active:scale-95">
                Hire Me
              </button>

              <div className="flex items-center gap-6">
                {[
                  { icon: <FaBehanceSquare />, url: socialLinks.behance },
                  { icon: <IoLogoLinkedin />, url: socialLinks.linkedin },
                  { icon: <FaFacebook />, url: socialLinks.facebook },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl text-gray-400 dark:text-gray-500 transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-2"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* -------- Right Image Section -------- */}
        <div className="w-full md:w-2/5 flex justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Frame Decoration: Changes border color per theme */}
            <div className="absolute -inset-4 border border-gray-200 dark:border-white/10 rounded-3xl -z-10"></div>
            <div className="absolute -inset-2 border border-gray-100 dark:border-white/5 rounded-3xl -z-10"></div>

            <div className="relative group overflow-hidden rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-black shadow-2xl">
              <img
                src="../kids.jpg"
                alt="Creative Artist"
                className="w-full h-112 object-cover rounded-xl transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 dark:from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-sm font-mono text-white dark:text-indigo-300">
                  Visual Portfolio © 2026
                </span>
              </div>
            </div>

            {/* Badge: Adapts to theme */}
            <div className="absolute -bottom-6 -left-6 bg-indigo-600 dark:bg-indigo-600 p-4 rounded-xl shadow-2xl hidden lg:block">
              <p className="text-[10px] uppercase font-bold tracking-widest text-white/80">
                Top Rated
              </p>
              <p className="text-lg font-black text-white">Visual Artist</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
