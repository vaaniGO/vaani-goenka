const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-muted-foreground">
            The background artwork is a work of{' '}
            <a
              href="https://www.bireswarsenart.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
            >
              Bireswar Sen
            </a>, a Bengali artist whose finesse continues to inspire.
          </p>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
