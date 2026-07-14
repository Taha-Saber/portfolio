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
    <section id="skills" className="px-6 md:px-12 bg-background py-12">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Skills
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data?.skills?.map((skill, index) => (
            <motion.div
              key={skill.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group relative"
            >
              <div className="relative rounded-xl p-4 bg-card border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.2)] flex flex-col items-center justify-center space-y-3 transition-all duration-300">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Star size={24} className="text-primary" />
                </div>
                <h3 className="text-sm font-bold text-center text-foreground uppercase tracking-widest">
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
