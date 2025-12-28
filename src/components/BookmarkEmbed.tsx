import { Link2 } from 'lucide-react';

interface BookmarkEmbedProps {
  url: string;
  title: string;
}

const BookmarkEmbed = ({ url, title }: BookmarkEmbedProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg
                 border border-border bg-muted/50
                 font-body text-sm text-foreground
                 transition-all duration-300 ease-out
                 hover:border-primary/50 hover:bg-primary/5 hover:shadow-soft
                 focus:outline-none focus:ring-2 focus:ring-primary/50"
    >
      <Link2 className="h-4 w-4 text-primary shrink-0 transition-transform duration-300 group-hover:rotate-12" />
      <span className="truncate">{title}</span>
    </a>
  );
};

export default BookmarkEmbed;
