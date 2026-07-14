import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Skills = () => {
  const { isLoading, error, data } = useUserdata();

  if (isLoading)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-primary">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex h-48 items-center justify-center bg-background">
        <p className="animate-pulse text-xl font-semibold text-destructive">Error happened!</p>
      </div>
    );

  return (
    <section id="skills" className="px-6 md:px-12 bg-background py-16">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground tracking-wide">
            Skills
          </h2>
          <p className="mt-4 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto tracking-wide">
            Tools and strengths I use to ship clean, reliable work.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-6 md:gap-8">
          {data?.skills?.map((skill, index) => (
            <motion.div
              key={skill.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="section-card flex flex-col items-center justify-center gap-4 p-8 rounded-3xl transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5">
                <div className="flex size-[70px] items-center justify-center">
                  <Star size={40} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-center text-primary tracking-wide">
                  {skill.skillName}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
