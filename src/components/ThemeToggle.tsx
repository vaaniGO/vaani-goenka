import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-lg flex items-center justify-center
                 text-muted-foreground hover:text-foreground hover:bg-accent/10
                 transition-all duration-200"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
        </button>
    );
};

export default ThemeToggle;