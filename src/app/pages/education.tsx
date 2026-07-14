import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const Education = () => {
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
    <section id="education" className="px-6 md:px-12 py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground tracking-wide">
            Education
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {(data?.education ?? []).map((edu, index) => (
            <motion.div
              key={edu.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative section-card text-card-foreground shadow-lg rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary transition-colors">
                      {edu.university}
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground/80 mt-1">
                      {edu.major}
                    </h4>
                  </div>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-secondary text-secondary-foreground border border-border">
                    {edu.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {data?.education?.length === 0 && (
          <p className="text-center text-muted-foreground italic py-10">
            No education data found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Education;
