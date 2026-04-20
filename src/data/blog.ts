import { getCollection } from 'astro:content';

export async function getRecentBlogPosts(limit = 3) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf())
    .slice(0, limit);
}

export async function getAllBlogPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());
}
