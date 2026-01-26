import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Section from '@/components/Section';
import { getPostBySlug, type BlogPost as BlogPostType } from '@/client/queries';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

// Toggle Component
interface BlogToggleProps {
  title: string | JSX.Element | (string | JSX.Element)[];
  children: JSX.Element[];
}

const BlogToggle = ({ title, children }: BlogToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-4 rounded-lg ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start gap-2 text-left font-body text-foreground/90 
                   hover:text-foreground transition-colors group p-2 rounded"
      >
        <ChevronRight
          className={`h-5 w-5 mt-0.5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''
            }`}
        />
        <span className="font-medium">{title}</span>
      </button>

      {isOpen && (
        <div className="ml-7 mt-1 pb-2 px-2 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
};

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

  // Enhanced markdown-like rendering with LaTeX support and toggles
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Check for toggle syntax: > Toggle title
      if (line.startsWith('> ')) {
        const toggleTitle = processInlineMath(line.slice(2));
        const toggleContent: JSX.Element[] = [];
        i++; // Move to next line

        // Collect indented content (lines starting with tab or 2+ spaces)
        while (i < lines.length && (lines[i].startsWith('  ') || lines[i].startsWith('\t'))) {
          const contentLine = lines[i].replace(/^(\s{2}|\t)/, ''); // Remove first indent

          // Process the content line similar to regular content
          if (contentLine.trim().startsWith('$$') && contentLine.trim().endsWith('$$')) {
            const mathContent = contentLine.trim().slice(2, -2);
            try {
              const html = katex.renderToString(mathContent, {
                displayMode: true,
                throwOnError: false,
              });
              toggleContent.push(
                <div
                  key={i}
                  className="my-4 text-center overflow-x-auto"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            } catch (e) {
              console.error('KaTeX display error:', e);
              toggleContent.push(
                <div key={i} className="my-4 text-center">
                  {mathContent}
                </div>
              );
            }
          } else if (contentLine.startsWith('### ')) {
            toggleContent.push(
              <h3 key={i} className="font-display text-lg font-semibold text-foreground mt-4 mb-2">
                {processInlineMath(contentLine.slice(4))}
              </h3>
            );
          } else if (contentLine.startsWith('## ')) {
            toggleContent.push(
              <h2 key={i} className="font-display text-xl font-semibold text-foreground mt-4 mb-2">
                {processInlineMath(contentLine.slice(3))}
              </h2>
            );
          } else if (contentLine.startsWith('# ')) {
            toggleContent.push(
              <h1 key={i} className="font-display text-2xl font-bold text-foreground mt-4 mb-2">
                {processInlineMath(contentLine.slice(2))}
              </h1>
            );
          } else if (contentLine.startsWith('*') && contentLine.endsWith('*') && !contentLine.startsWith('**')) {
            toggleContent.push(
              <p key={i} className="font-body text-lg text-muted-foreground italic my-2 text-justify">
                {processInlineMath(contentLine.slice(1, -1))}
              </p>
            );
          } else if (contentLine.trim() === '---') {
            toggleContent.push(<hr key={i} className="my-4 border-border" />);
          } else if (contentLine.trim() === '') {
            toggleContent.push(<div key={i} className="h-2" />);
          } else {
            toggleContent.push(
              <p key={i} className="font-body text-foreground/90 leading-relaxed my-2 text-justify">
                {processInlineMath(contentLine)}
              </p>
            );
          }
          i++;
        }

        elements.push(
          <BlogToggle key={`toggle-${i}`} title={toggleTitle}>
            {toggleContent}
          </BlogToggle>
        );
        continue; // Skip the i++ at the end since we've already moved
      }

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
              key={i}
              className="my-6 text-center overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch (e) {
          console.error('KaTeX display error:', e);
          elements.push(
            <div key={i} className="my-6 text-center">
              {mathContent}
            </div>
          );
        }
      }
      // Headings
      else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={i} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            {processInlineMath(line.slice(2))}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={i} className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
            {processInlineMath(line.slice(3))}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={i} className="font-display text-xl font-semibold text-foreground mt-6 mb-3">
            {processInlineMath(line.slice(4))}
          </h3>
        );
      }
      // Italic text
      else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        elements.push(
          <p key={i} className="font-body text-lg text-muted-foreground italic my-4 text-justify">
            {processInlineMath(line.slice(1, -1))}
          </p>
        );
      }
      // Horizontal rule
      else if (line.trim() === '---') {
        elements.push(<hr key={i} className="my-8 border-border" />);
      }
      // Empty line
      else if (line.trim() === '') {
        elements.push(<div key={i} className="h-4" />);
      }

      // Add this in your renderContent function, in the while loop with the other conditions
      // Check for images ![alt](url)
      else if (line.match(/^!\[.*?\]\(.*?\)/)) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, alt, url] = match;
          elements.push(
            <img
              key={i}
              src={url}
              alt={alt}
              className="my-6 rounded-lg max-w-full h-auto"
            />
          );
        }
      }
      // Regular paragraph
      else {
        elements.push(
          <p key={i} className="font-body text-foreground/90 leading-relaxed my-4 text-justify">
            {processInlineMath(line)}
          </p>
        );
      }

      i++;
    }

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

          {/* Post Title */}
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