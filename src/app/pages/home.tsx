import { useUserdata } from "@/shared/components/firestore";
import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import img3 from "../images/download (1).png";
import img2 from "../images/download (2).jpeg";
import img1 from "../images/download (2).png";
import img5 from "../images/download (3).jpeg";
import img6 from "../images/download (3).png";
import img4 from "../images/download.png";
import heroGlow from "../images/figma/hero-glow.png";
import img7 from "../images/notion.png";
import defaultAvatar from "../images/see-CUiBe9gY.png";

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
        <p className="animate-pulse text-2xl font-semibold text-primary">
          Loading...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="animate-pulse text-2xl font-semibold text-destructive">
          Error occurred!
        </p>
      </div>
    );

  const experienceCount = data?.experiences?.length ?? 0;
  const projectCount = data?.projects?.length ?? 0;
  const skillsCount = data?.skills?.length ?? 0;

  const stats = [
    { value: experienceCount, label: "Experiences" },
    { value: projectCount, label: "Project done" },
    { value: skillsCount, label: "Skills" },
  ].filter((s) => s.value > 0);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <img
        src={heroGlow}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 top-24 w-[min(100%,640px)]"
      />

      <div className="relative mx-auto flex max-w-[1280px] flex-col-reverse items-center gap-12 px-6 lg:flex-row lg:justify-between lg:gap-8 lg:px-10">
        <div className="flex w-full max-w-xl flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <p className="text-xl md:text-2xl font-semibold text-muted-foreground tracking-wide">
              Hi I am
            </p>
            <h1 className="text-2xl md:text-[28px] font-bold text-foreground/80 tracking-wide">
              {data?.userName}
            </h1>
            <h2 className="text-job-gradient text-4xl sm:text-5xl md:text-[64px] font-black leading-tight tracking-wide">
              {data?.jobTitle}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {data?.contactAndAccounts?.map((user) => (
              <a
                href={user.url}
                key={user.id}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-muted-foreground/50 transition-all duration-300 hover:border-primary hover:scale-110"
              >
                <img
                  src={image[user.webName] ?? defaultAvatar}
                  loading="lazy"
                  width={22}
                  height={22}
                  className="size-[22px] rounded-full object-cover"
                  alt={user.webName}
                />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <Button
              onClick={scrollToContact}
              className="btn-primary-gradient h-12 rounded-lg px-10 text-lg font-bold text-white shadow-none hover:opacity-95"
            >
              Hire Me
            </Button>
            {data?.cvUrl && (
              <a href={data.cvUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="h-12 rounded-lg border-2 border-muted-foreground bg-transparent px-8 text-lg font-bold text-muted-foreground hover:border-primary hover:bg-transparent hover:text-primary"
                >
                  Download CV
                </Button>
              </a>
            )}
          </motion.div>

          {stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-12 flex w-full max-w-lg flex-wrap items-stretch justify-center gap-0 rounded-lg bg-card dark:bg-white/[0.04] p-5 lg:justify-start"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex min-w-[120px] flex-1 flex-col gap-2 px-4 py-1.5 ${
                    index < stats.length - 1
                      ? "border-r border-muted-foreground/40"
                      : ""
                  }`}
                >
                  <span className="text-xl font-extrabold text-primary tracking-wide">
                    {stat.value}+
                  </span>
                  <span className="text-base font-bold text-foreground/80 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </div>

   <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative flex h-[360px] w-[280px] shrink-0 items-end justify-center sm:h-[440px] sm:w-[340px] md:h-[540px] md:w-[400px] lg:h-[620px] lg:w-[460px]"
>
  <div
    aria-hidden
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="h-[72%] w-[72%] rounded-full bg-primary/20 blur-2xl" />
  </div>

  {/* Profile Image */}
  <div className="relative z-10 flex h-[78%] w-[78%] items-center justify-center overflow-hidden rounded-full sm:h-[82%] sm:w-[82%] md:h-[84%] md:w-[84%] lg:h-[86%] lg:w-[86%]">
    <img
      src={data?.userImage ?? defaultAvatar}
      loading="eager"
      alt="Profile"
      className="h-full w-full rounded-full object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Home;
