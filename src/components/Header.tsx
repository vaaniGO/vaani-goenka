import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="container max-w-5xl mx-auto px-6 h-16 flex items-center justify-between bg-background backdrop-blur-md">
        <a
          href="/vaani-goenka/"
          className="font-display text-xl font-semibold text-foreground hover:text-primary transition-colors"
        >
          Vaani Goenka
        </a>

        <nav className="flex items-center gap-6">
          <a
            href="/vaani-goenka/#projects"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <Link
            to="/research"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Research
          </Link>
          <Link
            to="/resume"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/blog"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </Link>

          <div className="ml-2 pl-2 border-l border-border/50">
            <ThemeToggle />
          </div>
        </nav >
      </div >
    </header >
  );
};

export default Header;