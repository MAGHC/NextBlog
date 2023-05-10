import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';

export type Post = {
  title: string;
  description: string;
  date: Date;
  path: string;
  featured: boolean;
  category: string;
};

export type MdPost = Post & { content: string; prev: null | Post; next: Post | null };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export const getAllPosts = cache(async (): Promise<Post[]> => {
  console.log('실행확인');
  const filePath = path.join(process.cwd(), 'data', 'blogPosts', 'blogPosts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
});

export async function getPost(title: string): Promise<MdPost> {
  const filePath = path.join(process.cwd(), 'data', 'blogPosts', `${title}.md`);
  const posts = await getAllPosts();
  const data = posts.find((post) => post.path === title);

  if (!data) throw new Error('no post');

  const thisIdx = posts.indexOf(data);
  const prev = thisIdx === 0 ? null : posts[thisIdx - 1];
  const next = thisIdx === posts.length - 1 ? null : posts[thisIdx + 1];

  const content = await readFile(filePath, 'utf-8');

  return { ...data, content, prev, next };
}
