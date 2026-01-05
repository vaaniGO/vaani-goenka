// src/components/BlogToggle.tsx
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface BlogToggleProps {
    title: string | JSX.Element | (string | JSX.Element)[];
    children: JSX.Element[];
}

const BlogToggle = ({ title, children }: BlogToggleProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="my-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-start gap-2 text-left font-body text-foreground/90 
                hover:text-foreground transition-colors group p-2 rounded bg-transparent 
                border-none outline-none focus:outline-none"
            >
                <ChevronRight
                    className={`h-5 w-5 mt-0.5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''
                        }`}
                />
                <span className="font-medium">{title}</span>
            </button>

            {isOpen && (
                <div className="ml-7 mt-1 pb-2 px-2 space-y-2">
                    {children}
                </div>
            )}
        </div>
    );
};

export default BlogToggle;