import { useUserdata } from "@/shared/components/firestore";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { useState } from "react";

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu.be\/|youtube.com\/(?:watch\?v=|embed\/|v\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

const Videos = () => {
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

  const hasVideos = Array.isArray(data?.videos) && data.videos.length > 0;
  const handleAccordionClick = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="videos" className="px-6 md:px-12 py-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {hasVideos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Videos Presentation
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
          </motion.div>
        )}

        <div className="space-y-6">
          {data?.videos?.map((video: { id: number; videoTitle?: string; videoUrl?: string }, idx: number) => {
            const embedUrl = getYouTubeEmbedUrl(video.videoUrl || "");
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-primary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative border border-border/50 rounded-2xl bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 shadow-sm">
                  <button
                    className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none transition-colors hover:bg-primary/5"
                    onClick={() => handleAccordionClick(idx)}
                    aria-expanded={openIndex === idx}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {video.videoTitle || `Video Presentation #${idx + 1}`}
                      </span>
                    </div>
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
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="px-6 md:px-12 pb-8 pt-2">
                          <div className="relative w-full aspect-video rounded-2xl shadow-2xl overflow-hidden bg-black ring-1 ring-white/10">
                            {embedUrl ? (
                              <iframe
                                src={embedUrl}
                                title={video.videoTitle || `YouTube video ${video.id}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                              ></iframe>
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-destructive italic font-medium">
                                Invalid YouTube URL
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Videos;