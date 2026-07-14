import { useUserdata } from "@/shared/components/firestore";
import { motion } from "framer-motion";

const About = () => {
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
    <section id="about" className="px-6 md:px-12 bg-background pt-4 pb-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-card text-card-foreground shadow-2xl rounded-2xl p-8 md:p-12 border border-border/50 backdrop-blur-sm">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-wrap font-medium">
              {data?.about}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
