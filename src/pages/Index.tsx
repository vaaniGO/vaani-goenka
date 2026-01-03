import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import InterestTag from '@/components/InterestTag';
import CardSlider from '@/components/CardSlider';
import BlogCard from '@/components/BlogCard';
import { interests } from '@/data/interests';
import { recentProjects, previousProjects, developmentProjects } from '@/data/projects';
import { getAllPosts, type BlogPost } from '@/client/queries';

const Index = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getAllPosts()
      .then(setBlogPosts)
      .catch((err) => console.error('Error fetching posts:', err));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="max-w-3xl animate-slide-up">
            <img
              src="/profile.png"
              alt="Vaani Goenka"
              className="w-48 h-58 md:w-56 md:h-66 object-cover mb-6"
            />
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
              Vaani Goenka
            </h1>
            <p>
              Undergraduate student at Ashoka University
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed">Computer Science & Mathematics</p>
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
      <div id="projects">
        <Section>
          <CardSlider title="I am currently working on" projects={recentProjects} />
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
              key={post._id}
              slug={post.slug.current}
              title={post.title}
              excerpt={post.excerpt}
              date={new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long'
              })}
            />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;