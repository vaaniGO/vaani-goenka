import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          Vaani Goenka
        </Link>
        <nav className="flex items-center gap-6">
          <a 
            href="/#interests" 
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Interests
          </a>
          <a 
            href="/#projects" 
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <Link 
            to="/blog" 
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
