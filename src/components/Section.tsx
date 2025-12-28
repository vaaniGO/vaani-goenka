import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, children, className = '' }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 ${className}`}
    >
      <div className="container max-w-5xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
