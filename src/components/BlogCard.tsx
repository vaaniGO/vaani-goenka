import { Link } from 'react-router-dom';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt?: string;
  date?: string;
}

const BlogCard = ({ slug, title, excerpt, date }: BlogCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group block p-5 rounded-xl border border-border bg-card
                 transition-all duration-300 ease-out
                 hover:border-primary/30 hover:shadow-soft hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-display text-lg font-semibold text-foreground 
                         transition-colors duration-300 group-hover:text-primary">
            {title}
          </h4>
          {excerpt && (
            <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          )}
        </div>
        {date && (
          <span className="font-body text-xs text-muted-foreground whitespace-nowrap">
            {date}
          </span>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
