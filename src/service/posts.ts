import { readFile } from 'fs/promises';
import path from 'path';

export type Post = {
  title: string;
  description: string;
  date: Date;
  path: string;
  featured: boolean;
  category: string;
};

export type MdPost = Post & { content: string };

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'blogPosts', 'blogPosts.json');

  return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPost(title: string): Promise<MdPost> {
  const filePath = path.join(process.cwd(), 'data', 'blogPosts', `${title}.md`);
  const data = await getAllPosts().then((posts) => posts.find((post) => post.path === title));

  if (!data) throw new Error('no post');

  const content = await readFile(filePath, 'utf-8');

  return { ...data, content };
}
