import { useUserdata } from "@/shared/components/firestore";
import { Mail } from "lucide-react";
import img3 from "../images/download (1).png";
import img2 from "../images/download (2).jpeg";
import img1 from "../images/download (2).png";
import img5 from "../images/download (3).jpeg";
import img6 from "../images/download (3).png";
import img4 from "../images/download.png";
import img7 from "../images/notion.png";
import defaultAvatar from "../images/see-CUiBe9gY.png";

const Footer = () => {
  const { data } = useUserdata();

  const image: Record<string, string> = {
    linkedin: img4,
    whatsapp: img3,
    facebook: img2,
    github: img1,
    leetcode: img5,
    codeforces: img6,
    notion: img7,
  };

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "projects", label: "projects" },
    { id: "skills", label: "Skills" },
    { id: "courses", label: "courses" },
    { id: "contact", label: "Contact me" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string,
  ) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#0b0b0b] pt-12 pb-6 border-t border-white/5">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center gap-8">
        <p className="font-logo text-logo-gradient text-2xl font-bold tracking-wide">
          {data?.userName?.split(" ")[0] || "LOGO"}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleSmoothScroll(e, section.id)}
              className="text-base tracking-wide text-muted-foreground hover:text-primary transition-colors"
            >
              {section.label}
            </a>
          ))}
        </div>

        {data?.contactAndAccounts && data.contactAndAccounts.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5">
            {data.contactAndAccounts.map((user) => (
              <a
                href={user.url}
                key={user.id}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-muted-foreground/50 transition-all hover:border-primary hover:scale-110"
              >
                <img
                  src={image[user.webName] ?? defaultAvatar}
                  alt={user.webName}
                  className="size-[22px] rounded-full object-cover"
                />
              </a>
            ))}
          </div>
        )}

        {data?.email && (
          <a
            href={`mailto:${data.email}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="size-4 text-primary" />
            {data.email}
          </a>
        )}

        <p className="text-muted-foreground text-sm font-medium flex flex-wrap items-center justify-center gap-2 border-t border-white/5 pt-6 w-full">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span>Crafted by</span>
          <a
            href="https://www.linkedin.com/in/taha-saber-4a4a3834b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
          >
            Taha Saber
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
