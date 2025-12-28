import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import InterestTag from '@/components/InterestTag';
import CardSlider from '@/components/CardSlider';
import BlogCard from '@/components/BlogCard';
import { interests } from '@/data/interests';
import { recentProjects, previousProjects, developmentProjects } from '@/data/projects';
import { blogPosts } from '@/data/blogPosts';

const Index = () => {
  return (
    <div className="min-h-screen bg-background puzzle-grid-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="h-[180px] flex items-center">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="max-w-3xl animate-slide-up">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
              Vaani Goenka
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              Undergraduate student at{' '}
              <span className="text-primary font-medium">Ashoka University</span>
              , exploring the intersections of formal methods, logic, and mathematical reasoning in computer science.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <Section id="interests">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
          Interests
        </h2>
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <div 
              key={interest.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <InterestTag title={interest.title} content={interest.content} />
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <div id="projects" className="bg-gradient-subtle">
        <Section>
          <CardSlider title="Recently, I have been working on" projects={recentProjects} />
        </Section>

        <Section>
          <CardSlider title="Previously, I have worked on" projects={previousProjects} />
        </Section>

        <Section>
          <CardSlider title="Development Projects" projects={developmentProjects} />
        </Section>
      </div>

      {/* Blog Section */}
      <Section id="blog">
        <h2 className="font-display text-3xl font-semibold text-foreground mb-8">
          Recently, I have been thinking about
        </h2>
        <div className="grid gap-4 max-w-2xl">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
