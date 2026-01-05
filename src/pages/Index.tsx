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

      {/* Hero Section with Interests */}
      <section className="py-16 md:py-20">
        <div className="container max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16">
            {/* Left Column - Hero */}
            <div className="md:w-2/5">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Vaani Goenka"
                className="w-48 h-58 md:w-56 md:h-66 object-cover mb-6"
              />

              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                Vaani Goenka
              </h1>
            </div>

            {/* Right Column - About Me & Interests */}
            <div className="md:w-3/5">
              <div className="mb-8">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                  About Me
                </h2>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  I am a second year student at Ashoka University studying Computer Science and Mathematics with a . I am currently working with <a href="https://aalok-thakkar.github.io/" className='text-primary'> Prof. Aalok Thakkar </a> to reassert a correctness-first scientific approach to Computer Science.
                  Apart from my research and academic interests, I enjoy building scalable systems to automate processes.
                </p>
              </div>

              <div id="interests">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects">
        <Section>
          <CardSlider title="I am currently working on" projects={recentProjects} />
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