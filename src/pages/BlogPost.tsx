import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getPostBySlug, type BlogPost as BlogPostType } from '@/client/queries';
import { ArrowLeft } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;

    getPostBySlug(slug)
      .then((data) => {
        if (data) {
          setPost(data);
        } else {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error('Error fetching post:', err);
        setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/blog" replace />;
  }

  // Process inline math ($...$) in text
  const processInlineMath = (text: string): (string | JSX.Element)[] => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    const regex = /\$([^\$]+)\$/g;
    let match;
    let key = 0;

    while ((match = regex.exec(text)) !== null) {
      // Add text before the math
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      // Render inline math immediately with KaTeX
      try {
        const html = katex.renderToString(match[1], {
          displayMode: false,
          throwOnError: false,
        });
        parts.push(
          <span
            key={key++}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (e) {
        console.error('KaTeX error:', e);
        parts.push(<span key={key++}>{match[1]}</span>);
      }

      lastIndex = regex.lastIndex;
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  // Enhanced markdown-like rendering with LaTeX support
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];

    lines.forEach((line, index) => {
      // Check for display math ($$...$$)
      if (line.trim().startsWith('$$') && line.trim().endsWith('$$')) {
        const mathContent = line.trim().slice(2, -2);
        try {
          const html = katex.renderToString(mathContent, {
            displayMode: true,
            throwOnError: false,
          });
          elements.push(
            <div
              key={index}
              className="my-6 text-center overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          console.error('KaTeX display error:', e);
          elements.push(
            <div key={index} className="my-6 text-center">
              {mathContent}
            </div>
          );
        }
      }
      // Headings
      else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={index} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {processInlineMath(line.slice(2))}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
            {processInlineMath(line.slice(3))}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="font-display text-xl font-semibold text-foreground mt-6 mb-3">
            {processInlineMath(line.slice(4))}
          </h3>
        );
      }
      // Italic text
      else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        elements.push(
          <p key={index} className="font-body text-lg text-muted-foreground italic my-4 text-justify">
            {processInlineMath(line.slice(1, -1))}
          </p>
        );
      }
      // Horizontal rule
      else if (line.trim() === '---') {
        elements.push(<hr key={index} className="my-8 border-border" />);
      }
      // Empty line
      else if (line.trim() === '') {
        elements.push(<div key={index} className="h-4" />);
      }
      // Regular paragraph
      else {
        elements.push(
          <p key={index} className="font-body text-foreground/90 leading-relaxed my-4 text-justify">
            {processInlineMath(line)}
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

          {/* TITLE - This was missing! */}
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>

          {post.publishedAt && (
            <p className="font-body text-sm text-muted-foreground mb-8">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}

          <article className="prose prose-lg max-w-3xl">
            {renderContent(post.body)}
          </article>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;