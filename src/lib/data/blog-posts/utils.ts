import Prism from 'prismjs';
// Here we assign it to a variable so the import above 
// is not removed automatically on build
const ifYouRemoveMeTheBuildFails = Prism;
import 'prism-svelte';
import readingTime from 'reading-time/lib/reading-time';
import striptags from 'striptags';
import type { BlogPost } from "$lib/utils/types";

function getLanguageCode(url: string) {
  const regex = /\/\(blog-article\)\/([a-z]{2})\/.*\/\+page\.md$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export const importPosts = (render = false) => {
  const blogImports = import.meta.glob('$routes/*/*/*.md', { eager: true });
  const innerImports = import.meta.glob('$routes/*/*/*/*.md', { eager: true });

  const imports = { ...blogImports, ...innerImports };

  const posts: BlogPost[] = [];
  for (const path in imports) {
    let lang = getLanguageCode(path)
    const post = imports[path] as any;
    if (post) {
      posts.push({
        postlang: lang,
        ...post.metadata,
        html: render && post.default.render ? post.default.render()?.html : undefined,
      });
    }
  }
  return posts;
}

export const filterPosts = (posts: BlogPost[]) => {
  return posts.filter((post) => !post.hidden)
    .sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime()
        ? -1
        : new Date(a.date).getTime() < new Date(b.date).getTime()
          ? 1
          : 0
    )
    .map((post) => {
      const readingTimeResult = post.html ? readingTime(striptags(post.html) || '') : undefined;
      const relatedPosts = getRelatedPosts(posts, post);

      return {
        ...post,
        readingTime: readingTimeResult ? readingTimeResult.text : '',
        relatedPosts: relatedPosts,
      } as BlogPost;
    });
}

// #region Unexported Functions

const getRelatedPosts = (posts: BlogPost[], post: BlogPost) => {
  // Get the first 3 posts that have the highest number of tags in common
  const relatedPosts = posts
    .filter((p) => !p.hidden && p.slug !== post.slug)
    .sort((a, b) => {
      const aTags = a.tags?.filter((t) => post.tags?.includes(t));
      const bTags = b.tags?.filter((t) => post.tags?.includes(t));
      return aTags?.length > bTags?.length ? -1 : aTags?.length < bTags?.length ? 1 : 0;
    })

  return relatedPosts.map((p) => ({
    ...p,
    readingTime: p.html ? readingTime(striptags(p.html) || '').text : '',
  }));
}

// #endregion