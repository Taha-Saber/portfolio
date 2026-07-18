import contactimg from "../images/see-CUiBe9gY.png";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { Button } from "@/shared/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/shared/components/firebase";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async () => {
    if (!email || !message) {
      alert("Please fill in all fields");
      return;
    }
    setSending(true);

    try {
      const newMessage = {
        email,
        message,
        date: new Date().toISOString(),
      };

      const userDocRef = doc(db, "users", import.meta.env.VITE_USER_ID);
      await updateDoc(userDocRef, {
        contactMessage: arrayUnion(newMessage),
      });

      const templateParams = {
        name: "Portfolio Contact",
        email: email,
        message: message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully! ✅");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong! ❌");
    } finally {
      setSending(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center bg-background">
        <p className="text-2xl font-semibold text-primary animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <section id="contact" className="px-6 md:px-12 bg-background pt-16 pb-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-foreground tracking-wide">
            Contact me
          </h2>
          <p className="mt-4 text-base md:text-xl text-muted-foreground tracking-wide">
            Cultivating Connections: Reach Out and Connect with Me
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4" />
            <img
              src={contactimg}
              loading="lazy"
              alt="Contact"
              className="relative w-full max-w-md mx-auto  grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-5"
          >
            <Input
              type="email"
              placeholder="Email"
              className="w-full bg-secondary/50 dark:bg-white/[0.04] border-transparent focus:border-primary focus:ring-primary/20 rounded-lg px-6 py-7 text-base font-medium transition-all placeholder:text-muted-foreground"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Textarea
              placeholder="Project Details..."
              className="w-full bg-secondary/50 dark:bg-white/[0.04] border-transparent focus:border-primary focus:ring-primary/20 rounded-lg px-6 py-5 h-48 resize-none text-base font-medium transition-all placeholder:text-muted-foreground"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />

            <div className="flex mx-auto ">
              <Button
                className="min-w-[127px] h-12 rounded-lg border-2 bg-primary text-white font-bold hover:border-primary hover:text-primary hover:bg-transparent"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? "Sending..." : "Send"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
