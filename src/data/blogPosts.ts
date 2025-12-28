export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

// Blog posts are managed here - simply add new posts to this array
// Each post will automatically appear on the blog page and get its own URL
export const blogPosts: BlogPost[] = [
  {
    slug: "axiom-of-choice",
    title: "What is your Axiom of Choice?",
    date: "December 2025",
    excerpt: "Exploring the philosophical implications of mathematical axioms and how they shape our reasoning.",
    content: `# What is your Axiom of Choice?

The Axiom of Choice is one of the most fascinating and controversial axioms in mathematics. It states that for any collection of non-empty sets, there exists a function that selects one element from each set.

While this seems intuitive, its implications are profound and sometimes counterintuitive. The Banach-Tarski paradox, for instance, relies on the Axiom of Choice to prove that a sphere can be decomposed and reassembled into two spheres of the same size.

## Why does this matter?

In mathematics, we often take axioms for granted. But the Axiom of Choice reminds us that our foundational assumptions shape what we can prove and understand.

*What axioms do you choose to build your reasoning upon?*
`
  }
];

// Helper function to find a post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
