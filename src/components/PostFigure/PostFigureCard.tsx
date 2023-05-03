import { Post } from '@/service/posts';
import Image from 'next/image';

import style from './PostFigureCard.module.css';
import Link from 'next/link';

type Props = {
  post: Post;
};

const PostFigureCard = ({ post: { path, title, description, date } }: Props) => {
  return (
    <Link href={`/posts/${path}`}>
      <article className={style.blogFigure}>
        <Image width={350} height={200} alt={title} src={`/images/blogPosts/${path}.jpg`}></Image>
        <div className={style.caption}>
          <h3>{title}</h3>
          <h5>{description}</h5>
          <time>{date.toString()}</time>
        </div>
      </article>
    </Link>
  );
};

export default PostFigureCard;
