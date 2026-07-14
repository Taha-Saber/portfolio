import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";
import { Settings } from "lucide-react";

const Technology = () => {
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
    <section id="technology" className="px-6 md:px-12 bg-background py-12">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Technologies & Tools
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.technologiesAndTools?.map((techs, index) => (
            <motion.div
              key={techs.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-full flex flex-col"
            >
              <div className="relative p-8 rounded-2xl bg-card border border-border/50 group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] transition-all duration-300 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Settings size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {techs.technologyTitle}
                  </h3>
                </div>

                <ul className="grid grid-cols-1 gap-3">
                  {techs.technologies.map((tech, idx) => (
                    <li
                      key={tech.id || idx}
                      className="group/item flex items-center text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="mr-3 text-primary/60 group-hover/item:text-primary transition-colors text-xl font-bold">
                        &middot;
                      </span>
                      <span className="text-lg font-medium">
                        {tech.technologyName}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
