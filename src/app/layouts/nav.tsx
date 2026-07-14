import { useUserdata } from "@/shared/components/firestore";
import { ThemeToggler } from "@/shared/components/theme-toggler";
import { motion } from "framer-motion";
import { useState } from "react";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { data } = useUserdata();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    section: string,
  ) => {
    e.preventDefault();
    setActiveSection(section);
    const targetElement = document.getElementById(section);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "Skills" },
    { id: "courses", label: "courses" },
    { id: "contact", label: "Contact me" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-20">
        <div className="relative flex h-[72px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-primary sm:hidden"
              aria-label="Toggle menu"
            >
              {!mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, "home")}
              className="font-logo text-logo-gradient text-2xl font-bold tracking-wide whitespace-nowrap"
            >
              {data?.userName?.split(" ")[0] || "LOGO"}
            </a>
          </div>

          <div className="hidden sm:flex flex-1 items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleSmoothScroll(e, section.id)}
                  className={`relative text-base tracking-wide transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-primary font-bold"
                      : "text-muted-foreground font-medium hover:text-foreground"
                  }`}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggler className="hidden md:block" />
            <button
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="btn-primary-gradient rounded-lg px-5 py-2.5 text-sm font-bold text-white tracking-wide transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-border/40 px-4 py-3 space-y-1 bg-background/95">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleSmoothScroll(e, section.id)}
              className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                activeSection === section.id
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {section.label}
            </a>
          ))}
          <div className="pt-2 px-1">
            <ThemeToggler />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
