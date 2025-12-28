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
        className="group relative px-5 py-2.5 rounded-full border border-primary/30 bg-card 
                   font-body text-sm font-medium text-foreground
                   transition-all duration-300 ease-out
                   hover:border-primary hover:bg-primary/10 hover:shadow-soft
                   focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
      >
        <span className="relative z-10">{title}</span>
        <span className="absolute inset-0 rounded-full bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border shadow-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl text-foreground">{title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4 font-body text-foreground/85 leading-relaxed whitespace-pre-wrap">
            {content}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InterestTag;
