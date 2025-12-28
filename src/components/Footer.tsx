const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vaani Goenka
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vaaniGO"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/VaaniGO/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
