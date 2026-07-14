import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const Experience = () => {
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
    <section id="experience" className="px-6 md:px-12 bg-background py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground tracking-wide">
            Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {data?.experiences?.map((ex, index) => (
            <motion.div
              key={ex.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative section-card text-card-foreground shadow-lg rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                      {ex.experienceTitle}
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground/80 mt-1">
                      {ex.company}
                    </h4>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground border border-border">
                    {ex.date}
                  </span>
                </div>

                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  {ex.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
