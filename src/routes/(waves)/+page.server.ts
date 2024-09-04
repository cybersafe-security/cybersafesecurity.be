import { filteredPosts } from '$lib/data/blog-posts';

export async function load() {
  const posts = filteredPosts;
  return {
    posts
  };
}
