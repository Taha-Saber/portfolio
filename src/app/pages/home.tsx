import img2 from "../images/download (2).jpeg";
import img3 from "../images/download (1).png";
import img1 from "../images/download (2).png"
import img4 from "../images/download.png";
import img5 from "../images/download (3).jpeg"
import img6 from "../images/download (3).png"
import img7 from "../images/notion.png"
import defaultAvatar from "../images/see-CUiBe9gY.png";  
import { Button } from "@/shared/components/ui/button";
import { Download } from "lucide-react";
import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";


const Home = () => {
  const image: Record<string, string> = {
    linkedin: img4,
    whatsapp: img3,
    facebook: img2,
    github: img1,
    leetcode: img5,
    codeforces: img6,
    notion: img7,
  };

  const { isLoading, error, data } = useUserdata();

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="animate-pulse text-2xl font-semibold text-primary">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="animate-pulse text-2xl font-semibold text-destructive">Error occurred!</p>
      </div>
    );

  return (
    <div className="bg-background w-full pt-20 pb-4">
      <div
        id="home"
        className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24 lg:gap-32 mx-auto max-w-7xl px-6 md:px-12"
      >
        {/* Left Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group shrink-0"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src={data?.userImage ?? defaultAvatar}
            loading="eager"
            width={320}
            height={320}
            alt="Profile"
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-background shadow-2xl"
          />
        </motion.div>

        {/* Right Column: Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-foreground tracking-tight"
          >
            {data?.userName}
          </motion.h1>

          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-primary mt-3 font-semibold tracking-wide"
          >
            {data?.jobTitle}
          </motion.h3>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center md:justify-start gap-5 mt-8"
          >
            {data?.contactAndAccounts?.map((user) => (
              <a
                href={user.url}
                key={user.id}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-all duration-300 hover:-translate-y-1 filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
              >
                <img
                  src={image[user.webName] ?? defaultAvatar}
                  loading="lazy"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full shadow-md"
                  alt={user.webName}
                />
              </a>
            ))}
          </motion.div>

          {data?.cvUrl && (
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              href={data.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10"
            >
              <Button
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-3 font-bold hover:shadow-primary/20"
              >
                Download CV
                <Download
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </Button>
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
};


export default Home;