import RemarkDown from '@/components/RemarkDown/RemarkDown';
import { getAllPosts, getPost } from '@/service/posts';
import Image from 'next/image';

import style from './blogSlugPage.module.css';
import AdjacentPostCard from '@/components/AdjacentPostCard/AdjacentPostCard';
import { Metadata } from 'next';

type Props = {
  params: {
    postTitle: string;
  };
};

export async function generateMetadata({ params: { postTitle } }: Props): Promise<Metadata> {
  const postData = await getPost(postTitle);

  return {
    title: postData.title,
    description: postData.description,
  };
}

const page = async ({ params: { postTitle } }: Props) => {
  const postData = await getPost(postTitle);
  return (
    <article className={style.blogArticle}>
      <Image
        width={800}
        height={500}
        src={`/images/blogPosts/${postData.path}.jpg`}
        alt={postData.title}
      ></Image>

      <section className={style.meta}>
        <h1>
          <p>{postData.title}</p>
          <time>{postData.date.toString()}</time>
        </h1>
        <h3>{postData.description}</h3>
        <h4>{postData.category.toUpperCase()}</h4>
      </section>
      <RemarkDown content={postData.content}></RemarkDown>
      <p className={style.info}>If you want...</p>

      <section className={style.adjacantMetas}>
        {postData.prev && <AdjacentPostCard meta={postData.prev} type="prev"></AdjacentPostCard>}
        {postData.next && <AdjacentPostCard meta={postData.next} type="next"></AdjacentPostCard>}
      </section>
    </article>
  );
};

export default page;
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    postTitle: post.path,
  }));
}
