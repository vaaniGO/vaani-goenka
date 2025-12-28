import { useParams, Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getPostBySlug } from '@/data/blogPosts';
import { ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering for the content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    
    lines.forEach((line, index) => {
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {line.slice(2)}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
            {line.slice(3)}
          </h2>
        );
      } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        elements.push(
          <p key={index} className="font-body text-lg text-muted-foreground italic my-4">
            {line.slice(1, -1)}
          </p>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-4" />);
      } else {
        elements.push(
          <p key={index} className="font-body text-foreground/90 leading-relaxed my-4">
            {line}
          </p>
        );
      }
    });
    
    return elements;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <Section>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground 
                       hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>
          
          {post.date && (
            <p className="font-body text-sm text-muted-foreground mb-4">
              {post.date}
            </p>
          )}
          
          <article className="prose prose-lg max-w-3xl">
            {renderContent(post.content)}
          </article>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
