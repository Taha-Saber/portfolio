import { useUserdata } from "@/shared/components/firestore";
import { Button } from "@/shared/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
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
    <section id="projects" className="px-6 md:px-12 py-16 bg-background">
      <div className="max-w-[1536px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground tracking-wide">
            Projects
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="relative w-full px-4 md:px-12">
          <Carousel className="w-full">
            <CarouselContent className="-ml-6">
              {data?.projects?.map((project, index) => (
                <CarouselItem
                  key={project.id}
                  className="pl-6 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative h-full"
                  >
                    <div className="relative section-card overflow-hidden flex flex-col h-full transition-all duration-300 hover:border-primary/40">
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={project.image}
                          loading="lazy"
                          alt={project.projectName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="p-4 flex items-center justify-between gap-3">
                        <h3 className="text-base font-medium text-muted-foreground line-clamp-1">
                          {project.projectName}
                        </h3>
                        <Link to={`/details/project/${project.id}`}>
                          <Button className="btn-primary-gradient h-9 rounded-lg px-4 text-sm font-bold text-white shadow-none hover:opacity-95">
                            View
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:flex -left-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="md:flex -right-4 bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
