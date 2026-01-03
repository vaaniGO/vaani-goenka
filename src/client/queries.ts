// src/client/queries.ts
import { client } from './sanity';

export interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    body: string; // or any[] if using portable text
    image?: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
}

// Fetch all blog posts
export async function getAllPosts(): Promise<BlogPost[]> {
    const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    image
  }`;

    return await client.fetch(query);
}

// Fetch a single post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    image
  }`;

    return await client.fetch(query, { slug });
}