import { filteredPosts } from '$lib/data/blog-posts';

export async function load({ url }: { url: { pathname: string } }) {

  const { pathname } = url;
  const parts = pathname.split('/').filter(Boolean);
  const lang = parts[0];
  const slugMatch = pathname.match(new RegExp(`^/${lang}/(.+)$`));
  const slug = slugMatch ? slugMatch[1] : '';

  const post = filteredPosts.find((post) => post.slug === slug);

  return {
    post
  };
}
