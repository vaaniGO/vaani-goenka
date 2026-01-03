import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import BlogCard from '@/components/BlogCard';
import { getAllPosts, type BlogPost } from '@/client/queries';
import { ArrowLeft } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts');
      })
      .finally(() => setLoading(false));
  }, []);

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
            {loading ? (
              <p className="font-body text-muted-foreground">Loading posts...</p>
            ) : error ? (
              <p className="font-body text-destructive">{error}</p>
            ) : posts.length > 0 ? (
              posts.map((post) => (
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