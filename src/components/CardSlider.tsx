import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

interface ProjectLink {
  url: string;
  title: string;
}

interface Project {
  title: string;
  description: string;
  links?: ProjectLink[];
  note?: string;
}

interface CardSliderProps {
  title: string;
  projects: Project[];
}

const CardSlider = ({ title, projects }: CardSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl font-semibold text-foreground">
          {title}
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full border border-border bg-card
                       transition-all duration-200
                       hover:border-primary/50 hover:bg-primary/10
                       focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full border border-border bg-card
                       transition-all duration-200
                       hover:border-primary/50 hover:bg-primary/10
                       focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide scroll-smooth pt-2"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            links={project.links}
            note={project.note}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSlider;
