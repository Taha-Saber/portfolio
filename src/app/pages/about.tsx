import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import defaultAvatar from "../images/see-CUiBe9gY.png";

const About = () => {
  const { isLoading, error, data } = useUserdata();

  if (isLoading)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-primary">
          Loading...
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-destructive">
          Error happened!
        </p>
      </div>
    );

  return (
    <section id="about" className="px-6 md:px-12 bg-background pt-8 pb-20">
      <div className="max-w-[1298px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground tracking-wide">
            About Me
          </h2>
          {data?.jobTitle && (
            <p className="mt-4 text-base md:text-xl text-muted-foreground tracking-wide max-w-xl mx-auto">
              {data.jobTitle}
            </p>
          )}
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative shrink-0 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] aspect-[3/4] flex items-end justify-center"
          >
            {/* Arch sits behind the transparent cutout */}
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 flex items-end justify-center"
            >
              <div className="w-[88%] h-[78%] rounded-t-[260px] rounded-b-3xl bg-[#111111]" />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[72%] h-[72%] rounded-full bg-[#ff7a00]/10 blur-3xl" />
            </div>

            <div className="relative z-10 flex h-[86%] w-[86%] items-center justify-center overflow-hidden rounded-b-3xl rounded-t-[220px]">
              <div className="absolute inset-0 left-1/2 -translate-x-1/2 w-[92%] h-[92%] rounded-full border-8 border-[#ff7a00] bg-transparent flex items-center justify-center shadow-[0_0_60px_rgba(255,122,0,0.18)]" />
              <img
                src={data?.userImage ?? defaultAvatar}
                alt={data?.userName ?? "About"}
                loading="lazy"
                className="relative z-20 mx-auto h-full w-full rounded-full object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex-1 w-full max-w-2xl"
          >
            <p className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground whitespace-pre-wrap font-medium">
              {data?.about}
            </p>

            {data?.cvUrl && (
              <a
                href={data.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex"
              >
                <span className="btn-primary-gradient inline-flex items-center gap-3 rounded-lg px-8 py-3.5 text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <Download size={22} strokeWidth={2.2} />
                  Download CV
                </span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
