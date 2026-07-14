import { useUserdata } from "@/shared/components/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

function isValidUrl(url?: string): boolean {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

const FreeContents = () => {
  const { isLoading, error, data } = useUserdata();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const hasContents = Array.isArray(data?.contentsTitle) && data.contentsTitle.length > 0;
  const handleAccordionClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="free-content" className="px-6 md:px-12 py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {hasContents && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Free Contents
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>
        )}

        <div className="space-y-4">
          {data?.contentsTitle?.map((contentTitle, idx) => (
            <motion.div
              key={contentTitle.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative border border-border/50 rounded-2xl bg-card overflow-hidden transition-all duration-300 hover:border-primary/30">
                <button
                  className="w-full text-left px-8 py-5 flex justify-between items-center focus:outline-none transition-colors hover:bg-primary/5"
                  onClick={() => handleAccordionClick(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {contentTitle.contentTitle}
                  </span>
                  <div className={`p-2 rounded-full bg-secondary/50 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 bg-primary/20 text-primary' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-6 pt-2 space-y-4 border-t border-border/30">
                        {contentTitle.contents && contentTitle.contents.length > 0 ? (
                          contentTitle.contents.map((content) => (
                            <a
                              key={content.id || content.contentUrl}
                              href={content.contentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`group/link flex items-center p-4 rounded-xl bg-secondary/30 hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 ${!isValidUrl(content.contentUrl) ? 'pointer-events-none opacity-50' : ''}`}
                              onClick={e => {
                                if (!isValidUrl(content.contentUrl)) e.preventDefault();
                              }}
                            >
                              <div className="p-2 rounded-lg bg-background mr-4 text-primary group-hover/link:scale-110 transition-transform">
                                <ExternalLink size={18} />
                              </div>
                              <span className="text-lg font-semibold text-foreground/80 group-hover/link:text-primary transition-colors">
                                {content.contentDescription || "View Content"}
                              </span>
                            </a>
                          ))
                        ) : (
                          <div className="text-muted-foreground italic py-2">No contents available.</div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeContents;