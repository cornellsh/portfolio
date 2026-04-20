import rss from '@astrojs/rss';
import { getAllBlogPosts } from '../data/blog';
import { siteUrl } from '../data/portfolio';

export async function GET(context) {
  const posts = await getAllBlogPosts();
  return rss({
    title: 'Cornell Shakh — Blog',
    description:
      'Notes on building software: internal tools, product discipline, engineering practice, and what shipping teaches.',
    site: context.site ?? siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.id}/`,
    })),
    customData: '<language>en</language>',
  });
}
