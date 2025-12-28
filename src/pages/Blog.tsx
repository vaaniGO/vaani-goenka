import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { ArrowLeft } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Section>
          <Link 
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground 
                       hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-2xl">
            Thoughts on mathematics, logic, and the philosophy of computation.
          </p>
          
          <div className="grid gap-4 max-w-2xl">
            {blogPosts.length > 0 ? (
              blogPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                />
              ))
            ) : (
              <p className="font-body text-muted-foreground">
                No posts yet. Check back soon!
              </p>
            )}
          </div>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
