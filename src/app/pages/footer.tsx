const Footer = () => {
  return (
    <footer className="w-full bg-background pt-12 pb-4 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-muted-foreground text-lg font-medium flex flex-wrap items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="w-1 h-1 rounded-full bg-border mx-1"></span>
          <span>Crafted by</span>
          <a
            href="https://www.linkedin.com/in/omniya-abdelnasser-214484355/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
          >
            Omniya Abdelnasser
          </a>
          <span className="text-primary/50 mx-1 font-bold">&</span>
          <a
            href="https://www.linkedin.com/in/abdallah-alqiran/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4"
          >
            Abdallah Alqiran
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
