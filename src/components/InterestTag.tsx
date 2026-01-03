import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InterestTagProps {
  title: string;
  content: string;
}

const InterestTag = ({ title, content }: InterestTagProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="group relative px-5 py-2.5 rounded-full border border-primary/40 bg-primary/5 
                   font-body text-sm font-medium text-foreground
                   transition-all duration-300 ease-out cursor-pointer
                   hover:border-primary hover:bg-primary/15 hover:shadow-soft hover:scale-105
                   focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      >
        <span className="relative z-10 flex items-center gap-2">
          {title}
          <svg className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border shadow-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">{title}</DialogTitle>
          </DialogHeader>
          <div
            className="mt-4 font-body text-foreground/85 leading-relaxed whitespace-pre-wrap
                       [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80 [&_a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InterestTag;