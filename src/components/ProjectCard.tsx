import BookmarkEmbed from './BookmarkEmbed';

interface ProjectLink {
  url: string;
  title: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  links?: ProjectLink[];
  note?: string;
}

const ProjectCard = ({ title, description, links, note }: ProjectCardProps) => {
  return (
    <div className="group min-w-[320px] max-w-[380px] flex-shrink-0 rounded-xl border border-border 
                    bg-gradient-card p-6 shadow-soft
                    transition-all duration-300 ease-out
                    hover:border-primary/30 hover:shadow-card hover:-translate-y-1">
      <h4 className="font-display text-xl font-semibold text-foreground mb-3 
                     transition-colors duration-300 group-hover:text-primary">
        {title}
      </h4>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      {note && (
        <p className="font-body text-xs text-muted-foreground/70 italic mb-4">
          {note}
        </p>
      )}
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <BookmarkEmbed key={index} url={link.url} title={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
